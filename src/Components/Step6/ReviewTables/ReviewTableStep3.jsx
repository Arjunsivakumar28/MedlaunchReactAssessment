import { useContext } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { ReviewCard } from '../../FormComponents/ReviewCard/ReviewCard'

export const ReviewTableStep3 = () => {

    const { state, dispatch } = useContext(FormContext)
    const step3 = state.values['step3']

    const step3CardDataCeo = [
        `${step3?.['first-name-leadership-ceo-card'] || ''} ${step3?.['last-name-leadership-ceo-card'] || ''}`,
        `Phone: ${step3?.['phone-number-leadership-ceo-card'] || ''}`,
        `Email: ${step3?.['email-leadership-ceo-card'] || ''}`,
    ]
    const step3CardDataDoq = [
        `${step3?.['first-name-leadership-doq-card'] || ''} ${step3?.['last-name-leadership-doq-card'] || ''}`,
        `Phone: ${step3?.['phone-number-leadership-doq-card'] || ''}`,
        `Email: ${step3?.['email-leadership-doq-card'] || ''}`,
    ]
    const step3CardDataBilling = [
        `${step3?.['first-name-leadership-billing-card'] || ''} ${step3?.['last-name-leadership-billing-card'] || ''}`,
        `Phone: ${step3?.['phone-number-leadership-billing-card'] || ''}`,
        `Email: ${step3?.['email-leadership-billing-card'] || ''}`,
        `Billing Address: ${step3?.['street-address-leadership-billing-card'] || ''} 
            ${step3?.['city-billing-card'] || ''}
            ${step3?.['state-billing-card'] || ''}
            ${step3?.['zip-code-billing-card'] || ''}`
    ]

    return (
        <div className='w-full review-table grid grid-cols-4 gap-4'>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                CEO
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                <ReviewCard data={step3CardDataCeo} />
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Director of Quality
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                <ReviewCard data={step3CardDataDoq} />
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Invoicing Contact
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                <ReviewCard data={step3CardDataBilling} />
            </div>

        </div>
    )
}
