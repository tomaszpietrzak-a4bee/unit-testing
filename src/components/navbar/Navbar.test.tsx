import { render, screen } from "@testing-library/react";
import { useAuthStore } from "../../store/authStore";
import { UserRights } from "../../store/AuthTypes";

import Navbar from "./Navbar";

const mockAuthStoreWithUserRight = (userRights: UserRights) => {
  const authStore = useAuthStore.getState();
  // useAuthStore.setState({ ...mockAuthStore, userRights });
  authStore.authorize(userRights);
};

describe("Navbar auth restrictions", () => {
  test("at the beginning unauthorized user should have access to Login and Register navs only", () => {
    render(<Navbar />);

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.queryByText("Profile")).not.toBeInTheDocument();
    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
    expect(screen.queryByText("Profile manager")).not.toBeInTheDocument();
  });

  test("unauthorized user should have access to Login and Register navs only", () => {
    mockAuthStoreWithUserRight("unauthorized");
    render(<Navbar />);

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.queryByText("Profile")).not.toBeInTheDocument();
    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
    expect(screen.queryByText("Profile manager")).not.toBeInTheDocument();
  });

  test("authorized user should have access to Profile and Logout navs only", () => {
    mockAuthStoreWithUserRight("user");
    render(<Navbar />);

    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(screen.queryByText("Register")).not.toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.queryByText("Profile manager")).not.toBeInTheDocument();
  });

  test("admin should have access to Profile, Logout and Profile manager navs only", () => {
    mockAuthStoreWithUserRight("admin");
    render(<Navbar />);

    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(screen.queryByText("Register")).not.toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.getByText("Profile manager")).toBeInTheDocument();
  });
});
