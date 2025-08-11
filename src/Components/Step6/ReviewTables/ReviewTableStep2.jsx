import {useContext} from  'react'
import { FormContext } from '../../FormContext/FormContext'

// Review table for step 2
export const ReviewTableStep2 = () => {

    const { state, dispatch } = useContext(FormContext)

    const step2 = state.values['step2']
    return (
        <div className='w-full review-table grid grid-cols-4 gap-4'>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Legal Entity Name
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                {step2?.['facility-options'] || ''}
            </div>

        </div>
    )
}
