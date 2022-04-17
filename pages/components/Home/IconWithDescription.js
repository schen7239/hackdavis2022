import React from "react";

function IconWithDescription({ icon, title, subtitle, content, className }) {
  return (
    <div className={className}>
      <div className="flex items-center space-x-4">
        {icon}
        {content == null ? (
          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-gray-400 text-sm">{subtitle}</p>
          </div>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

export default IconWithDescription;
