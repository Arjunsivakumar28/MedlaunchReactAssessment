import { useState, useEffect, useContext } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { CheckboxInput } from '../../FormComponents/CheckboxInput/CheckboxInput'
import { FieldInput } from '../../FormComponents/FieldInput/FieldInput'
import { DropDownSelect } from '../../FormComponents/DropDownSelect/DropDownSelect'

const states = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" },
    { code: "DC", name: "District of Columbia" },
    { code: "AS", name: "American Samoa" },
    { code: "GU", name: "Guam" },
    { code: "MP", name: "Northern Mariana Islands" },
    { code: "PR", name: "Puerto Rico" },
    { code: "VI", name: "U.S. Virgin Islands" },
];

export const ContactCard = ({ title, billing, label }) => {

    const [checked, isChecked] = useState(false)
    const { state, dispatch } = useContext(FormContext)

    // effect to handle checkbox interaction 
    useEffect(() => {
        checked && dispatch({ type: 'SET_VALUE', step: 'step3', field: 'first-name-leadership-' + label, payload: state.values.step1['first-name'] })
    }, [state.values.step1['first-name'], checked])
    useEffect(() => {
        checked && dispatch({ type: 'SET_VALUE', step: 'step3', field: 'last-name-leadership-' + label, payload: state.values.step1['last-name'] })
    }, [state.values.step1['last-name'], checked])
    useEffect(() => {
        checked && dispatch({ type: 'SET_VALUE', step: 'step3', field: 'email-leadership-' + label, payload: state.values.step1['email'] })
    }, [state.values.step1['email'], checked])
    useEffect(() => {
        checked && dispatch({ type: 'SET_VALUE', step: 'step3', field: 'phone-number-leadership-' + label, payload: state.values.step1['work-phone'] })
    }, [state.values.step1['work-phone'], checked])

    // handle default after checkbox interaction 
    const firstAttr = {
        value: checked ? state.values.step1['first-name'] : undefined
    }
    const lastAttr = {
        value: checked ? state.values.step1['last-name'] : undefined
    }
    const emailAttr = {
        value: checked ? state.values.step1['email'] : undefined
    }
    const phoneAttr = {
        value: checked ? state.values.step1['work-phone'] : undefined
    }

    return (
        <div className={` ${label} contact-card w-full flex flex-col items-start justify-center border rounded-lg p-6`} >
            <h1 className='w-full text-left font-bold text-xl text-[#343434] mb-4' >{title}</h1>
            <CheckboxInput step='step3' idname={`checkbox-leadership-${label}`} setCheck={isChecked} label='Same as Primary Contact entered in Step 1' classname='mb-4' labelclassname='ms-2 text-base font-medium text-black' />
            <div className='names w-full flex justify-stretch items-center mb-5'>
                <FieldInput step='step3' type='text' label='First Name*' classname='' idname={`first-name-leadership-${label}`} inpAttr={firstAttr} />
                <FieldInput step='step3' type='text' label='Last Name*' classname='ms-2' idname={`last-name-leadership-${label}`} inpAttr={lastAttr} />
            </div>
            <FieldInput step='step3' type='text' label='Phone*' classname='mb-5' idname={`phone-number-leadership-${label}`} inpAttr={phoneAttr} />
            <FieldInput step='step3' type='text' label='Email*' classname='mb-5' idname={`email-leadership-${label}`} inpAttr={emailAttr} />
            {billing &&
                <div className='billing-card w-full' >
                    <h1 className='w-full text-left font-bold text-xl text-[#343434] mb-4' >Billing Address</h1>
                    <FieldInput step='step3' type='text' label='Street Address*' classname='mb-5' idname={`street-address-leadership-${label}`} />
                    <div className='names w-full flex justify-stretch items-center mb-5'>
                        <FieldInput step='step3' type='text' label='City*' classname='' idname={`city-${label}`} />
                        {/* <FieldInput step='step3' type='text' label='State*' classname='ms-2' idname={`state-${label}` } /> */}
                        <DropDownSelect options={states} step='step3' classname='state-select ms-2' idname={`state-${label}`} label='State*' />
                        <FieldInput step='step3' type='text' label='Zip Code*' classname='ms-2' idname={`zip-code-${label}`} />
                    </div>
                </div>
            }
        </div>
    )
}
