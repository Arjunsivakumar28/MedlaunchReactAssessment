import React, { useState, useContext, useEffect, use } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { FieldInput } from '../../FormComponents/FieldInput/FieldInput'
import { CheckboxInput } from '../../FormComponents/CheckboxInput/CheckboxInput'


// entity and dba section of step1
export const EntityName = () => {

    const { state, dispatch } = useContext(FormContext)

    const [checked, isChecked] = useState(false)

    // effect to handle checkbox interaction between entity name and dba
    useEffect(() => {
        checked && dispatch({ type: 'SET_VALUE', step: 'step1', field: 'dba-name', payload: state.values.step1['entity-name'] })
    }, [state.values.step1['entity-name'], checked])

    // handle after checkbox interaction between entitiy and dba
    const dbaAttr = {
        value: checked ? state.values.step1['entity-name'] : undefined
    }
    

    return (
        <div className='healthcare-org w-full flex flex-col items-start mb-5' >
            <h1 className='mb-8 text-2xl font-bold text-[#4E4E4E]'>Identify Healthcare Organization</h1>
            <FieldInput type='text' step='step1' label='Legal Entity Name*' classname='mb-5' idname='entity-name' />
            <FieldInput type='text' step='step1' label='Doing Business As (d/b/a) Name*' classname='mb-2' idname='dba-name' inpAttr={dbaAttr} />
            <CheckboxInput idname='checkbox-entity-name' step='step1' setCheck={isChecked} label='Same as Legal Entity Name' classname='mb-4' labelclassname='ms-2 text-base font-bold text-black' />
        </div>
    )
}
