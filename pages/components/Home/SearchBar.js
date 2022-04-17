import { Icon } from "@iconify/react";
import React, { useState } from "react";

function SearchBar({ setFilterParams }) {
  const [career, setCareer] = useState("");
  const [location, setLocation] = useState("");
  const [term, setTerm] = useState("");
  return (
    <>
      <div className="rounded-full bg-white shadow-md items-center py-1 flex h-auto w-full overflow-hidden px-2 space-x-2">
        <button
          onClick={() => {
            setFilterParams([
              career.toLowerCase(),
              location.toLowerCase(),
              term.toLowerCase(),
            ]);
          }}
          className="rounded-full bg-primary-blue p-3"
        >
          <Icon icon="codicon:search" color="white" />
        </button>
        <input
          onChange={(e) => setCareer(e.target.value)}
          className="flex justify-center content-center outline-none"
          value={career}
          type="text"
          placeholder="Career Field"
        />
        <input
          onChange={(e) => setLocation(e.target.value)}
          className="flex justify-center content-center outline-none"
          value={location}
          type="text"
          placeholder="Location"
        />
        <input
          onChange={(e) => setTerm(e.target.value)}
          className="flex justify-center content-center outline-none"
          value={term}
          type="text"
          placeholder="Term"
        />
      </div>
    </>
  );
}

export default SearchBar;
