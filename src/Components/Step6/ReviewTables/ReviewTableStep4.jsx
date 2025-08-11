import { useContext } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { ReviewCard } from '../../FormComponents/ReviewCard/ReviewCard'

// Review table for step 4
export const ReviewTableStep4 = () => {

    const { state, dispatch } = useContext(FormContext)

    const step4 = state.values['step4']

    const siteType = step4?.['facility-options'] || ''
    const files = step4?.['csvFiles'] || []

    // data (partially fake) for ReviewCard to create ReviewCard component in table
    const testDatas = files.map((file, index) => ([
            `Practice Location ${index + 1}`,
            `name: ${file.name}`,
            `Location: 456 Medical Plaza, Suite 100 Healthcare City, ST 12346`,
            `Days Open: M, W, F`
        ]
    ))


    return (
        <div className='w-full review-table grid grid-cols-4 gap-4'>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Site Configuration
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                {siteType == 'multi' ? `Multiple Locations (${files.length} sites)` : 'Single Location'}
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                Input Method
            </div>
            <div className='data col-span-3 col-star 2 flex text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                {files.length == 0 ? 'Not Uploaded' : 'File Upload'}
            </div>
            <div className='fields col-span-1 col-start-1 flex text-sm font-bold text-[#707070] ms-5  pb-2 border-b-1 border-[#EBEBEB]'>

            </div>
            <div className='data col-span-3 col-star 2 flex flex-col space-y-3 text-sm font-medium text-black ms-5  pb-2 border-b-1 border-[#EBEBEB]'>
                
                {testDatas.map((data, index) => (
                    <ReviewCard data={data} />
                ))}
            </div>

        </div>
    )
}
