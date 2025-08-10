import React from 'react'

export const CheckboxInput = ({setCheck, label, classname}) => {
  return (
    <label className={`flex items-center ${classname} `}>
        <input onChange={(e) => setCheck(e.target.checked)} id='same-as-entity-name-checkbox' type='checkbox' value='' className='w-5 h-5 text-[#0056A3] bg-transparent border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2' />
        <p className='ms-2 text-base font-bold text-black'>{label}</p>
    </label>
  )
}
