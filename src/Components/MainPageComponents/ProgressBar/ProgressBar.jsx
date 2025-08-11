import React from 'react'

// progress bar to indicate which step of form user is currently on
export const ProgressBar = ({step, stepTitles}) => {
  return (
    <div className='progress-bar flex space-x-2 w-full'>
        {[1, 2, 3, 4, 5, 6].map((s) => (
            <div key={s} className='flex flex-col justify-center items-center w-full'>
                <div
                    className={`w-full h-2 mb-2 rounded transition-all delay-150 duration-300 ease-in-out  ${s <= step ? 'bg-[#0056A3]' : 'bg-gray-300'}`}
                />
                <div className='text-center text-xs font-bold text-[#707070]'>{stepTitles[s]}</div>
            </div>
        ))}
    </div>
  )
}
