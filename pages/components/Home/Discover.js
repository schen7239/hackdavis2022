import React, { useState } from "react";
import { SavedJobs, UserProfile } from "../index";

function Discover() {
  return (
    <div className="col-span-4 bg-main-bg-gray">
      <div className="grid grid-cols-2">
        <SavedJobs />
        <UserProfile />
        </div>
        <div>
          <h1>Exercise Progress</h1>
        </div>
    </div>
  );
}

export default Discover;
