import React, {useContext} from 'react'
import { FormContext } from '../../FormContext/FormContext'


// Similar to DropDownSelect, but allows selection of multiple options
export const MultiChoiceDropDown = ({ options, defaultoption, step, classname, labelclassname = '', idname, label, inpAttr }) => {
    const { state, dispatch } = useContext(FormContext)
    const stored = state.values[step]?.[idname] || []

    // dispatch (set value) to context when input is recieved
    const handleOnChange = (e) => {
        if (e.target.value != '' && !stored.includes(e.target.value)) {
            dispatch({ type: 'SET_VALUE', step: step, field: idname, payload: [...stored, e.target.value] })
        }

    }

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
                {options.map((value, index ) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </label>
    )
}
