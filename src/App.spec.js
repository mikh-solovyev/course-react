import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

jest.mock("./pages/Login", () => ({ LoginWithAuth: () => <div>Home content</div> }));
jest.mock("./pages/Map", () => ({ MapWithAuth: () => <div>Map content</div> }));
jest.mock("./pages/Profile", () => ({
    ProfileWithAuth: () => <div>Profile content</div>,
}));

describe("App", () => {
    it("renders correctly", () => {
        const mockStore = {
            getState: () => ({auth: {isLoggedIn: true}}),
            subscribe: () => {},
            dispatch: () => {},
        };
        const history = createMemoryHistory();
        const { container } = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <App />
                </Provider>
            </Router>
        );
        expect(container.innerHTML).toMatch("Home content");
    });

    describe("when clicked on navigation buttons", () => {
        it("opens the corresponding page", () => {
            const mockStore = {
                getState: () => ({ auth: { isLoggedIn: true } }),
                subscribe: () => {},
                dispatch: () => {},
            };
            const history = createMemoryHistory();
            const { container, getByText, getByTestId } = render(
                <Router history={history}>
                    <Provider store={mockStore}>
                        <App />
                    </Provider>
                </Router>
            );
            expect(container.innerHTML).toMatch("Home content");
            fireEvent.click(getByText("Карта"));
            expect(getByTestId("header-component")).toHaveClass("header");
            fireEvent.click(getByText("Профиль"));
            expect(getByTestId("header-component")).toHaveClass("header");
        });
    });
});
