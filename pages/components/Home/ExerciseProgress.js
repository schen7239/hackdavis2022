import React from "react";
import { Icon } from "@iconify/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const exerciseProgress = [
  {
    exercise: "Prototyping 101",
    percentCompleted: 78,
  },
  {
    exercise: "UI/UX Basics",
    percentCompleted: 95,
  },
  {
    exercise: "Storyboarding",
    percentCompleted: 53,
  },
];
function ExerciseProgress() {
  return (
    <>
      <h1 className="font-medium text-xl pb-4">Exercise Progress</h1>
      <div className="grid grid-cols-5 bg-white p-4 rounded-xl shadow-md">
        <div className="col-span-2 bg-[#F5F5F5] rounded-xl py-5">
          <Tabs className="h-12 w-full">
            <TabList className="flex space-x-2 justify-around items-center text-sm">
              <Tab selectedClassName="outline-none underline decoration-4 underline-offset-8 decoration-primary-blue">
                Total Exercises
              </Tab>
              <Tab selectedClassName="outline-none underline decoration-4 underline-offset-8 decoration-primary-blue">
                In-Progress
              </Tab>
              <Tab selectedClassName="outline-none underline decoration-4 underline-offset-8 decoration-primary-blue">
                Completed
              </Tab>
            </TabList>
            <div className="p-8">
              <TabPanel>
                <div className="space-y-8 text-sm py-4">
                  <h2>
                    Total Exercises:{" "}
                    <span className="text-primary-blue">10</span>
                  </h2>
                  <h2>
                    Hours spent on exercises:{" "}
                    <span className="text-primary-blue">28</span>
                  </h2>
                  <h2>
                    Improvement over 2 weeks:{" "}
                    <span className="text-primary-blue">4.78%</span>
                  </h2>
                  <h2>
                    New soft skill achievements over 2 weeks:{" "}
                    <span className="text-primary-blue">3</span>
                  </h2>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any Content 3</h2>
              </TabPanel>
            </div>
          </Tabs>
        </div>
        <div className="col-span-3 pl-10 w-full">
          {exerciseProgress?.map(({ exercise, percentCompleted }) => (
            <div
              key={exercise}
              className="w-full flex items-center space-x-6 bg-[#F5F5F5] mb-4 p-4 rounded-xl"
            >
              <Icon
                icon="bi:play-circle-fill"
                width={40}
                height={40}
                className="text-primary-blue"
              />
              <div className="flex flex-col w-[150px]">
                <h1 className="text-lg font-medium">{exercise}</h1>
                <h1 className="text-xs text-gray-400">Video Module</h1>
              </div>
              <div className="flex-1 space-y-2">
                <h1 className="text-sm">
                  Progress:{" "}
                  <span className="text-primary-blue">{percentCompleted}%</span>{" "}
                  completed
                </h1>
                <div className="w-full h-4 bg-white rounded-lg">
                  <div
                    style={{ width: `${percentCompleted}%` }}
                    className={`h-4 bg-light-blue rounded-lg`}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <p>Intro</p>
                  <p>Exercises</p>
                  <p>End</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExerciseProgress;
