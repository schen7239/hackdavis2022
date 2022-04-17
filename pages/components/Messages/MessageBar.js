import React from "react";
import { Icon } from "@iconify/react";

function MessageBar(props) {
  return (
    <div className="fixed bottom-0 right-0 w-[90%]">
      <div className="h-24 bg-messages-gray w-full flex items-center justify-around">
        <Icon height={26} width={26} color="#A5ABB3" icon="bi:camera-fill" />
        <Icon height={26} width={26} color="#A5ABB3" icon="ic:baseline-insert-photo" />
        <Icon height={26} width={26} color="#A5ABB3" icon="fa6-solid:microphone" />
        <div className="h-12 bg-white w-[80%] rounded-full flex items-center pl-5 justify-between">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default MessageBar;
