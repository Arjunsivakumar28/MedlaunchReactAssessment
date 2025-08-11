import React from 'react'
import { BlockButton } from '../../Buttons/BlockButtonComponent/BlockButton'
import { UploadFileCard } from '../UploadFileCard/UploadFileCard'

export const AddFileCard = () => {
  return (
    <div className='file-card w-full flex flex-col items-start justify-center space-y-2' >
      <h1 className='w-full text-left font-bold text-2xl text-[#343434] mb-3' >How would you like to add your site information?</h1>
      <BlockButton
        text='Upload CSV / Excel'
        subtext='Upload a spreadsheet with all site information'
        classname='w-full bg-[#E2F0F8]'
        btnAttr={{ disabled: true }} />

      <UploadFileCard />
    </div>

  )
}
