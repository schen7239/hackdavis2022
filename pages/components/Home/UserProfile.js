import { Icon } from "@iconify/react";
import React from "react";
import { UserSettings } from "../index";
import { InfoBlock } from "../../components/index";

const badgeData = [
  {
    title: "Empathy in Design",
    icon: "iconoir:twitter-verified-badge",
  },
  {
    title: "Design Basics",
    icon: "iconoir:twitter-verified-badge",
  },
  {
    title: "Intro to Design",
    icon: "iconoir:twitter-verified-badge",
  },
  {
    title: "CSS Basics",
    icon: "iconoir:twitter-verified-badge",
  },
];

function UserProfile() {
  return (
    <>
      <div className="col-span-1 pr-10">
        <UserSettings />
        <div className="mt-6">
          <h1 className="font-medium text-xl pb-5">My Profile</h1>
          <InfoBlock className="flex flex-col gap-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 h-16 w-16 rounded-full" />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Lauren Outhabong</h1>
                <p className="text-gray-400 text-sm">UI/UX Designer</p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold pb-2">Mentor Feedback:</h2>
              <div className="flex gap-6 text-center text-sm font-light">
                <p className="bg-button-gray px-2 py-1 rounded-xl">
                  “Great job on your recent project for class! I love how you laid out
                  each step of the design process in detail.”
                </p>
                <p className="bg-button-gray px-2 py-1 rounded-xl">
                  “Amazing work on the hw exercise! I can see your progression as you
                  complete these new assignments.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold pb-2">Achievements: </h2>
              <div className="flex space-x-8">
                {badgeData?.map(({ title, icon }, index) => (
                  <div
                    key={title}
                    className="w-16 flex flex-col justify-center items-center"
                  >
                    <div
                      className={`h-14 w-14 rounded-xl flex items-center justify-center ${
                        index % 2 == 0 ? "bg-primary-blue" : "bg-light-blue"
                      }`}
                    >
                      <Icon
                        className="w-8 h-8"
                        icon={icon}
                        color={`${index % 2 == 0 ? "white" : "#3C8BE0"}`}
                      />
                    </div>
                    <p className="text-center text-sm font-semibold pt-2">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </InfoBlock>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
