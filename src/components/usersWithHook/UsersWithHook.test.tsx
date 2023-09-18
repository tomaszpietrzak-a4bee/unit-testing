import React from "react";
import { render, screen } from "@testing-library/react";
import UsersWithHook from "./UsersWithHook";
import useFetchZipcode from "./useFetchZipcode";

jest.mock("./useFetchZipcode");

describe("UsersWithHook", () => {
  it("should render zipcode when there is no error", async () => {
    (useFetchZipcode as jest.Mock).mockReturnValue({
      zipcode: "12345",
      error: null,
      loading: false,
    });

    render(<UsersWithHook />);

    expect(screen.getByText("12345")).toBeInTheDocument();
  });

  it("should render an error message when there is an error", async () => {
    (useFetchZipcode as jest.Mock).mockReturnValue({
      zipcode: null,
      error: "An error occurred",
      loading: false,
    });

    render(<UsersWithHook />);

    expect(screen.getByText("An error occurred")).toBeInTheDocument();
  });
});
