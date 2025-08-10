import React from 'react'

export const BlockButton = ({text, subtext, click, classname, btnAttr}) => {
  return (
    <button 
        className={`block-button transition-all delay-150 duration-300 ease-in-out rounded-lg border border-[#BBBBBB] p-6 ${classname}`} 
        type='button' 
        onClick={click}
        {...btnAttr} >
        <div className='flex flex-col justify-center items-start space-y-2'>
            <h1 className='text-left font-bold text-xl text-[#343434] mb-3'>{text}</h1>
            <p className='text-left font-medium text-base text-[#707070] mb-3'>{subtext}</p>
        </div>
    </button>   
  )
}
