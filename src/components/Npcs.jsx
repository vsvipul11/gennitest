import { useAnimations, useFBX } from "@react-three/drei";

import { useYuka } from "../hooks/useYuka";
import { Jacob } from "./Character/Jacob";
import {Assistant } from "./Character/Assistant";
import {Assist} from "./Character/Assist";
import { CustomPerson } from "./Yuka/CustomPerson";
import { useEffect , useState , useRef} from "react";
import { useZustStore } from "../hooks/useStore";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useConvaiClient } from "../hooks/useConvaiClient";
import { squaredDistance } from "../helpers/squaredDistance";

const MIN_DISTANCE_JACOB = 20;

const JacobNpc = ({ name, position, heroRef }) => {
  const { client } = useConvaiClient({
    _apiKey: import.meta.env["VITE_CONVAI_APIKEY"],
    _characterId: import.meta.env["VITE_CHARACTER_ID"],
  });

  const [assistantCharActions, setAssistantCharActions] = useState(null);
  const [actionPerformed, setActionPerformed] = useState(false);
 
  const yourGroupRef = useRef();

  const [actionState, updateActionState] = useZustStore((state) => [
    state?.actionState,
    state.actions.updateActionState,
  ]);
  const updateClient = useZustStore((state) => state.updateClient);
  const clientState = useZustStore((state) => state.clientState);
  const [ref] = useYuka({
    type: CustomPerson,
    energy: 25,
    name: name,
    position: position,
  });
  const { animations: standingAnimation } = useFBX("animations/Standing.fbx");
  const { animations: walkingAnimation } = useFBX("animations/Walking.fbx");
  const { animations: talkingAnimation } = useFBX("animations/TalkingMale.fbx");
  const { animations: listeningAnimation } = useFBX("animations/Listening.fbx");
  walkingAnimation[0].name = "walking";
  standingAnimation[0].name = "idle";
  talkingAnimation[2].name = "talking";
  listeningAnimation[0].name = "listening";
  const { actions } = useAnimations(
    [
      standingAnimation[0],
      walkingAnimation[0],
      talkingAnimation[2],
      listeningAnimation[0],
    ],
    ref
  );

  const handleActionsReady = (actions) => {
    setAssistantCharActions(actions);
    // console.log(actions);
  };

  useEffect(() => {
    actions[actionState.Jacob]?.reset()?.fadeIn(1)?.play();
    return () => {
      actions[actionState.Jacob]?.reset().fadeOut(1);
    };
  }, [actionState?.Jacob]);

  useEffect(() => {
    if (!assistantCharActions) return;
    if (client?.isProximity) {
      updateClient(client);
      if (client?.isTalking) {
        updateActionState.Jacob("talking");
        assistantCharActions.Idle.stop();
        assistantCharActions.Talking.play();
      } else {
        updateActionState.Jacob("listening");
       // assistantCharActions.Idle.play();
        // assistantCharActions.Talking.stop();
        // assistantCharActions.Namaskar.stop();
      }
      window.addEventListener("keydown", client?.handleKeyPress);
      window.addEventListener("keyup", client?.handleKeyRelease);
      return () => {
        window.removeEventListener("keydown", client?.handleKeyPress);
        window.removeEventListener("keyup", client?.handleKeyRelease);
      };
    }
  }, [
    client?.userText,
    client?.npcText,
    client?.isProximity,
    client?.keyPressed,
    client?.isTalking,
  ]);

  let playedNamaskarAnimation = false;

  useFrame((state, delta) => {
    const jacobWorldPosition = ref.current.getWorldPosition(
      new THREE.Vector3()
    );
    const heroWorldPosition = heroRef.current.getWorldPosition(
      new THREE.Vector3()
    );
    let distance = squaredDistance(jacobWorldPosition, heroWorldPosition);
    if (client?.isProximity) {
      ref.current.lookAt(heroWorldPosition);
      if (distance > MIN_DISTANCE_JACOB) {
      
        assistantCharActions.Idle.play();
        assistantCharActions.Talking.stop();
        assistantCharActions.Namaskar.stop();
    
       
        client.setIsProximity(false);
        updateActionState.Jacob("idle");

        if (
          clientState?.npcName === client?.npcName ||
          client?.characterId === VITE_JACOB_ID
        ) {
          updateClient(null);
        }
      }
    }
     // Declare a boolean variable to track if Namaskar animation has been played

    if (distance < MIN_DISTANCE_JACOB && clientState === null ) {
        
            client?.setIsProximity(true);
            // assistantCharActions.Namaskar.play();
            // assistantCharActions.Idle.stop();
            console.log('hhehehe')
            assistantCharActions.Idle.stop();
            assistantCharActions.Talking.stop();
            assistantCharActions.Namaskar.setLoop(THREE.LoopOnce);
            assistantCharActions.Namaskar.play();
            setTimeout(() => {
              assistantCharActions.Idle.play();
          }, 3000); // 4 seconds delay
    }
  });


  return (
    <group>
       
      <Jacob reference={ref} />
      <Assistant reference={ref}  onActionsReady={handleActionsReady} />
      <Assist reference={ref} group1={yourGroupRef}  onActionsReady={handleActionsReady} />
     
       
     
    </group>
  );
};
export { JacobNpc };
