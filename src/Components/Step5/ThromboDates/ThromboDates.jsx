import React, {useContext, useState} from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { DatePickerComponent } from '../../FormComponents/DatePickerComponent/DatePickerComponent'
import { MultiSelectButtons } from '../../FormComponents/MultiSelectButtons/MultiSelectButtons'

// thrombolytic admissions and thrombectomies dates section of step 5
// date selection done using DatePickerComponent and selction displayed 
// using MultiSelectButtons component
export const ThromboDates = () => {

    const{state, dispatch} = useContext(FormContext)
    const [thrombolyticAdmissions, setThrombolyticAdmissions] = useState(state.values.step5?.['thrombolytic-admissions'] || [])
    const [thrombectomies, setThrombectomies] = useState(state.values.step5?.['thrombectomies'] || [])

    return (
        <div className='thrombos w-full flex flex-col justify-center items-start' >
            <DatePickerComponent
                step='step5'
                id='thrombolytic-admissions'
                classname='w-220'
                label='Dates of last twenty-five thrombolytic administrations'
                action={thrombolyticAdmissions}
                setAction={setThrombolyticAdmissions}
                single={false}

            />
            <MultiSelectButtons
                input={thrombolyticAdmissions}
                clear={false}
                id='thrombolytic-admissions'
                step='step5'
                single={false}
                btnatr={{ disabled: false }}
                action={thrombolyticAdmissions}
                setAction={setThrombolyticAdmissions}
                svgclass='ms-1!'

            />

            <DatePickerComponent
                step='step5'
                id='thrombectomies'
                classname='w-220'
                label='Dates of last fifteen thrombectomies'
                action={thrombectomies}
                setAction={setThrombectomies}
                single={false}
            />
            <MultiSelectButtons
                input={thrombectomies}
                clear={false}
                id='thrombectomies'
                step='step5'
                single={false}
                btnatr={{ disabled: false }}
                action={thrombectomies}
                setAction={setThrombectomies}
                svgclass='ms-1!'

            />
        </div>
    )
}
