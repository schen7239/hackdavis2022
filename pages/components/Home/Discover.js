import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { UserJobCard } from '../index'

const data = [
  {
    title: "UI/UX Designer",
    posted: "Posted 2 days ago",
    description: "We are looking to hire a Fall 2022 UI/UX design intern to join our SF team! Apply for the internship listing today, the job offer will expire on June 2022.",
    isInternship: true,
    isInPerson: false,
  }, 
  {
    title: "Software Developer",
    posted: "Posted 3 days ago",
    description: "We are looking to hire a Fall 2022 Software Development intern to join our SF team! Apply for the internship listing today, the job offer will expire June 2022.",
    isInternship: true,
    isInPerson: true,
  }
]

function Discover() {
    const [userSearch, setUserSearch] = useState("");
  return (
    <div className="col-span-4 bg-main-bg-gray">
          <div className="grid grid-cols-2">
            <div className="col-span-1 p-10">
              <p className="text-2xl font-semibold flex-1">
                Hello, Lauren! Welcome.
              </p>
              <div className="mt-10">
                <h1 className='font-medium text-xl pb-4'>Saved Jobs</h1>
                {data?.map(({title, posted, description, isInternship, isInPerson})=> (
                  <UserJobCard 
                  key={title}
                  title={title}
                  posted={posted}
                  description={description}
                  isInternship={isInternship}
                  isInPerson={isInPerson}
                  />
              ))}
              </div>
            </div>
            <div className="col-span-1 px-10 pt-5">
              <div className="flex items-center justify-center space-y-4">
                <div className="flex items-center space-x-2 bg-white p-2 rounded-lg flex-1 h-10">
                  <Icon icon="codicon:search" />
                  <input
                    className="flex-1 outline-none"
                    onChange={(e) => setUserSearch(e.target.value)}
                    value={userSearch}
                    placeholder="Search for something here..."
                  />
                </div>
                <div className="flex items-center flex-2 justify-center space-x-4">
                  <Icon
                    className="text-primary-blue bg-white rounded-full p-2 h-10 w-10"
                    icon="clarity:bell-outline-badged"
                  />
                  <div className="bg-gray-400 rounded-full w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Discover