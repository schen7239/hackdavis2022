import React from "react";
import { Icon } from "@iconify/react";

function UserSettings() {
  return (
    <div className="flex items-center justify-end space-x-4 pt-5">
      <div className="flex items-center justify-center space-x-4 h-8 w-8 bg-white rounded-full text-primary-blue">
        <Icon height={16} width={16} icon="clarity:bell-outline-badged" />
      </div>
      <div className="bg-gray-400 rounded-full w-16 h-16" />
      <Icon icon="akar-icons:chevron-down" />
    </div>
  );
}

export default UserSettings;
