import React from 'react'

// card component used in review step (title name, followed by contact details)
export const ReviewCard = ({ data }) => {
    return (
        <div className='review-card w-full rounded-lg bg-[#F6F6F6] py-4 px-6 flex flex-col justify-between items-starts' >
            {data.map((line, index) => (
                index == 0 ? <h1 key={index} className='text-black text-left font-bold text-base'>{line}</h1>
                    : <h1 key={index} className='text-black text-left font-medium text-base' >{line}</h1>
            ))}
        </div>
    )
}
