import {useState, useContext, useEffect} from 'react'
import { FormContext } from '../../FormContext/FormContext'

// multiple choice type selection component
export const SelectInput = ({options, step, classname, idname, label, inpAttr}) => {
  const {state, dispatch} = useContext(FormContext)
  const [selectedOption, setSelectedOption] = useState('')

  // set default value stored in context
  useEffect(() => {
    setSelectedOption(state.values[step][idname])
  }, [])

  // dispatch (set value) to context when input is recieved
  const handleOptionChange = (option) => {
    console.log('selectd: ', option)
    setSelectedOption(option)
    dispatch({type: 'SET_VALUE', step: step, field: idname, payload: option})
  }

  return (
    <div className='select-container w-full flex flex-col justify-center items-start'>
      <h1 className='w-full text-left text-base font-bold text-[#343434] mb-2' >{label}</h1>
      <fieldset role='radiogroup'>
        {options.map((option, index) => (
          <label key={index} className={`flex form-check ${classname} `} id={idname}>
            <input
              className='form-check-input' 
              type='radio' 
              name='option' 
              value={option} 
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              {...inpAttr}
              />
              <div className='form-check-label ms-2 text-base font-bold text-[#343434]' >{option}</div>
          </label>
        ))}
      </fieldset>
    </div>
  )
}
