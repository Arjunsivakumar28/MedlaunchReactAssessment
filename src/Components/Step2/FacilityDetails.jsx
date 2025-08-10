import { useState, useEffect } from 'react'
import { SelectInput } from '../FormComponents/SelectInput/SelectInput'

const options = [
    'Short-Term Acute Care',
    'Long-Term Acute Care',
    'Critical Access',
    'Children\'s',
    'Free-Standing Psychiatric',
    'Other'
]

function FacilityDetails() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setActive(true), 10)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`container transition-all delay-150 duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} w-full h-full bg-transparent flex flex-col items-start justify-center`}>
            <h1 className='w-full text-left font-bold text-2xl text-[#343434] mb-10' >Facility And Organiztion Type</h1>
            <SelectInput options={options} step='step2' classname='facility-options mb-2' idname='facility-options' label='Facility Type*' />
        </div>
    )

}

export default FacilityDetails;