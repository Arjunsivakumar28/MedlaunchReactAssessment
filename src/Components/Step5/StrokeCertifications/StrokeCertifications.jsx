import React, {useContext} from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { DatePickerComponent } from '../../FormComponents/DatePickerComponent/DatePickerComponent'
import { MultiSelectButtons } from '../../FormComponents/MultiSelectButtons/MultiSelectButtons'

// Stroke certification component of step 5
// date selection done using DatePickerComponent and selction displayed 
// using MultiSelectButtons component
export const StrokeCertifications = () => {

    const { state, dispatch } = useContext(FormContext)
    return (
        <div className='stroke-details w-full flex justify-stretch items-center space-x-2 mb-10'>
            <div className='stroke-certification h-full w-full flex flex-col justify-center items-start'>
                <DatePickerComponent
                    step='step5'
                    id='stroke-expiry-date'
                    classname='w-90'
                    label='Expiration Date of Current Stroke Certification'
                    single={true} />
                <MultiSelectButtons
                    input={state.values.step5?.['stroke-expiry-date'] || null}
                    clear={false}
                    id='stroke-expiry-date'
                    step='step5'
                    single={true}
                    btnatr={{ disabled: false }}
                    svgclass='show' />
            </div>
            <div className='stroke-certification w-full flex flex-col justify-center items-start'>
                <DatePickerComponent
                    step='step5'
                    id='stroke-application-date'
                    classname='w-90'
                    label='Date of Application'
                    single={true} />
                <MultiSelectButtons
                    input={state.values.step5?.['stroke-application-date'] || null}
                    clear={false}
                    id='stroke-application-date'
                    step='step5'
                    single={true}
                    btnatr={{ disabled: false }}
                    svgclass='show' />
            </div>
        </div>
    )
}
