import React from "react";

function RectangleButton({ text, textColor, color, onClick }) {
  return (
    <button
      className={`h-fit text-${textColor} bg-${color} rounded-xl px-4 py-2 text-xs font-medium active:scale-90 transition duration-150 ease-out text-center`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default RectangleButton;
