import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  Sidebar,
  MessageBar,
  MessageTopBar,
  Message,
  RectangleButton,
} from "./components";
import { useTimer } from "react-timer-hook";
import { useRouter } from "next/dist/client/router";
import Modal from "react-modal";

const mentorMessages = [
  "What do you like to do for fun?",
  "What is your preferred field of tech?",
  "What are you looking for in a mentor?",
];

function Messages() {
  const [messagesRecieved, setMessagesRecieved] = useState([]);
  const [messageReciepts, setMessageReciepts] = useState([]);
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 30);

  const { seconds, restart } = useTimer({
    time,
    onExpire: () => setModalIsOpen(true),
  });

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
    if (messagesRecieved.length < mentorMessages.length) {
      setMessagesRecieved([...messagesRecieved, mentorMessages[messagesRecieved.length]]);
      setMessageReciepts([
        ...messageReciepts,
        { content: message, isRecieved: false },
        { content: mentorMessages[messagesRecieved.length], isRecieved: true },
      ]);
    } else {
      setMessageReciepts([...messageReciepts, message]);
    }
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + 30);
    setMessage("");
    restart(newTime);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: 500,
      width: 700,
    },
  };

  return (
    <div className="h-[100vh] select-none bg-main-bg-gray">
      <Modal style={customStyles} isOpen={modalIsOpen}>
        <div className="flex-col flex items-center">
          <div className="flex w-[100%]">
            <Icon
              onClick={() => setModalIsOpen(false)}
              height={30}
              width={30}
              color="#3C8BE0"
              icon="eva:arrow-ios-back-fill"
            />
          </div>
          <p className="text-2xl mt-8">Do you want to confirm Martha as your mentor?</p>
          <div className="flex gap-4 mt-8">
            <RectangleButton
              text="Connect"
              textColor="white"
              color="primary-blue"
              onClick={() => router.push("/")}
            />
            <RectangleButton
              text="Maybe Later"
              textColor="red-500"
              color="red-200"
              onClick={() => router.push("/")}
            />
          </div>

          <p className="text-2xl mt-12 mb-8">Please upload your resume.</p>
          <RectangleButton text="Upload" textColor="white" color="primary-blue" />
        </div>
      </Modal>
      <main className="h-[100%] grid grid-cols-10">
        <Sidebar />
        <MessageTopBar />
        <div className="mt-32 col-span-9 mx-24">
          {messageReciepts.map(({ content, isRecieved }, index) => (
            <Message key={index} content={content} isRecieved={isRecieved} />
          ))}
          <div className="flex justify-center">
            <div className="flex flexColumn items-center gap-4">
              <RectangleButton
                text="Connect"
                textColor="white"
                color="primary-blue"
                onClick={() => setModalIsOpen(true)}
              />
              <div className="h-24 w-24 rounded-full bg-white border-8 flex items-center justify-center">
                <p className="text-4xl text-primary-blue font-semibold">{seconds}</p>
              </div>
              <RectangleButton
                text="Maybe Later"
                textColor="red-500"
                color="red-200"
                onClick={() => router.push("/")}
              />
            </div>
          </div>
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
