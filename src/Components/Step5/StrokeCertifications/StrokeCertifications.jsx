import React, { useContext, useState } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { DatePickerComponent } from '../../FormComponents/DatePickerComponent/DatePickerComponent'
import { MultiSelectButtons } from '../../FormComponents/MultiSelectButtons/MultiSelectButtons'

// Stroke certification component of step 5
// date selection done using DatePickerComponent and selction displayed 
// using MultiSelectButtons component
export const StrokeCertifications = () => {

    const { state, dispatch } = useContext(FormContext)
    const [strokeExpiryDate, setStrokeExpiryDate] = useState(state.values.step5?.['stroke-expiry-date'])
    const [strokeApplicationDate, setStrokeApplicationDate] = useState(state.values.step5?.['stroke-application-date'])

    return (
        <div className='stroke-details w-full flex justify-stretch items-center space-x-2 mb-10'>
            <div className='stroke-certification h-full w-full flex flex-col justify-center items-start'>
                <DatePickerComponent
                    step='step5'
                    id='stroke-expiry-date'
                    classname='w-90'
                    label='Expiration Date of Current Stroke Certification'
                    action={strokeExpiryDate}
                    setAction={setStrokeExpiryDate}
                    single={true} />
                <MultiSelectButtons
                    input={strokeExpiryDate}
                    clear={false}
                    id='stroke-expiry-date'
                    step='step5'
                    single={true}
                    btnatr={{ disabled: false }}
                    action={strokeExpiryDate}
                    setAction={setStrokeExpiryDate}
                    svgclass='show' />
            </div>
            <div className='stroke-certification w-full flex flex-col justify-center items-start'>
                <DatePickerComponent
                    step='step5'
                    id='stroke-application-date'
                    classname='w-90'
                    label='Date of Application'
                    action={strokeApplicationDate}
                    setAction={setStrokeApplicationDate}
                    single={true} />
                <MultiSelectButtons
                    input={strokeApplicationDate}
                    clear={false}
                    id='stroke-application-date'
                    step='step5'
                    single={true}
                    btnatr={{ disabled: false }}
                    action={strokeApplicationDate}
                    setAction={setStrokeApplicationDate}
                    svgclass='show' />
            </div>
        </div>
    )
}
