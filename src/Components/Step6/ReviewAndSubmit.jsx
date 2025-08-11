import { useState, useEffect, useContext } from 'react'
import { FormContext } from '../FormContext/FormContext'
import { DropDownCard } from '../FormComponents/DropDownCard/DropDownCard'
import { ReviewTableStep1 } from './ReviewTables/ReviewTableStep1'
import { ReviewTableStep2 } from './ReviewTables/ReviewTableStep2'
import { ReviewTableStep3 } from './ReviewTables/ReviewTableStep3'
import { ReviewTableStep4 } from './ReviewTables/ReviewTableStep4'
import { ReviewTableStep5 } from './ReviewTables/ReviewTableStep5'
import { SubmitCard } from './SubmitCard/SubmitCard'

function ReviewAndSubmit() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setActive(true), 10)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`container transition-all delay-150 duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} w-full h-full bg-transparent flex flex-col items-start justify-center space-y-6`}>
            <h1 className='w-full text-left text-[#343434] font-bold text-2xl' >Hospital Information</h1>
            <DropDownCard
                title='Basic Information'
                id='step1-review'
                step={1}
                hval='h-100'
            >
                <ReviewTableStep1 />
            </DropDownCard>
            <DropDownCard
                title='Facility Details'
                id='step2-review'
                step={2}
                hval='h-100'
            >
                <ReviewTableStep2 />
            </DropDownCard>
            <DropDownCard
                title='Leadership Contacts'
                id='step3-review'
                step={3}
                hval='h-100'
            >
                <ReviewTableStep3 />
            </DropDownCard>
            <DropDownCard
                title='Site Information'
                id='step4-review'
                step={4}
                hval='h-100'
            >
                <ReviewTableStep4 />
            </DropDownCard>
            <DropDownCard
                title='Services & Certificates'
                id='step5-review'
                step={5}
                hval='h-100'
            >
                <ReviewTableStep5 />
            </DropDownCard>

            <SubmitCard />
        </div>
    )

}

export default ReviewAndSubmit;