import { useState, useEffect } from 'react'

function FacilityDetails() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setActive(true), 10)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`container transition-all delay-150 duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} w-full h-full bg-transparent flex flex-col items-center`}>
            <h1 className='w-full text-left font-bold text-2xl text-[#343434]' >Facility And Organiztion Type</h1>
            
        </div>
    )

}

export default FacilityDetails;