import React from "react";
import { useRouter } from "next/dist/client/router";
import { Sidebar } from "./components/index";

const mentorsData = [
  {
    name: "Martha C.",
    description: "UX Designer and Researcher Match Level: 94%, very high",
  },
  {
    name: "Martha C.",
    description: "UX Designer and Researcher Match Level: 94%, very high",
  },
  {
    name: "Martha C.",
    description: "UX Designer and Researcher Match Level: 94%, very high",
  },
  {
    name: "Martha C.",
    description: "UX Designer and Researcher Match Level: 94%, very high",
  },
  {
    name: "Martha C.",
    description: "UX Designer and Researcher Match Level: 94%, very high",
  },
  {
    name: "Martha C.",
    description: "UX Designer and Researcher Match Level: 94%, very high",
  },
  {
    name: "Martha C.",
    description: "UX Designer and Researcher Match Level: 94%, very high",
  },
  {
    name: "Martha C.",
    description: "UX Designer and Researcher Match Level: 94%, very high",
  },
  {
    name: "Martha C.",
    description: "UX Designer and Researcher Match Level: 94%, very high",
  },
];

function MentorMatch() {
  const router = useRouter();
  const { preferredTechField, softSkills, mentorSkills, userWrittenResponse } =
    router.query;
  return (
    <div className="grid grid-cols-10 h-[100vh]">
      <Sidebar />
      <div className="col-span-9 p-10 w-full">
        <h1 className="font-medium text-xl text-primary-blue">
          Thanks for filling out the questionaire!
        </h1>
        <h2 className="font-light text-sm text-gray-400">
          You have been paired with 9 recommended mentors. Chat with a couple to
          establish your best fit!
        </h2>
        <div className="grid grid-cols-3 mt-10">
          {mentorsData?.map(({name, description}, index) => (
              <div key={index} className="w-[10rem] h-[10rem] text-center flex flex-col justify-center items-center" >
                <div className="w-[20px] h-[20px] rounded-full">{name[0]}</div>
                <h1>{name}</h1>
                <p>{description}</p>
                <button>Connect</button>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MentorMatch;
