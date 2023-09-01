import fetchMock from "jest-fetch-mock";
import Users from "./Users";
import { render, screen } from "@testing-library/react";

beforeEach(() => {
  fetchMock.resetMocks();
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

it("should handle fetch error", async () => {
  fetchMock.mockRejectOnce(new Error("Fetch failed"));

  render(<Users />);

  expect(await screen.findByText("Fetch failed")).toBeInTheDocument();
});
