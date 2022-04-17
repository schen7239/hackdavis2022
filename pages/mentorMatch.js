import React from "react";
import { useRouter } from "next/dist/client/router";
import { Sidebar } from './components/index'



function MentorMatch() {
  const router = useRouter();
  const { preferredTechField, softSkills, mentorSkills, userWrittenResponse } = router.query;
  return (
    <div className="grid grid-cols-10 h-[100vh]" >
        <Sidebar />
        <div className="col-span-9 p-10 w-full">
          <h1 className="font-medium text-xl">Thanks for filling out the questionaire!</h1>
          <h2 className="font-light text-sm text-gray-400">You've been paired with 4 recommended mentors. Chat with a couple to establish your best fit!</h2>
          <div className="grid grid-cols-2 text-center justify-center items-center">
              
          </div>
          </div>
    </div>
  );
}

export default MentorMatch;
