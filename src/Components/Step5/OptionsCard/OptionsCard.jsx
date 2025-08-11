import React from 'react'
import { CheckboxInput } from '../../FormComponents/CheckboxInput/CheckboxInput'

export const OptionsCard = ({ title, options }) => {
    return (
        <div className='options-card flex flex-col items-start justify-center p-6 rounded-lg border border-[#BBBBBB]'>
            <h1 className='text-base font-bold text-black text-left'>{title}</h1>
            {options.map((opt, index) => (
                <CheckboxInput
                    key={index}
                    step='step5'
                    label={opt}
                    classname='font-medium text-black text-base' idname={`check-${opt}-${title}`}
                    labelclassname='ms-2'
                />
            ))}
        </div>
    )
}
