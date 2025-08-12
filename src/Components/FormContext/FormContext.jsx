import React, { createContext, useReducer } from 'react'

export const FormContext = createContext()

const initialState = {
    values: {
        'step1': {},
        'step2': {},
        'step3': {},
        'step4': {},
        'step5': {},
        'step6': {}
    },
    currentStep: 1,
    saveTick: 1
}

function reducer(state, action) {

    switch (action.type) {
        case 'SET_VALUE':
            const { step, field, payload } = action
            return {
                ...state,
                values: {
                    ...state.values,
                    [step]: {
                        ...state.values[step], [field]: payload
                    }
                }
            }
        case 'NEXT_STEP':
            const nextStep = Math.min(Math.max(state.currentStep + 1, 1), 6)
            return {
                ...state,
                currentStep: nextStep
            }
        case 'PREV_STEP':
            const prevStep = Math.min(Math.max(state.currentStep - 1, 1), 6)
            return {
                ...state,
                currentStep: prevStep
            }
        case 'SET_STEP':
            const numStep = Math.min(Math.max(action.numStep, 1), 6)
            return {
                ...state,
                currentStep: numStep
            }
        case 'REQUEST_SAVE':
            return {
                ...state,
                saveTick: state.saveTick + 1
            }
        default:
            return state;
    }
}

export function FormProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    )
}
