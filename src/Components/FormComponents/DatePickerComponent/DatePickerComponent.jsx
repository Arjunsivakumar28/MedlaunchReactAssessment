import React, { useContext, useEffect } from 'react'
import { FormContext } from '../../FormContext/FormContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Select and store date
export const DatePickerComponent = ({ step, id, classname, label, single, action, setAction }) => {

    const { state, dispatch } = useContext(FormContext)

    // set value when input is recieved
    // payload changes based on single or multiple dates picked
    const setDate = (date) => {
        console.log(date, action)
        single ? setAction(date.toLocaleDateString())
            : setAction([...action, date.toLocaleDateString()])
        // single ? dispatch({ type: 'SET_VALUE', step: step, field: id, payload: date.toLocaleDateString() })
        //     : dispatch({ type: 'SET_VALUE', step: step, field: id, payload: [...dateObj, date.toLocaleDateString()] })
    }

    // save date to context
    useEffect(() => {
        dispatch({ type: 'SET_VALUE', step: step, field: id, payload: action })
    }, [state.saveTick])


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
