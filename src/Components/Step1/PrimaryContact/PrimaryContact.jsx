import React, { useState, useContext, useEffect } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { FieldInput } from '../../FormComponents/FieldInput/FieldInput'
import { EmailAddress } from '../EmailAddress/EmailAddress'

// primary contact secton of step 1
export const PrimaryContact = () => {

    const { state, dispatch } = useContext(FormContext)

    const [email, setEmail] = useState(state.values['step1']['email'])
    const [verify, setVerify] = useState(false)

    // handle email in separate component for verification and useEffect for saving
    useEffect(() => {
        if (state.currentStep == 1) {
            dispatch({ type: 'SET_VALUE', step: 'step1', field: 'email', payload: email })
        }
    }, [state.saveTick])

    return (
        <div className='primary-contact-info w-full flex flex-col items-start space-y-8' >
            <div className='title flex flex-col items-start justify-start w-full mb-5'>
                <h1 className='text-2xl font-bold text-[#4E4E4E] mb-2'>Primary Contact Information</h1>
                <p className='sub-text text-sm font-medium text-[#808080]'>Primary contact receives all DNV Healthcare official communications</p>
            </div>
            <div className='names w-full flex justify-stretch items-center mb-5'>
                <FieldInput step='step1' type='text' label='First Name*' classname='' idname='first-name' />
                <FieldInput step='step1' type='text' label='Last Name*' classname='ms-2' idname='last-name' />
            </div>
            <FieldInput step='step1' type='text' label='Title*' classname='mb-5' idname='title-name' />
            <div className='phones w-full flex justify-stretch items-center mb-5'>
                <FieldInput step='step1' type='text' label='Work Phone*' classname='' idname='work-phone' />
                <FieldInput step='step1' type='text' label='Cell Phone' classname=' ms-2' idname='cell-phone' />
            </div>
            <EmailAddress address={state.values['step1']['email']} setAddress={setEmail} verify={verify} setVerify={setVerify} />
        </div>
    )
}
