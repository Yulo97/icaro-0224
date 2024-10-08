import { create } from "zustand";

const useContentStore = create((set) => ({
  tema: "oscuro",
  toggleTema: () => set((state) => ({ tema: state.tema === "oscuro" ? "claro" : "oscuro" })),
}));

export { useContentStore };
