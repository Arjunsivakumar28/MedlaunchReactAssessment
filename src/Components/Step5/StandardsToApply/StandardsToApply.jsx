import React, { useContext} from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { MultiChoiceDropDown } from '../../FormComponents/MultiChoiceDropDown/MultiChoiceDropDown'
import { MultiSelectButtons } from '../../FormComponents/MultiSelectButtons/MultiSelectButtons'

export const StandardsToApply = () => {

    const { state, dispatch } = useContext(FormContext)

    const actions = state.values.step5?.['standards-action'] || []

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
            />
            <MultiSelectButtons input={actions} clear={true} id='standards-action' step='step5' single={false} />

        </div>
    )
}
