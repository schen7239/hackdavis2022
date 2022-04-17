import React, { useState } from "react";
import { SavedJobs, UserProfile, ExerciseProgress } from "../index";

function Discover() {
  return (
    <div className="col-span-9 bg-main-bg-gray">
      <div className="grid grid-cols-2">
        <SavedJobs />
        <UserProfile />
      </div>
      <div className="px-10 pb-10">
          <ExerciseProgress />
      </div>
    </div>
  );
}

export default Discover;
