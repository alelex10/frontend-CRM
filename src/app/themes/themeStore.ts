import { create } from "zustand";
import { persist } from "zustand/middleware";

// Definición del tipo para el estado del tema
type ThemeState = {
	darkMode: boolean;
	toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
	persist(
		(set) => ({
			darkMode: false, // valor inicial
			toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
		}),
		{
			name: "theme-storage", // nombre en localStorage
		}
	)
);

