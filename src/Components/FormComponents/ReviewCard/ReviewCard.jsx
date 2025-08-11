import React from 'react'

export const ReviewCard = ({ data }) => {
    return (
        <div className='review-card w-full rounded-lg bg-[#F6F6F6] py-4 px-6 flex flex-col justify-between items-starts' >
            {data.map((line, index) => (
                index == 0 ? <h1 className='text-black text-left font-bold text-base'>{line}</h1>
                    : <h1 className='text-black text-left font-medium text-base' >{line}</h1>
            ))}
        </div>
    )
}
