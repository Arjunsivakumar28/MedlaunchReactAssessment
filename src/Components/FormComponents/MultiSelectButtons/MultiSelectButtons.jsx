import React, { useContext } from 'react'
import { ClearSelectButton } from '../../Buttons/ClearSelectButtonComponent/ClearSelectButton'
import { FilledSelectButton } from '../../Buttons/FilledSelectButtonComponents/FilledSelectButton'
import { FormContext } from '../../FormContext/FormContext'

// Displays selected items with filters on type of button display, and if inputs are singular 
// or multiple items can be selected 
export const MultiSelectButtons = ({ input, classname, clear, id, step, single, btnclass, btnattr, svgclass }) => {

    const { dispatch } = useContext(FormContext)

    // Remove item among when multiple selected items
    const removeMultiple = (action) => {
        const next = input.filter((item) => item !== action)
        dispatch({ type: 'SET_VALUE', step: step, field: id, payload: next })
    }

    // Remove item among single selected item
    const removeSingle = () => {
        dispatch({ type: 'SET_VALUE', step: step, field: id, payload: null })
    }

    // using different types of buttons (clear vs filled) and different types of input (array vs single)
    // to show and remove multiple selections
    let multiButtons
    if (clear) {
        if (single) {
            multiButtons = (input && <ClearSelectButton
                attr={btnattr}
                click={removeSingle}
                text={input}
                type='button'
                classname={`me-2 ${btnclass}`}
                svgclass={svgclass}
            />

            )
        } else {
            multiButtons = (input.map((action, index) => (
                <ClearSelectButton
                    attr={btnattr}
                    key={index}
                    click={() => removeMultiple(action)}
                    text={action}
                    type='button'
                    classname={`me-2 ${btnclass}`}
                    svgclass={svgclass}
                />
            )))
        }
    } else {
        if (single) {
            multiButtons = (input && <FilledSelectButton
                attr={btnattr}
                click={removeSingle}
                text={input}
                type='button'
                classname={`me-2 ${btnclass}`}
                svgclass={svgclass}
            />)
        } else {
            multiButtons = (input.map((action, index) => (
                <FilledSelectButton
                    attr={btnattr}
                    key={index}
                    click={() => removeMultiple(action)}
                    text={action}
                    type='button'
                    classname={`me-2 ${btnclass}`}
                    svgclass={svgclass}
                />
            )))
        }
    }

    return (
        <div className={` my-3 flex justify-start items-center flex-wrap space-x-2 space-y-2 ${classname} 
        `} >
            {multiButtons}
        </div>
    )
}
