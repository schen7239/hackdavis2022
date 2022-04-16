import React, { useState } from "react";
import { Sidebar, SearchBar } from "./components";
import Internships from "./data/internships.json";
import Recommendations from "./data/reccomended.json";
import { UserJobCard } from "./components/index";

function Careers() {
  const OppuritunitiesTab = "opputitunities tab";
  const CheckInsTab = "check ins tab";
  const ExercisesTab = "exercises tab";
  const [tab, setTab] = useState(OppuritunitiesTab);

  function Reccomendation({ name, location }) {
    return (
      <div className="mb-5 border-b-2 border-black">
        <p className="">{name}</p>
        <p>{location}</p>
      </div>
    );
  }

  function DisplayTab() {
    switch (tab) {
      case OppuritunitiesTab:
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
              <div className="rounded-lg bg-white shadow-md my-5 flex flexRow p-10 content-center justify-between">
                <div>
                  <p className="ml-4 mt-1 text-3xl">Put your best foot forward</p>
                  <p className="ml-4 mt-2">
                    Request a resume review from an industry professional
                  </p>
                </div>
                <button className="w-auto h-8 text-white bg-primary-blue rounded-full px-2 py-1 text-xs font-medium active:scale-90 transition duration-150 ease-out">
                  Request
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md p-10 ">
              <div>
                <p className="mt-1 text-2xl">Recomended for you</p>
                <p className="mt-2">Based on your profile and search history</p>
                <div className="mt-10">
                  {Recommendations?.map(({ name, location }) => (
                    <Reccomendation key={name} name={name} location={location} />
                  ))}
                </div>
              </div>
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
      <main className="h-[100%] grid grid-cols-5">
        <Sidebar />
        <div className="col-span-4">
          <div className="mx-40 mt-20 flex-1 columns-3">
            <p
              onClick={() => setTab(OppuritunitiesTab)}
              className="flex justify-center text-2xl font-semibold"
            >
              Oppuritunities
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
