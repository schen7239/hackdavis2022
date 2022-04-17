import React from "react";
import {
  Title,
  Subtitle,
  InfoBlock,
  IconWithDescription,
  RectangleButton,
} from "../../components/index";

function UserJobCard({ title, posted, description, isInternship, isInPerson }) {
  return (
    <InfoBlock className="mt-5">
      <div className="flex">
        <div className="flex flex-col flex-1 gap-4">
          <IconWithDescription
            title={title}
            subtitle={posted}
            icon={<div className="h-12 w-12 rounded-full bg-blue-100" />}
          />
          <div className="flex space-x-4">
            {isInternship ? (
              <div className="bg-button-teal opacity-70 w-auto h-auto px-2 rounded-xl text-sm text font-semibold">
                Internship
              </div>
            ) : (
              <div className="bg-button-teal opacity-70 w-auto h-auto px-2 rounded-xl text-sm font-semibold">
                Job
              </div>
            )}
            {isInPerson ? (
              <div className="bg-light-blue opacity-50 w-auto h-auto px-2 rounded-xl text-sm font-semibold">
                In-Person
              </div>
            ) : (
              <div className="bg-light-blue opacity-50 w-auto h-auto px-2 rounded-xl text-sm font-semibold">
                Remote
              </div>
            )}
          </div>
        </div>
        <div className="space-y-2 text-center flex flex-col">
          <RectangleButton color="primary-blue" textColor="white" text="Apply Now" />
          <RectangleButton color="button-gray" textColor="black" text="Contact" />
        </div>
      </div>
      <div className="py-3 text-xs font-medium">{description}</div>
    </InfoBlock>
  );
}

export default UserJobCard;
