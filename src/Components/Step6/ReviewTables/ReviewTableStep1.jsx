import { useState, useEffect, useContext } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { ReviewCard } from '../../FormComponents/ReviewCard/ReviewCard'

export const ReviewTableStep1 = () => {
    const { state, dispatch } = useContext(FormContext)

    const step1 = state.values['step1']
    const step3 = state.values['step3']

    const step1CardData = [
        `${step1?.['first-name'] || ''} ${step1?.['last-name'] || ''}`,
        `${step1?.['title-name'] || ''}`,
        `Work: ${step1?.['work-phone'] || ''} | Cell: ${step1?.['cell-phone'] || ''}`,
        `Email: ${step1?.['email'] || ''}`,
        `Address: ${step3?.['street-address-leadership-billing-card'] || ''} 
            ${step3?.['city-billing-card'] || ''}
            ${step3?.['state-billing-card'] || ''}
            ${step3?.['zip-code-billing-card'] || ''}`
    ]
    return (
        <div className='w-full review-table grid grid-cols-4 gap-4'>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Legal Entity Name
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                {step1?.['entity-name'] || ''}
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                d/b/a Name
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                {step1?.['dba-name'] || ''}
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Primary Contact
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                <ReviewCard data={step1CardData} />
            </div>
        </div>
    )
}
