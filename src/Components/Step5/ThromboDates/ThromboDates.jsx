import React, {useContext} from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { DatePickerComponent } from '../../FormComponents/DatePickerComponent/DatePickerComponent'
import { MultiSelectButtons } from '../../FormComponents/MultiSelectButtons/MultiSelectButtons'

// thrombolytic admissions and thrombectomies dates section of step 5
// date selection done using DatePickerComponent and selction displayed 
// using MultiSelectButtons component
export const ThromboDates = () => {

    const{state, dispatch} = useContext(FormContext)

    return (
        <div className='thrombos w-full flex flex-col justify-center items-start' >
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
                btnatr={{ disabled: false }}
                svgclass='ms-1!'

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
                id='thrombectomies'
                step='step5'
                single={false}
                btnatr={{ disabled: false }}
                svgclass='ms-1!'

            />
        </div>
    )
}
