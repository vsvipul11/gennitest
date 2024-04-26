import axios from "axios";
import { ConvaiClient } from "convai-web-sdk";
import { useEffect, useRef, useState } from "react";

// const nodemailer = require("nodemailer");

// Function to send an email
const sendEmail = async (recipientEmail, ticketID) => {
  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "scripterhunts@gmail.com",
      pass: "puxg mlws dupg ayxz",
    }
  });

  // Email message options
  let mailOptions = {
    from: 'your_email@gmail.com', // Sender's email address
    to: recipientEmail, // Recipient's email address
    subject: 'Your Ticket has been Generated', // Email subject
    text: `Your ticket has been generated. Here is your ticket ID: ${ticketID}` // Email body
  };

  // Send the email
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
export const useConvaiClient = ({ _apiKey, _characterId }) => {
  const [isProximity, setIsProximity] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [session, setSession] = useState("-1");
  const [keyPressed, setKeyPressed] = useState(false);
  const [userText, setUserText] = useState("");
  const [history, setHistory] = useState(1);
  const [characterID, setCharacterID] = useState(_characterId);
  const [npcText, setNpcText] = useState("");
  const [gender, setGender] = useState("MALE");
  const [actionText, setActionText] = useState("");
  const [currentCharId, setCurrentCharId] = useState("");
  const [enter, setEnter] = useState(0);
  const [messages, setMessages] = useState([]);
  const [npcName, setNpcName] = useState("Npc");
  const [userName, setUserName] = useState("User");
  const [userEndOfResponse, setUserEndOfResponse] = useState(false);
  const convaiClient = useRef(null);
  const finalizedUserText = useRef();
  const npcTextRef = useRef();
  useEffect(() => {
    if (isProximity) {
      convaiClient.current = new ConvaiClient({
        apiKey: '3816c81940af4b8d7ca06b36362f2c1d',
        characterId: 'a9adbf94-ee70-11ee-a605-42010a7be00e',
        enableAudio: true,
      });
      setCurrentCharId('a9adbf94-ee70-11ee-a605-42010a7be00e');
      convaiClient.current.setResponseCallback((response) => {
        if (response.hasUserQuery()) {
          let transcript = response.getUserQuery();
          setUserEndOfResponse(transcript.getEndOfResponse());
          let isFinal = transcript.getIsFinal();
          if (isFinal) {
            finalizedUserText.current += " " + transcript.getTextData();
            transcript = "";
          }
          if (transcript) {
            setUserText(finalizedUserText.current + transcript.getTextData());
          } else {
            setUserText(finalizedUserText.current);
          }
        }
        if (response.hasAudioResponse()) {
          let audioResponse = response?.getAudioResponse();
          npcTextRef.current += " " + audioResponse.getTextData();
          setNpcText(npcTextRef.current);
        }
        if (response.hasActionResponse()) {
          let actionResponse = response.getActionResponse();
          let parsedActions = actionResponse.getAction().trim().split("\n");
          setActionText(parsedActions[0].split(", "));
        }
      });

      const fetchData = async () => {
        // console.log("*******");
        try {
          const url = "https://api.convai.com/character/get";
          const payload = {
            charID: _characterId,
          };
          const headers = {
            "CONVAI-API-KEY": _apiKey,
            "Content-Type": "application/json",
          };

          const response = await axios.post(url, payload, { headers });
          if (npcName !== response.data.character_name) {
            setNpcName(response.data.character_name);
            setGender(response.data.voice_type);
          }
        } catch (error) {
          console.error("Error fetching character:", error);
        }
      };

      fetchData();

      convaiClient.current.onAudioPlay(() => {
        setIsTalking(true);
      });

      convaiClient.current.onAudioStop(() => {
        setIsTalking(false);
      });
    }
  }, [isProximity]);

  const userInput = (text) => {
    setUserText(text);
  };


  const handleKeyPress = (e) => {
    if (e.code === "KeyT" && !keyPressed) {
      e.stopPropagation();
      e.preventDefault();
      setKeyPressed(true);
      finalizedUserText.current = "";
      npcTextRef.current = "";
      setUserText("");
      setNpcText("");
      convaiClient.current.startAudioChunk();
    }
  };
  const handleKeyRelease = (e) => {
    if (e.code === "KeyT" && keyPressed) {
      e.preventDefault();
      setKeyPressed(false);
      convaiClient.current.endAudioChunk();
    }
  };

  const sentText = () => {
    finalizedUserText.current = "";
    npcTextRef.current = "";
    setNpcText("");
    convaiClient.current.sendTextChunk(userText);
    setEnter(0);
  };

  useEffect(() => {
    if (isTalking && !isProximity) {
      convaiClient.current.endAudioChunk();
    }
 
  }, [isProximity]);
  const showHistory = () => {
    setHistory(!history);
  };

  const ResetHistory = () => {
    const storedData = localStorage.getItem("messages");
    // console.log("Here");
    if (storedData) {
      // Parse the retrieved data from JSON format
      const parsedData = JSON.parse(storedData);
      // Update the messages for the current character ID in the stored data
      // console.log(parsedData[characterID]);
      parsedData[characterID] = {
        sessionID: -1,
        message: [""],
      };
      // Update the stored data in localStorage
      localStorage.setItem("messages", JSON.stringify(parsedData));
    }
    if (convaiClient?.current) {
      convaiClient.current.resetSession();
      // console.log("Id:", convaiClient.current.sessionId);
    }
    setSession("-1");
    setMessages([]);
    setUserText("");
    setNpcText("");
  };

  const handleRedirect = () => {
    // navigate(-1);
  };

  useEffect(() => {
    // Retrieve stored data from localStorage
    const storedData = localStorage.getItem("messages");

    if (characterID) {
      if (storedData) {
        // Parse the retrieved data from JSON format
        const parsedData = JSON.parse(storedData);

        const characterIDs = Object.keys(parsedData);

        // Check if character ID matches the stored character ID
        if (characterIDs.includes(characterID)) {
          // Retrieve the sessionID for the current character ID
          const parsedSessionID = parsedData[characterID].sessionID;
          if (parsedSessionID) {
            // Update the sessionID state
            setSession(parsedSessionID);
            // console.log("Parsed Session Id", parsedSessionID);
            // console.log("Parsed", session);
          }

          // Retrieve the messages for the current character ID
          const parsedMessage = parsedData[characterID].message;
          if (parsedMessage && session !== "-1") {
            const storedMessages = JSON.parse(parsedMessage);

            // Update the messages state
            setMessages(storedMessages);
          }
        } else {
          // No stored messages for the current character ID
          setMessages([]);
        }
      } else {
        // No stored data
        setSession("-1");
        setMessages([]);
      }
    }
  }, [characterID]);

  useEffect(() => {
    if (convaiClient) {
      if (convaiClient?.current?.sessionId !== "-1") {
        setSession(convaiClient?.current?.sessionId);
        // console.log("SessionId:", convaiClient.current.sessionId);
      }
      // console.log("Session:", session);
      if (characterID && messages) {
        // console.log("M", messages);
        const messagesJSON = JSON.stringify(messages);
        const storedData = localStorage.getItem("messages");

        if (storedData) {
          // Parse the retrieved data from JSON format
          const parsedData = JSON.parse(storedData);

          // Update the messages for the current character ID in the stored data
          parsedData[characterID] = {
            sessionID: session,
            message: messagesJSON,
          };
          // Update the stored data in localStorage
          localStorage.setItem("messages", JSON.stringify(parsedData));
        } else {
          // No stored data, create a new entry for the current character ID
          const messagesData = {
            [characterID]: {
              sessionID: session,
              message: messagesJSON,
            },
          };
          localStorage.setItem("messages", JSON.stringify(messagesData));
        }
      }
    }
  }, [characterID, messages, session]);

  // Stores User message
  useEffect(() => {
    const newMessage = {
      sender: "user",
      content: userText,
    };
    console.log(userText);

    const sendEmail = async () => {
      // Replace 'recipientEmail' with the registered email address
      const recipientEmail = 'vsvipul11@gmail.com';
  
      try {
        const response = await fetch(`http://localhost:4000/sendemail?email=${recipientEmail}`);
        const data = await response.json();
  
        // Assuming the API returns a success message
        if (response.ok) {
          console.log('API response:', data);
          // Handle the API response if needed
        } else {
          // Handle error response from API
          console.error('Error:', data.error); // Adjust based on your API response structure
        }
      } catch (error) {
        console.error('Error occurred while calling the API:', error);
      }
    };
  
    // Check if the Exide assistant response indicates that a ticket has been successfully created and an email has been sent
    if (userText == " No. ") {
      
      sendEmail();
      console.log('Your areerer e sdxmlaml successfully')
    }
    if (userText !== "")
      setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, [userText]);

  // Stores Npc's message
  useEffect(() => {
    console.log(npcText)
   
    const newMessage = {
      sender: "Exide Assistant",
      content: npcText,
    };
    if (npcText !== "")
      setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, [npcText]);

  const client = {
    convaiClient,
    setUserText,
    setNpcText,
    isProximity,
    userEndOfResponse,
    setUserEndOfResponse,
    characterId: _characterId,
    setIsProximity,
    isTalking,
    userText,
    npcName,
    userName,
    npcText,
    keyPressed,
    handleKeyPress,
    handleKeyRelease,
    userInput,
    setEnter,
    currentCharId,
    history,
    showHistory,
    ResetHistory,
    gender,
    isHovered,
    setIsHovered,
    messages,
  };

  
  
  return { client };
};

