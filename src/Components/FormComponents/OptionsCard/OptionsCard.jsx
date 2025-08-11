import React from 'react'
import { CheckboxInput } from '../CheckboxInput/CheckboxInput'

// check box options card to show check box options available to choose 
// dispatch (set value) to context when input is recieved is handled in CheckboxInput
export const OptionsCard = ({ title, step, options }) => {
    return (
        <div className='options-card flex flex-col items-start justify-center p-6 rounded-lg border border-[#BBBBBB]'>
            <h1 className='text-base font-bold text-black text-left'>{title}</h1>
            {options.map((opt, index) => (
                <CheckboxInput
                    key={index}
                    step={step}
                    label={opt}
                    classname='font-medium text-black text-base' idname={`check-${opt}-${title}`}
                    labelclassname='ms-2'
                />
            ))}
        </div>
    )
}
