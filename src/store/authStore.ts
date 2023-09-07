import { create } from "zustand";
import { AuthStore } from "./AuthTypes";

export const useAuthStore = create<AuthStore>()((set) => ({
  userRights: "unauthorized",
  authorize: (right) => set(() => ({ userRights: right })),
  unauthorize: () => set(() => ({ userRights: "unauthorized" })),
}));
