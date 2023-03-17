const initialState = {
    value: 0,
}

type InitialStateType = typeof initialState
type ActionType = IncValueType|SetValueType
export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-VALUE':
            return {...state, value: action.value}
        case 'INC-VALUE':
            return {...state, value: state.value + 1}
        default:
            return state
    }


}


type IncValueType = ReturnType<typeof incValueAC>
type SetValueType = ReturnType<typeof setValueAC>

export const setValueAC = (value: number) => ({type: 'SET-VALUE', value} as const)
export const incValueAC = (minValue: number) => ({type: 'INC-VALUE', minValue} as const)
