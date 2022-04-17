import React, { useState } from "react";
import { Sidebar } from "./components/index";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export function RadioButtonsGroup({ question, inputArray, setFunction }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{question}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={inputArray[0]}
        name="radio-buttons-group"
      >
        {inputArray?.map((item) => (
          <>
            <FormControlLabel
              onChange={(e) => setFunction(e.target.value)}
              value={`${item}`}
              control={<Radio />}
              label={`${item}`}
            />
          </>
        ))}
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

function FindMentor() {
  const [preferredTechField, setPreferredTechField] = useState("");
  const [softSkills, setSoftSkills] = useState("");
  const [mentorSkills, setMentorSkills] = useState("");
  const [userWrittenResponse, setUserWrittenResponse] = useState('');
  return (
    <>
      <div className="grid grid-cols-10 h-auto w-full select-none bg-main-bg-gray">
        <Sidebar />
        <div className="col-span-9 p-10 w-full">
          <h1 className="font-medium text-xl">Hello Lauren!</h1>
          <h2 className="font-medium text-xl">
            Ready to get match? Answer a few short question.
          </h2>
          <div className="grid justify-center mt-10 space-y-4">
            <div className="bg-white p-10 w-[800px] rounded-lg">
            <RadioButtonsGroup
              question="What is your preferred tech field?"
              inputArray={["UI/UX Design", "Web Developer", "Data Science"]}
              setFunction={setPreferredTechField}
            />
            </div>
            <div className="bg-white p-10 w-[800px] rounded-lg">
            <RadioButtonsGroup
              question="What soft skills do you want to gain?"
              inputArray={["Problem Solving", "Communicating", "Leadership"]}
              setFunction={setSoftSkills}
            />
            </div>
            <div className="bg-white p-10 w-[800px] rounded-lg">
            <RadioButtonsGroup
              question="What are you looking for in a mentor?"
              inputArray={["Empathy", "Guidance", "Attention to Detail"]}
              setFunction={setMentorSkills}
            />
            </div>
            <div className="bg-white p-10 w-[800px] rounded-lg space-y-2">
              <h1 className="font-semibold">What do you like to do for fun?</h1>
              <div className="border b-2 rounded-xl px-3 py-1">
              <input className="outline-none" onChange={(e) => setUserWrittenResponse(e.target.value)} value={userWrittenResponse} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindMentor;
