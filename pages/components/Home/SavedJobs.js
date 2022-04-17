import React from "react";
import { UserJobCard, UserSettings } from "../index";
import Internships from "../../data/internships.json";

const data = [
  {
    title: "UI/UX Designer",
    posted: "Posted 2 days ago",
    description:
      "We are looking to hire a Fall 2022 UI/UX design intern to join our SF team! Apply for the internship listing today, the job offer will expire on June 2022.",
    isInternship: true,
    isInPerson: false,
  },
  {
    title: "Software Developer",
    posted: "Posted 3 days ago",
    description:
      "We are looking to hire a Fall 2022 Software Development intern to join our SF team! Apply for the internship listing today, the job offer will expire June 2022.",
    isInternship: true,
    isInPerson: true,
  },
];

function SavedJobs() {
  return (
    <>
      <div className="col-span-1 p-10">
        <p className="text-2xl font-semibold flex-1 text-primary-blue">Hello, Lauren! Welcome.</p>
        <div className="mt-10">
          <h1 className="font-medium text-xl pb-4">Saved Jobs</h1>
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
      </div>
    </>
  );
}

export default SavedJobs;
