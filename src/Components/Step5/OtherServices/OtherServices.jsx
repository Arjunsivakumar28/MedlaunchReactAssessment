import React, { useState, useContext } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { MultiSelectButtons } from '../../FormComponents/MultiSelectButtons/MultiSelectButtons'

// option other services component of step 5
export const OtherServices = () => {

    const { state, dispatch } = useContext(FormContext)
    const otherServices = state.values.step5?.['other-services'] || []

    // dispatch (set value) to context when input is recieved
    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            dispatch({
                type: 'SET_VALUE',
                step: 'step5',
                field: 'other-services',
                payload: [...otherServices, e.target.value]
            })
            e.target.value = ''
        }
    }

    return (
        <div className='other-services w-full flex flex-col justify-center items-start border rounded-lg border-[#BBBBBB] p-6' >
            <h1 className='font-bold text-base text-black text-left mb-2'>Other Services</h1>
            <input
                onKeyDown={handleKeyPress}
                id='other-service-input'
                className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
            <MultiSelectButtons 
                input={otherServices}  
                clear={true} 
                id='other-services' 
                step='step5'
                single={false} />
        </div>
    )
}
