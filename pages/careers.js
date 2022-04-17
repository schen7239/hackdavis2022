import React, { useState } from "react";
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

function Careers() {
  const OpportunitiesTab = "opputitunities tab";
  const CheckInsTab = "check ins tab";
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
    switch (tab) {
      case OpportunitiesTab:
        return (
          <div className="grid grid-cols-2 bg-gray-100 mx-20 mt-20 gap-8">
            <div>
              <SearchBar />
              <div className="mt-10">
                {Internships?.map(
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
              <InfoBlock>
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
                  {Internships?.map(({ title, location }, index) => (
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
      case CheckInsTab:
        return <div>hi2</div>;
      case ExercisesTab:
        return <div>hi3</div>;
    }
  }

  return (
    <div className="h-[100vh] select-none bg-main-bg-gray">
      <main className="h-[100%] grid grid-cols-10">
        <Sidebar />
        <div className="col-span-9">
          <div className="mx-40 mt-20 flex-1 columns-3">
            <p
              onClick={() => setTab(OpportunitiesTab)}
              className="flex justify-center text-2xl font-semibold"
            >
              Opportunities
            </p>
            <p
              onClick={() => setTab(CheckInsTab)}
              className="flex justify-center text-2xl font-semibold"
            >
              Check-ins
            </p>
            <p
              onClick={() => setTab(ExercisesTab)}
              className="flex justify-center text-2xl font-semibold"
            >
              Exercises
            </p>
          </div>
          <DisplayTab />
        </div>
      </main>
    </div>
  );
}

export default Careers;
