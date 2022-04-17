import React from "react";
import { useRouter } from "next/dist/client/router";
import { Sidebar } from './components/index'

function MentorMatch() {
  const router = useRouter();
  const { preferredTechField, softSkills, mentorSkills, userWrittenResponse } = router.query;
  return (
    <div className="grid grid-cols-10 h-[100vh]" >
        <Sidebar />
    </div>
  );
}

export default MentorMatch;
