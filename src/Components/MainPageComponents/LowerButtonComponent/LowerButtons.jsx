import React from 'react'
import { ClearButton } from '../../Buttons/ClearButtonComponent/ClearButton'
import { FilledButton } from '../../Buttons/FilledButtonComponent/FilledButton'

// Lower buttons of form (such as next, previous, submit, exit, and save)
// Handles when each button is seen and makes sure step count doesn't go out of bounds
export const LowerButtons = ({step, onBack, onNext, onSave, onSubmit}) => {

    let backButton
    if (step > 1) {
        backButton = <ClearButton text='Previous' type='button' click={onBack} />
    } else {
        backButton = <ClearButton text='Exit' type='button'/>
    }

    let frontButton
    if (step < 6) {
        frontButton = <FilledButton text='Next' type='button' click={onNext} classname='ms-4' />
    } else {
        frontButton = <FilledButton text='Submit Application' type='button' click={onSubmit} classname='ms-auto' />
    }

  return (
    <div className='buttons max-w-240 w-full flex items-center'>
        {backButton}
        {step < 6 && <FilledButton text='Save' type='button' click={onSave} classname='ms-auto' />}
        {frontButton}
    </div>
  )
}
