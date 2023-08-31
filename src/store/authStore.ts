import { create } from "zustand";

export type UserRights = "unauthorized" | "user" | "admin";

type AuthStore = {
  userRights: UserRights;
  authorize: (right: UserRights) => void;
  unauthorize: () => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  userRights: "unauthorized",
  authorize: (right) => set(() => ({ userRights: right })),
  unauthorize: () => set(() => ({ userRights: "unauthorized" })),
}));
