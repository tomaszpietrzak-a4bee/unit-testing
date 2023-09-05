import { render, screen } from "@testing-library/react";
import UsersWithHook from "./UsersWithHook";
import Users from "../users/Users";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("UsersWithHook", () => {
  it("should render hook data", async () => {
    jest
      .spyOn(require("./useFetchZipcode"), "default")
      .mockImplementation(() => ({
        zipcode: 176342,
        error: null,
        loading: false,
      }));

    render(<UsersWithHook />);

    expect(await screen.findByText("176342")).toBeInTheDocument();
  });

  it("should render modified (without symbol -) data from fetch", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        address: {
          zipcode: "123-45",
        },
      })
    );

    render(<Users />);

    expect(await screen.findByText("12345")).toBeInTheDocument();
  });
});
