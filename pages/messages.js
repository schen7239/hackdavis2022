import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Sidebar } from "./components";
import { StickyContainer, Sticky } from "react-sticky";

function Messages() {
  const [message, setMessage] = useState("");
  return (
    <div className="h-[100vh] select-none bg-main-bg-gray">
      <main className="h-[100%] grid grid-cols-10">
        <Sidebar />
        <div className="fixed bottom-0 right-0 w-[90%]">
          <div className="h-24 bg-messages-gray w-full flex items-center justify-around">
            <Icon height={26} width={26} color="#A5ABB3" icon="bi:camera-fill" />
            <Icon
              height={26}
              width={26}
              color="#A5ABB3"
              icon="ic:baseline-insert-photo"
            />
            <Icon height={26} width={26} color="#A5ABB3" icon="fa6-solid:microphone" />
            <div className="h-12 bg-white w-[80%] rounded-full flex items-center pl-5 justify-between">
              <input
                className="w-[95%] outline-0 text-lg"
                type="text"
                value={message}
                onChange={(m) => setMessage(m.target.value)}
              />
              <Icon
                onClick={() => console.log("clicked")}
                className="mr-5"
                height={18}
                width={18}
                color="#3C8BE0"
                icon="fluent:send-16-regular"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Messages;
