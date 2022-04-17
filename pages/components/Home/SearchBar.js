import { Icon } from "@iconify/react";
import React from "react";


function SearchBar() {
  return (
    <div className="rounded-full bg-white shadow-md items-center flex flexRow p-2">
      <div className="rounded-full bg-primary-blue py-3 px-5">
        <Icon icon="codicon:search" color="white" />
      </div>
      <div className="columns-3 flex-1">
        <div className="">
          <p className="flex justify-center content-center">Field</p>
        </div>
        <div>
          <p className="flex justify-center content-center">Location</p>
        </div>
        <div>
          <p className="flex justify-center content-center">Term</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
