import { create } from 'zustand'

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