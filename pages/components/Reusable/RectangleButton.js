import React from "react";

function RectangleButton({ text, textColor, color, onClick }) {
  return (
    <button
      className={`w-auto h-auto text-${textColor} bg-${color} rounded-2xl px-2 py-1 text-xs font-medium active:scale-90 transition duration-150 ease-out`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default RectangleButton;