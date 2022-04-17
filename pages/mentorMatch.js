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
          You have been paired with 9 recommended mentors. Chat with a couple to establish
          your best fit!
        </h2>
        <div className="grid grid-cols-3 grid-auto mt-10 w-full gap-x-10 gap-y-10 px-20">
          {mentorsData?.map(({ name, description }, index) => (
            <div
              key={index}
              className="text-center flex flex-col justify-center place-items-center px-4 py-6 bg-white space-y-2 border-2 rounded-xl shadow-md"
            >
              <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-red-200">
                {name[0]}
              </div>
              <h1 className="text-xl font-semibold">{name}</h1>
              <p className="w-[10rem] text-sm text-gray-400">{description}</p>
              <button
                onClick={() => router.push("/messages")}
                className="px-3 py-2 border rounded-lg border-primary-blue text-primary-blue active:scale-90 transition duration-150 ease-out"
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MentorMatch;
