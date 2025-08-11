import React, { useContext, useState } from 'react'
import { FormContext } from '../../FormContext/FormContext'

// Regular dropdown component to select from multiple options
export const DropDownSelect = ({ options, step, defaultoption, classname, labelclassname = '', idname, label, inpAttr }) => {

    const { state, dispatch } = useContext(FormContext)
    const [value, setValue] = useState(null)

    // dispatch (set value) to context when input is recieved
    const handleOnChange = (e) => {
        setValue(e.target.value)
        console.log('selectd: ', value)
        dispatch({ type: 'SET_VALUE', step: step, field: idname, payload: e.target.value })
    }

    return (
        <label name='dropdown' className={`${classname} dropdown flex flex-col items-start justify-start w-full h-full`}>
            <h1 className='w-full text-left text-base font-bold text-[#343434] mb-2' >{label}</h1>
            <select
                id={label}
                name={label}
                value={value ?? ''}
                onChange={handleOnChange}
                className='text-sm font-medium text-black p-3 border rounded-lg w-full h-full'
            >
                <option value='' className='placeholder text-sm font-medium text-[#808080]'>
                    {defaultoption}
                </option>
                {options.map(({ code, name }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
        </label>
    )
}
