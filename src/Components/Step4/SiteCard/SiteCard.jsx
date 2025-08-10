import { useState, useEffect, useContext } from 'react'
import { BlockButton } from '../../Buttons/BlockButtonComponent/BlockButton'
import { FormContext } from '../../FormContext/FormContext'
export const SiteCard = () => {

    const [singleButton, setSingleButton] = useState(false)
    const [multiButton, setMultiButton] = useState(false)

    const {dispatch } = useContext(FormContext)

    return (
        <div className='site-card location-type w-full flex flex-col justify-center items-start' >
            <h1 className='w-full text-left font-bold text-2xl text-[#343434] mb-3' >Do You Have Multiple Sites or Locations?</h1>
            <div className='w-full flex justify-stretch items-center space-x-3 mb-2'>
                <BlockButton
                    text='Single Location'
                    subtext='We operate from one facility only'
                    click={() => {
                        setSingleButton(!singleButton)
                        if (multiButton) {
                            setMultiButton(false)
                            setSingleButton(true)
                        }
                        dispatch({ type: 'SET_VALUE', step: 'step4', field: 'location-type', payload: 'single'})
                    }}
                    classname={`w-full ${singleButton ? 'bg-[#E2F0F8]' : 'bg-white'}`} />
                <BlockButton
                    text='Muliple Locations'
                    subtext='We have multiple facilities or practice locations'
                    click={() => {
                        setMultiButton(!multiButton)
                        if (singleButton) {
                            setSingleButton(false)
                            setMultiButton(true)
                        }
                        dispatch({ type: 'SET_VALUE', step: 'step4', field: 'location-type', payload: 'multi'})
                    }}
                    classname={`w-full ${multiButton ? 'bg-[#E2F0F8]' : 'bg-white'}`} />
            </div>
        </div>
    )
}
