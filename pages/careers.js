import React, { useState } from "react";
import { Sidebar, SearchBar } from "./components";

function Careers() {
  const OppuritunitiesTab = "opputitunities tab";
  const CheckInsTab = "check ins tab";
  const ExercisesTab = "exercises tab";
  const [tab, setTab] = useState(OppuritunitiesTab);

  function DisplayTab() {
    switch (tab) {
      case OppuritunitiesTab:
        return <SearchBar />;
      case CheckInsTab:
        return <div>hi2</div>;
      case ExercisesTab:
        return <div>hi3</div>;
    }
  }

  return (
    <div className="h-[100vh] select-none">
      <main className="h-[100%] flex flexRow grid grid-cols-5">
        <Sidebar />
        <div className="flex-1 col-span-4">
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
