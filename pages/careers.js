import React, { useState, useRef } from "react";
import { Sidebar, SearchBar } from "./components";
import Internships from "./data/internships.json";
import Recommendations from "./data/reccomended.json";
import {
  UserJobCard,
  Title,
  Subtitle,
  InfoBlock,
  IconWithDescription,
} from "./components/index";
import { Icon } from "@iconify/react";
import "react-google-flight-datepicker/dist/main.css";

function Careers() {
  const OpportunitiesTab = "opputitunities tab";
  const ConnectTab = "connect tab";
  const ExercisesTab = "exercises tab";
  const [tab, setTab] = useState(OpportunitiesTab);

  function Reccomendation({ name, location, border }) {
    return (
      <div className="py-4">
        <p className="font-bold mb-2 text-l">{name}</p>
        <p className="text-l">{location}</p>
        {border == true ? (
          <div className="p-4 border-b-2 border-black"></div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }

  function DisplayTab() {
    const [startDate, setStartDate] = useState(Date.now());
    const [endDate, setEndDate] = useState(Date.now);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [filteredJobsData, setFilteredJobsData] = useState([]);
    const [roleData, setRoleData] = useState([]);
    let filteredInternships = Internships.filter(
      (internship) =>
        (filteredJobsData.includes("Remote") && internship.title.search("Remote") >= 0) ||
        (filteredJobsData.includes("In-Person") &&
          internship.title.search("In-Person") >= 0) || (roleData.includes("design") && internship.title.includes("Design")) ||
          (roleData.includes("engineer") &&
            internship.title.includes("Engineer")) ||
            (roleData.includes("develop") &&
              internship.title.includes("Develop"))
    );
    switch (tab) {
      case OpportunitiesTab:
        return (
          <div className="grid grid-cols-2 bg-gray-100 mx-20 mt-20 gap-8">
            <div>
              <SearchBar
                filteredJobsData={filteredJobsData}
                setFilteredJobsData={setFilteredJobsData}
                roleData={roleData}
                setRoleData={setRoleData}
              />
              <div className="mt-10">
                {filteredInternships?.map(
                  ({ title, posted, description, isInternship, isInPerson }) => (
                    <UserJobCard
                      key={title}
                      title={title}
                      posted={posted}
                      description={description}
                      isInternship={isInternship}
                      isInPerson={isInPerson}
                    />
                  )
                )}
              </div>
              <InfoBlock className="mt-5">
                <div className="flex flexRow items-center justify-between">
                  <div>
                    <Title>Put your best foot forward</Title>
                    <Subtitle>
                      Request a resume review from an industry professional
                    </Subtitle>
                  </div>
                  <button className="w-auto h-8 text-white bg-primary-blue rounded-full px-2 py-1 text-xs font-medium active:scale-90 transition duration-150 ease-out">
                    Request
                  </button>
                </div>
              </InfoBlock>
            </div>
            <div>
              <InfoBlock>
                <Title>Recomended for you</Title>
                <Subtitle>Based on your profile and search history</Subtitle>
                <div className="mt-10">
                  {Recommendations?.map(({ name, location }, index) => (
                    <Reccomendation
                      key={name}
                      name={name}
                      location={location}
                      border={index != Recommendations.length - 1}
                    />
                  ))}
                </div>
              </InfoBlock>
              <InfoBlock className="mt-4">
                <Title>Similar jobs for you</Title>
                <Subtitle>Based off the jobs you saved recently</Subtitle>
                <div className="mt-10">
                  {Internships.slice(5, 8).map(({ title, location }, index) => (
                    <IconWithDescription
                      className="mt-8"
                      key={index}
                      title={title}
                      subtitle={location}
                      icon={<div className="h-12 w-12 rounded-full bg-blue-100" />}
                    />
                  ))}
                </div>
              </InfoBlock>
            </div>
          </div>
        );
      case ConnectTab:
        return (
          <div className="grid grid-cols-6">
            <div className="col-start-2 col-span-4 bg-white rounded-full mt-6 px-6 h-16 border-2 flex justify-between items-center space-x-6">
              <h1 className="font-semibold text-lg text-primary-blue">Elementee.</h1>
              <input
                className="w-[10rem] flex-1 outline-none h-full px-4 rounded-full focus:shadow-xl"
                placeholder="Start Date"
              />
              <input
                className="w-[10rem] flex-1 outline-none h-full px-4 rounded-full focus:shadow-xl"
                placeholder="End Date"
              />
              <button className="bg-primary-blue w-12 h-12 rounded-full flex items-center justify-center active:scale-90 transition duration-150 ease-out">
                <Icon className="h-6 w-6 text-white" icon="carbon:search" />
              </button>
            </div>
            <div className="grid"></div>
          </div>
        );
      case ExercisesTab:
        return <div>hi3</div>;
    }
  }

  return (
    <div className="h-[100vh] select-none bg-main-bg-gray">
      <main className="h-[100%] grid grid-cols-10">
        <Sidebar />
        <div className="col-span-9">
          <div className="mx-40 mt-20 width-full grid grid-cols-3">
            {tab === OpportunitiesTab ? (
              <div className="border-b-4 b border-primary-blue">
                <p
                  onClick={() => setTab(OpportunitiesTab)}
                  className="flex justify-center text-2xl font-semibold"
                >
                  Opportunities
                </p>
              </div>
            ) : (
              <p
                onClick={() => setTab(OpportunitiesTab)}
                className="flex justify-center text-2xl font-semibold"
              >
                Opportunities
              </p>
            )}
            {tab === ConnectTab ? (
              <div className="border-b-4 b border-primary-blue">
                <p
                  onClick={() => setTab(ConnectTab)}
                  className="flex justify-center text-2xl font-semibold"
                >
                  Connect
                </p>
              </div>
            ) : (
              <p
                onClick={() => setTab(ConnectTab)}
                className="flex justify-center text-2xl font-semibold"
              >
                Connect
              </p>
            )}
            {tab === ExercisesTab ? (
              <div className="border-b-4 b border-primary-blue">
                <p
                  onClick={() => setTab(ExercisesTab)}
                  className="flex justify-center text-2xl font-semibold"
                >
                  Exercises
                </p>
              </div>
            ) : (
              <p
                onClick={() => setTab(ExercisesTab)}
                className="flex justify-center text-2xl font-semibold"
              >
                Exercises
              </p>
            )}
          </div>
          <DisplayTab />
        </div>
      </main>
    </div>
  );
}

export default Careers;
