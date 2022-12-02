import create from 'zustand'

type State = {
    count: number
}

type Actions = {
    increment?: (count: number) => void
    decrement?: (count: number) => void
    // dispatch: (action: Actions) => void,
}

type Action = {
    type: keyof Actions
    qty: number
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
};



export const useCountReducerStore = create<State & Actions>((set) => ({
    count: 0,
    dispatch: (action: Action) => set((state) => reducer(state, action)),
}))


// export const countReducer = create<State & Actions>((set) => ({
//     count: 0,
//     dispatch: (action: Action) => set((state) => Reducer(state, action)),
// }))
