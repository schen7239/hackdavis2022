import { Icon } from "@iconify/react";
import React, { useState } from "react";

function SearchBar({ filteredJobsData, setFilteredJobsData }) {
  const handleChange = (e) => {
    let newArray = [...filteredJobsData]
    let index = newArray.find(element => element == e.target.value);
    if (index == undefined) return setFilteredJobsData([...newArray, e.target.value])
    setFilteredJobsData([...newArray.filter(element => element != e.target.value)])
  }
  return (
    <div className="rounded-full bg-white shadow-md items-center flex flexRow p-2">
      <div className="rounded-full bg-primary-blue py-3 px-5">
        <Icon icon="codicon:search" color="white" />
      </div>
      <div  className="flex flex-col w-full">
        <div className="flex justify-around w-full">
          <div>
            <p className="flex justify-center content-center">Field</p>
          </div>
          <div>
            <p className="flex justify-center content-center">Location</p>
          </div>
          <div>
            <p className="flex justify-center content-center">Term</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <h1>Remote/In-Person</h1>
            <label>
            <input type="checkbox" onChange={handleChange} value="Remote" />
            Remote
            </label>
            <label>
            <input type="checkbox" onChange={handleChange} value="In-Person" />In-Person
            </label>
          </div>
          {/* <div className="flex flex-col">
            <input type="checkbox" />
            <input type="checkbox" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
