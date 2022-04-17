import React from "react";

function Message({ content, isRecieved }) {
  return (
    <div>
      {isRecieved == true ? (
        <div className="py-3 px-5 m-2 rounded-full bg-messages-gray justify-start w-fit">
          <p>{content}</p>
        </div>
      ) : (
        <div className="justify-end flex flex-1">
          <div className="py-3 px-5 m-2 rounded-full bg-primary-blue w-fit">
            <p className="text-white">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
