import { create } from "zustand";
import { persist } from "zustand/middleware";

type TokenStore = {
  token: string;
  expiresAt: number | null;
  setToken: (token: string) => void;
  clearToken: () => void;
};

// ⏳ duración de la sesión en segundos (15 min)
const TOKEN_DURATION = 60 * 15;

export const useTokenStore = create<TokenStore>()(
  persist(
    (set, get) => ({
      token: "",
      expiresAt: null,

      setToken: (token) => {
        const expiresAt = Date.now() + TOKEN_DURATION * 1000;
        set({ token, expiresAt });
      },

      clearToken: () => set({ token: "", expiresAt: null }),
    }),
    {
      name: "access_token",
      // ⏱ limpiar si expiró al hidratar (al abrir la app)
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        const now = Date.now();
        if (state.expiresAt && state.expiresAt < now) {
          // si el token ya expiró, lo eliminamos
          state.token = "";
          state.expiresAt = null;
        }
      },
    }
  )
);
