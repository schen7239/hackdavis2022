import React from 'react'

function UserJobCard({ title, posted, description, isInternship, isInPerson }) {
  return (
    <div className='p-4 bg-white mb-4 rounded-xl shadow-md'>
        <div className='flex'>
            <div className='flex flex-col flex-1 gap-4'>
                <div className='flex items-center space-x-4'>
                    <div className='h-12 w-12 rounded-full bg-blue-100' />
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-lg font-semibold'>{title}</h1>
                        <p className='text-gray-400 text-sm'>{posted}</p>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    {isInternship ? <div className='bg-button-teal opacity-70 w-auto h-auto px-2 rounded-xl text-sm text font-semibold'>Internship</div> : <div className='bg-button-teal opacity-70 w-auto h-auto px-2 rounded-xl text-sm font-semibold'>Job</div>}
                    {isInPerson ? <div className='bg-light-blue opacity-50 w-auto h-auto px-2 rounded-xl text-sm font-semibold' >In-Person</div> : <div className='bg-light-blue opacity-50 w-auto h-auto px-2 rounded-xl text-sm font-semibold'>Remote</div>}
                </div>
            </div>
            <div className='space-y-2 text-center flex flex-col'>
                <button className='w-auto h-auto text-white bg-primary-blue rounded-2xl px-2 py-1 text-xs font-medium active:scale-90 transition duration-150 ease-out'>Apply Now</button>
                <button className='w-auto h-auto bg-button-gray rounded-2xl px-2 py-1 text-xs font-medium active:scale-90 transition duration-150 ease-out'>Contact</button>
            </div>
        </div>
        <div className='py-3 text-xs font-medium'>{description}</div>
    </div>
  )
}

export default UserJobCard