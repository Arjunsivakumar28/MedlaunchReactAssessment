import React, {useContext} from 'react'
import { FormContext } from '../../FormContext/FormContext'

export const FieldInput = ({setValue, type, step, label, classname, idname, inpAttr}) => {

  const {state, dispatch} = useContext(FormContext)
  
  const handleChange = (e) => {
    setValue != undefined && setValue(e.target.value)
    dispatch({type: 'SET_VALUE', step: step, field: idname, payload: e.target.value})
  }
  
  return (
    <label name='input-label' id={idname} className={`input flex flex-col items-start justify-start w-full ${classname}`}>
        <p className='label-text text-base font-bold text-[#343434] mb-3' >{label}</p>
        <input {...inpAttr} onChange={handleChange} type={type} defaultValue={state.values[step][idname]} id='input' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
    </label>
  )
}
