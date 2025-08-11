import React, { useContext } from 'react'
import { ClearSelectButton } from '../../Buttons/ClearSelectButtonComponent/ClearSelectButton'
import { FilledSelectButton } from '../../Buttons/FilledSelectButtonComponents/FilledSelectButton'
import { FormContext } from '../../FormContext/FormContext'

// Displays selected items with filters on type of button display, and if inputs are singular 
// or multiple items can be selected 
export const MultiSelectButtons = ({ input, classname, clear, id, step, single, btnclass, btnattr, svgclass }) => {

    const { dispatch } = useContext(FormContext)

    const remove = (action) => {
        const next = input.filter((item) => item !== action)
        dispatch({ type: 'SET_VALUE', step: step, field: id, payload: next })
    }

    const removeSingle = () => {
        dispatch({ type: 'SET_VALUE', step: step, field: id, payload: null })
    }

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
                    click={() => remove(action)}
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
                <ClearSelectButton
                    attr={btnattr}
                    key={index}
                    click={() => remove(action)}
                    text={action}
                    type='button'
                    classname={`me-2 ${btnclass}`}
                    svgclass={svgclass}
                    />
            )))
        }
    }

    return (
        <div className={` my-3 ${classname} ${single ? 'flex justify-center' : 'grid grid-cols-5 gap-4'} `} >
            {multiButtons}
        </div>
    )
}
