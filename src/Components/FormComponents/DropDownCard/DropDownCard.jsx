import React, { useState} from 'react'

// drop down card component (content inside dropdown container can be passed as children)
export const DropDownCard = ({ title, id, step, defaultOpen = false, children }) => {

    const [open, setOpen] = useState(defaultOpen)

    return (
        <div className='dropdown-card w-full rounded-lg border border-[#D6D6D6]' >
            <button className='w-full header flex justify-start items-center bg-[#0056A3] border border-[#EBEBEB] py-3 px-6 rounded-lg' type='button' onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id} >

                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#ffffff"></path> </g></svg>

                <span className='ms-2 text-left text-white font-bold text-xl'>{title}</span>
                <a className=' ms-auto text-white font-medium text-right text-sm cursor-pointer hover:underline' >Edit</a>
            </button>
            <div
                id={id}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'h-auto' : 'h-0'}` }
            >
                <div className='px-4 py-4 text-sm leading-6 text-slate-700 '>
                    {children}
                </div>
            </div>
        </div>
    )
}
