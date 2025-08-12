import React, { useContext, useState} from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { MultiChoiceDropDown } from '../../FormComponents/MultiChoiceDropDown/MultiChoiceDropDown'
import { MultiSelectButtons } from '../../FormComponents/MultiSelectButtons/MultiSelectButtons'

// standard actions to apply component of step 5 
export const StandardsToApply = () => {
    const { state, dispatch } = useContext(FormContext)
    const [display, setDisplay] = useState(state.values.step5?.['standards-action'] || [])

    // const actions = state.values.step5?.['standards-action'] || []

    return (
        <div className='standards w-full flex flex-col justify-center items-start' >
            <MultiChoiceDropDown
                options={['action1', 'action2', 'action3']}
                step='step5'
                defaultoption='Select Action'
                classname=''
                labelclassname=''
                idname='standards-action'
                label='Standards to Apply'
                action={display}
                setAction={setDisplay}
            />
            <MultiSelectButtons 
                input={display} 
                clear={true} 
                id='standards-action' 
                step='step5' 
                single={false}
                action={display}
                setAction={setDisplay}
                />

        </div>
    )
}
