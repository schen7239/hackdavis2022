import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Sidebar, MessageBar, MessageTopBar, Message } from "./components";

const mentorMessages = [
  "What do you like to do for fun?",
  "What is your preferred field of tech?",
  "What are you looking for in a mentor?",
];

function Messages() {
  const [messagesSent, setMessagesSent] = useState([]);
  const [messagesRecieved, setMessagesRecieved] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    var input = document.getElementById("message input");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        sendMessage();
      }
    });
  });

  function sendMessage() {
    setMessagesSent([...messagesSent, message]);
    setMessage("");
    if (messagesRecieved.length < mentorMessages.length) {
      setMessagesRecieved([...messagesRecieved, mentorMessages[messagesRecieved.length]]);
    }
  }

  return (
    <div className="h-[100vh] select-none bg-main-bg-gray">
      <main className="h-[100%] grid grid-cols-10">
        <Sidebar />
        <MessageTopBar />
        <div className="mt-32 col-span-9 ml-24">
          {messagesSent.map((message, index) => (
            <Message key={index} content={message} />
          ))}
        </div>
        <MessageBar>
          <input
            id="message input"
            className="w-[95%] outline-0 text-lg"
            type="text"
            value={message}
            onChange={(m) => setMessage(m.target.value)}
          />

          <Icon
            onClick={() => sendMessage()}
            className="mr-5"
            height={18}
            width={18}
            color="#3C8BE0"
            icon="fluent:send-16-regular"
          />
        </MessageBar>
      </main>
    </div>
  );
}

export default Messages;
