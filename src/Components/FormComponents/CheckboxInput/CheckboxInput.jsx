import React, {useContext} from 'react'
import { FormContext } from '../../FormContext/FormContext'

// checkbox component
export const CheckboxInput = ({setCheck, step, label, classname, idname, labelclassname}) => {
  const {state, dispatch} = useContext(FormContext)
    
    // dispatch (set value) to context when input is recieved
    const handleChange = (e) => {
      setCheck != undefined && setCheck(e.target.checked)
      dispatch({type: 'SET_VALUE', step: step, field: idname, payload: e.target.checked})
    }
  return (
    <label className={`flex items-center ${classname} `} id={idname}>
        <input onChange={handleChange} defaultChecked={state.values[step][idname]} id='checkbox' type='checkbox' value='' className='w-5 h-5 text-[#0056A3] bg-transparent border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2' />
        <p className={`${labelclassname}`}>{label}</p>
    </label>
  )
}
