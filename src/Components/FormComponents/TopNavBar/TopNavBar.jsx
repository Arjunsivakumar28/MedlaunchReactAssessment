import React, { useState } from 'react'


export const TopNavBar = ({ navs, btnclassname, selected, setSelected }) => {

    return (
        <div className='w-full flex justfy-start items-center border-b-1 bored-[#D6D6D6]' >
            {navs.map((nav, index) => {
                const select = selected === nav
                return (
                    <div key={index} className='me-8'>
                        <button type='button' className={`text-[#707070] font-normal text-sm ${
                            select ? 'text-[#0056A3] border-b-2 border-[#0056A3]' : 'text-[#707070]'
                            } `} onClick={() => setSelected(nav) } >
                            {nav}
                        </button>
                    </div>
                )
            })}

        </div>
    )
}
