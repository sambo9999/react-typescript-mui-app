import create from 'zustand'

interface SiteState {
    bears: number;
    increasePopulation: (bears: number) => void;
    decreasePopulation: (bears: number) => void;
    removeAllBears: (bears: number) => void;
}

export const useStore = create<SiteState>((set) => ({
    bears: 0,
    increasePopulation: () => set((state: { bears: number }) => ({ bears: state.bears + 1 })),
    decreasePopulation: () => set((state: { bears: number }) => ({ bears: state.bears - 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))