export type UserRights = "unauthorized" | "user" | "admin";

export type AuthStore = {
  userRights: UserRights;
  authorize: (right: UserRights) => void;
  unauthorize: () => void;
};
