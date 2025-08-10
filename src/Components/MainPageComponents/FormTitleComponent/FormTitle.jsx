import React from 'react'
import { ProgressBar } from '../../ProgressBar/ProgressBar'

export const FormTitle = ({step, stepTitles}) => {
  return (
    <div className='form-title flex flex-col justify-center items-center mb-5 max-w-240 w-full h-30 bg-transparent'>
        <div className='card-name w-full flex justify-between items-center mb-2'>
            <div className='text-center text-4xl font-bold text-[#343434]'>{stepTitles[step]}</div>
            <div className='text-center text-lg font-mediusm text-[#343434]'>Step {step} of 6</div>
        </div>
        <ProgressBar step={step} stepTitles={stepTitles} />
    </div>
  )
}
