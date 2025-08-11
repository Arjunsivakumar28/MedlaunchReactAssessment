import React from 'react'

export const FilledSelectButton = ({ text, type, click, change, classname, attr}) => {
  return (
    <button {...attr} type={type} onClick={click} onChange={change} className={`flex justify-between items-center text-white transition-all delay-150 duration-300 ease-in-out hover:text-white border border-[#0056A3] bg-[#0056A3] hover:bg-[#004b8f] font-bold rounded-lg text-base px-8 py-4.5 text-center ${classname}`} >
        {text}
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" id="cross" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="ms-4  icon flat-color"><path id="primary" d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" ></path></svg>
    </button>
  )
}
