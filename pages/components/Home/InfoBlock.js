import React from "react";

function InfoBlock(props) {
  return (
    <div className={props.className}>
      <div className="rounded-lg bg-white shadow-md py-6 px-8">
        {props.children}
      </div>
    </div>
  );
}

export default InfoBlock;
