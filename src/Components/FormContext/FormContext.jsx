import React, {createContext, useReducer} from 'react'

export const FormContext = createContext()

const initialState = {
    values: {
        'step1': {},
        'step2': {},
        'step3': {},
        'step4': {},
        'step5': {},
        'step6': {}
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_VALUE':
            const {step, field, payload} = action
            return {
                ...state,
                values: {
                    ...state.values,
                    [step]: {
                        ...state.values[step], [field]: payload
                    }
            
                }
            }
        
        case 'GET_VALUE':
            return state.values[step][field]
        default:
            return state;
    }
}

export function FormProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    )
}
