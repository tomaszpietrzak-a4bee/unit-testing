import Users from "./Users";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

const url = "https://jsonplaceholder.typicode.com/users/1";
const server = setupServer(
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.json({
        address: {
          zipcode: "123-45",
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("User zip code with MSW", () => {
  it("should render modified (without symbol -) data from fetch", async () => {
    render(<Users />);

    expect(await screen.findByText("12345")).toBeInTheDocument();
  });

  it("should handle fetch error", async () => {
    server.use(
      rest.get(url, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<Users />);

    expect(await screen.findByText("Error: 500")).toBeInTheDocument();
  });
});
