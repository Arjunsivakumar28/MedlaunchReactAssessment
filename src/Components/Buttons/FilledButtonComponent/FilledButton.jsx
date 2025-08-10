import React from 'react'

export const FilledButton = ({ text, type, click, change, classname }) => {
  return (
    <button type={type} onClick={click} onChange={change} className={`text-white transition-all delay-150 duration-300 ease-in-out hover:text-white border border-[#0056A3] bg-[#0056A3] hover:bg-[#004b8f] font-bold rounded-lg text-base px-8 py-4.5 text-center ${classname}`} >{text}</button>
  )
}
