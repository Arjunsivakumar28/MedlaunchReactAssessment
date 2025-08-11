import { useContext } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { MultiSelectButtons } from '../../FormComponents/MultiSelectButtons/MultiSelectButtons'

// Review table for step 5 (selected services shows using MultiSelectButtons)
export const ReviewTableStep5 = () => {

    const { state, dispatch } = useContext(FormContext)

    const step5 = state.values['step5']

    // list of all services (selected and other) 
    const servicesList = Object.keys(step5).filter(key => (key.startsWith('check'))).map(key => key.split('-')[1])
    const otherServices = step5?.['other-services'] || []
    const finalServicesList = servicesList.concat(otherServices)

    // list of thrombo dates
    const thrombolycticArray = step5?.['thrombolytic-admissions'] || []
    const thrombectomiesArray = step5?.['thrombectomies'] || []

    return (
        <div className='w-full review-table grid grid-cols-4 gap-4'>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Services Provided
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                <MultiSelectButtons
                    input={finalServicesList}
                    clear={false}
                    id='review-all-service'
                    step='step5'
                    btnclass='p-2! m-1!'
                    btnattr={{ disabled: true }}
                    single={false}
                    svgclass={'hidden'}
                />
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Standards To Apply
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                <MultiSelectButtons
                    input={step5?.['standards-action'] || []}
                    clear={false}
                    id='review-all-service'
                    step='step5'
                    btnclass='p-2! m-1!'
                    btnattr={{ disabled: true }}
                    single={false}
                    svgclass={'hidden'}
                />

            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Date of Application
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                {step5?.['stroke-application-date'] || ''}
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Expiration Date of Currnt Stroke Certification
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                {step5?.['stroke-expiry-date'] || ''}
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Dates of last twenty-five thrombolytic administrations
            </div>
            <div className='data text-[#0056A3] col-span-3 col-star 2 text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                <p className='text-[#0056A3]' >{thrombolycticArray.join(', ')}</p>
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Dates of last fifteen thrombectomies
            </div>
            <div className='data text-[#0056A3] col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                <p className='text-[#0056A3]' >{thrombectomiesArray.join(', ')} </p>
            </div>

        </div>
    )
}
