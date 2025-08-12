import React, { useContext, useState, useEffect } from 'react'
import { FormContext } from '../../FormContext/FormContext'

// Field input component (also manages dispatching data to context at edge level)
export const FieldInput = ({ setValue, type, step, label, classname, idname, inpAttr }) => {

  const { state, dispatch } = useContext(FormContext)

  // local value of input (set default to saved value)
  const [localValue, setLocalValue] = useState(state.values[step][idname])

  // Store locally the input value
  const handleChange = (e) => {
    setValue != undefined && setValue(e.target.value)
    setLocalValue(e.target.value)
  }

  // save local input value to context when save button is pressed
  useEffect(() => {
    if (state.currentStep == parseInt(step.slice(-1))) {
      dispatch({ type: 'SET_VALUE', step: step, field: idname, payload: localValue })
    }
  }, [state.saveTick])

  return (
    <label name='input-label' id={idname} className={`input flex flex-col items-start justify-start w-full ${classname}`}>
      <p className='label-text text-base font-bold text-[#343434] mb-3' >{label}</p>
      <input {...inpAttr} onChange={handleChange} type={type} defaultValue={state.values[step][idname]} id='input' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
    </label>
  )
}
