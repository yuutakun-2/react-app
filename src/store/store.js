import { create } from 'zustand'

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

// export default useStore

const useStore = create((set) => ({
    showForm: false,
    setShowForm: (showForm) => set({ showForm }),
    showDrawer: false,
    setShowDrawer: (showDrawer) => set({ showDrawer }),
    mode: "dark",
    setMode: (mode) => set({ mode }),
    auth: false,
    setAuth: (auth) => set({ auth }),
}));

export default useStore;