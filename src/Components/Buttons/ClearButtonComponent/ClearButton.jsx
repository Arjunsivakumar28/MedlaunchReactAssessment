import React from 'react'

export const ClearButton = ({text, type, click, classname, attr}) => {
  return (
    <button {...attr} type={type} onClick={click} className={`text-[#0056A3] transition-all delay-150 duration-300 ease-in-out hover:text-white border border-[#0056A3] hover:bg-[#0056A3] font-bold rounded-lg text-base px-8 py-4.5 text-center ${classname} `}>{text}</button>
  )
}
