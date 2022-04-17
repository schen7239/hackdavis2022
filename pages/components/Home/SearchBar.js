import { Icon } from "@iconify/react";
import React, { useState } from "react";

function SearchBar({ setFilterParams }) {
  const [career, setCareer] = useState("");
  const [location, setLocation] = useState("");
  const [term, setTerm] = useState("");
  return (
    <>
      <div className="h-[5rem] rounded-full bg-white shadow-md items-center py-1 flex h-auto w-full overflow-hidden px-2 justify-between pr-4">
        <h1 className="font-semibold text-2xl text-primary-blue ml-6">Elementee.</h1>
        <input
          onChange={(e) => setCareer(e.target.value)}
          className="flex justify-center content-center outline-none h-full text-xl"
          value={career}
          type="text"
          placeholder="Career Field"
        />
        <input
          onChange={(e) => setLocation(e.target.value)}
          className="flex justify-center content-center outline-none h-full text-xl"
          value={location}
          type="text"
          placeholder="Location"
        />
        <input
          onChange={(e) => setTerm(e.target.value)}
          className="flex justify-center content-center outline-none text-xl"
          value={term}
          type="text"
          placeholder="Term"
        />
        <button
          onClick={() => {
            setFilterParams([
              career.toLowerCase(),
              location.toLowerCase(),
              term.toLowerCase(),
            ]);
          }}
          className="rounded-full w-[6rem] bg-primary-blue p-3 flex justify-center active:scale-90 transition duration-150 ease-out"
        >
          <Icon icon="codicon:search" color="white" height={30} width={30} />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
