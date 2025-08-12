import React, { useContext, useState, useEffect } from 'react'
import { FormContext } from '../../FormContext/FormContext'


// Similar to DropDownSelect, but allows selection of multiple options
export const MultiChoiceDropDown = ({ options, action, setAction, defaultoption, step, classname, labelclassname = '', idname, label, inpAttr }) => {
    const { state, dispatch } = useContext(FormContext)
    
    // store value from dropdown
    const handleOnChange = (e) => {
        if (e.target.value != '' && !action.includes(e.target.value)) {
            setAction != undefined && setAction([...action, e.target.value])
        }

    }

    // save value
    useEffect(() => {
        dispatch({ 
            type: 'SET_VALUE', 
            step: step, 
            field: idname, 
            payload: action })
    }, [state.saveTick])

    return (
        <label name='dropdown' className={`${classname} dropdown flex flex-col items-start justify-start w-full h-full`}>
            <h1 className='w-full text-left text-base font-bold text-[#343434] mb-2' >{label}</h1>
            <select
                id={label}
                name={label}
                onChange={handleOnChange}
                className='text-sm font-medium text-black p-3 border rounded-lg w-full h-full'
            >
                <option value='' className='placeholder text-sm font-medium text-[#808080]'>
                    {defaultoption}
                </option>
                {options.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </label>
    )
}
