import React, { useContext, useState, useEffect } from 'react'
import { FormContext } from '../../FormContext/FormContext'

// checkbox component
export const CheckboxInput = ({ setCheck, step, label, classname, idname, labelclassname }) => {
  const { state, dispatch } = useContext(FormContext)

  // local value of input (set default to saved value)
  const [localValue, setLocalValue] = useState(state.values[step][idname])

  // Store locally the input value
  const handleChange = (e) => {
    setCheck != undefined && setCheck(e.target.checked)
    setLocalValue(e.target.checked)
  }

  // save local input value to context when save button is pressed
  useEffect(() => {
    if (state.currentStep == parseInt(step.slice(-1))) {
      dispatch({ type: 'SET_VALUE', step: step, field: idname, payload: localValue })
    }
  }, [state.saveTick])

  return (
    <label className={`flex items-center ${classname} `} id={idname}>
      <input onChange={handleChange} defaultChecked={state.values[step][idname]} id='checkbox' type='checkbox' value='' className='w-5 h-5 text-[#0056A3] bg-transparent border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2' />
      <p className={`${labelclassname}`}>{label}</p>
    </label>
  )
}
