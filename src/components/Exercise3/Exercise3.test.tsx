import { render, screen } from "@testing-library/react";
import Exercise3 from "./Exercise3";

// Mock our module
jest.mock('./useCounter', () => ({
    // Mock our hook - what it will return
        useCounter: () => ({
            message: 'Test exercie 3',
            setRun: jest.fn()
        }),
    }
));

describe('Exercise 3', () => {
    test('hook mock', () => {
        render(<Exercise3 />);
        // check if our mock returned expected value
        expect(screen.getByText('Test exercie 3')).toBeTruthy();
    })
});
