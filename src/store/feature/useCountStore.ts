import create from 'zustand'

type State = {
    count: number
}
type Actions = {
    increment: (count: number) => void
    decrement: (count: number) => void
}

export const useCountStore = create<State & Actions>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}))


