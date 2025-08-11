import React, { useContext, useState } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { MultiChoiceDropDown } from '../../FormComponents/MultiChoiceDropDown/MultiChoiceDropDown'
import { MultiSelectButtons } from '../../FormComponents/MultiSelectButtons/MultiSelectButtons'
import { DatePickerComponent } from '../../FormComponents/DatePickerComponent/DatePickerComponent'

export const StandardsToApply = ({ }) => {

    const { state, dispatch } = useContext(FormContext)

    const actions = state.values.step5?.['standards-action'] || []

    return (
        <div className='standards w-full flex flex-col justify-center items-start' >
            <div className='standards-title w-full flex flex-col justify-center items-start' >
                <MultiChoiceDropDown
                    options={['action1', 'action2', 'action3']}
                    step='step5'
                    defaultoption='Select Action'
                    classname=''
                    labelclassname=''
                    idname='standards-action'
                    label='Standards to Apply'
                />
                <MultiSelectButtons input={actions} clear={true} id='standards-action' step='step5' single={false} />
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
                            id='stroke-expiry-date-btns'
                            step='step5'
                            single={true} />
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
                            id='stroke-application-date-btns'
                            step='step5'
                            single={true} />
                    </div>
                </div>

                <DatePickerComponent 
                    step='step5'
                    id='thrombolytic-admissions'
                    classname='w-220'
                    label='Dates of last twenty-five thrombolytic administrations'
                    single={false}
                />
                <MultiSelectButtons 
                    input={state.values['step5']?.['thrombolytic-admissions'] || []}
                    clear={false}
                    id='thrombolytic-admissions'
                    step='step5'
                    single={false}

                />

                <DatePickerComponent 
                    step='step5'
                    id='thrombectomies'
                    classname='w-220'
                    label='Dates of last fifteen thrombectomies'
                    single={false}
                />
                <MultiSelectButtons 
                    input={state.values['step5']?.['thrombectomies'] || []}
                    clear={false}
                    id='thrombectomiess'
                    step='step5'
                    single={false}

                />

            </div>

        </div>
    )
}
