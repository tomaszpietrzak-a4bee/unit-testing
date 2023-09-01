// setupTests.js
import fetchMock from "jest-fetch-mock";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "@testing-library/jest-dom";

Enzyme.configure({ adapter: new Adapter() });
fetchMock.enableMocks();
