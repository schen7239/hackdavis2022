import React from "react";

function Message({ content }) {
  return (
    <div className="py-3 px-5 m-2 rounded-full bg-messages-gray justify-start w-fit">
      <p>{content}</p>
    </div>
  );
}

export default Message;
