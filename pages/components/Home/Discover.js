import React, { useState } from "react";
import { SavedJobs, UserProfile } from "../index";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Discover() {
  return (
    <div className="col-span-9 bg-main-bg-gray">
      <div className="grid grid-cols-2">
        <SavedJobs />
        <UserProfile />
      </div>
      <div className="px-10">
        <h1 className="font-medium text-xl pb-4">Exercise Progress</h1>
        <div className="grid grid-cols-2 bg-white p-4">
          <div className="span-col-1">
            <div>
              <Tabs className="h-12 w-full">
                <TabList className="flex space-x-6 bg-button-gray px-4 py-2 rounded-full justify-around items-center">
                  <Tab selectedClassName="bg-white px-3 py-1 rounded-full">
                    Total Exercises
                  </Tab>
                  <Tab selectedClassName="bg-white px-3 py-1 rounded-full">
                    In Progress
                  </Tab>
                  <Tab selectedClassName="bg-white px-3 py-1 rounded-full">Completed</Tab>
                </TabList>

                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any Content 3</h2>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="span-col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
