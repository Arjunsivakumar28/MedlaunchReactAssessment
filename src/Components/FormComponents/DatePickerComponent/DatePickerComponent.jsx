import React, {useContext} from 'react'
import { FormContext } from '../../FormContext/FormContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerComponent = ({step, id, classname, label, single}) => {

    const {state, dispatch} = useContext(FormContext)
    let dateObj
    if (single) {
        dateObj = state.values[step]?.[id] || null
    } else {
        dateObj = state.values[step]?.[id] || []
    }

    const setDate = (date) => {
        // console.log("the object: ", dateObj)
        // console.log(step, id, classname, label, single)
        // console.log([...dateObj, date])
        single ? dispatch({ type: 'SET_VALUE', step: step, field: id, payload: date.toLocaleDateString() }) 
                : dispatch({ type: 'SET_VALUE', step: step, field: id, payload: [...dateObj, date.toLocaleDateString()] })
    }

    return (
        <div className='w-full flex flex-col justify-center items-start'>
            <h1 className='text-start text-[#343434] font-bold text-base mb-3'>{label}</h1>
            <DatePicker
                id={id}
                onChange={(date) => setDate(date)}
                dateFormat='MM/dd/yyyy'
                placeholderText='MM/dd/yyyy'
                className={`border rounded-lg p-3 ${classname} `}
            />
        </div>
    )
}
