import React from 'react'
import { CheckboxInput } from '../../FormComponents/CheckboxInput/CheckboxInput'
import { ClearButton } from '../../Buttons/ClearButtonComponent/ClearButton'

export const SubmitCard = () => {
    return (
        <div className=' w-full rounded-lg border border-[#D6D6D6] flex flex-col items-start justify-center p-6' >
            <h1 className='submit-title text-[#343434] text-xl font-bold text-left mb-2' >Ready To Submit?</h1>
            <CheckboxInput
                step='step6'
                label='I certify that all information provided is accurate and complete to the best of my knowledge'
                classname='w-full'
                idname='submit-agree-check'
                labelclassname='ms-2 font-medium text-bases'
            />
            <p className='font-medium text-sm text-[#707070] w-full mt-2' >
                By submitting this form, you agree to our terms and conditions. DNV will review your application and contact you within 2-3 business
                days.   
            </p>
            <div className='download-btns mt-5 flex justify-start items-center space-x-3' >
                <ClearButton
                    text='Download as PDF'
                    type='button'
                />
                <ClearButton
                    text='Export to CSV'
                    type='button'
                    classname='ms-4'
                />
            </div>
        </div>
    )
}
