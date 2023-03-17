const initialState = {
    minValue: 0,
    maxValue: 0
}

type InitialStateType = typeof initialState
type ActionType = SetMinValueType | SetMaxValueType
export const setterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-MIN-VALUE':
            return {...state, minValue: action.minValue}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        default:
            return state
    }


}

type SetMinValueType = ReturnType<typeof setMinValueAC>
type SetMaxValueType = ReturnType<typeof setMaxValueAC>

export const setMinValueAC = (minValue: number) => ({type: 'SET-MIN-VALUE', minValue} as const)
export const setMaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)
