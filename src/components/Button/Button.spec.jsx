import React from "react";
import Button from "./Button";
import {render, cleanup} from "@testing-library/react";

afterEach(cleanup);

describe("Button", () => {
    it("renders correctly",async () => {
        const {getByRole} = render(<Button/>);
        expect(getByRole("button")).toHaveClass('btn');
    });

    it("render with props", async () => {
        const {getByRole} = render(<Button text="TestText" class="TestClass" type="email"/>);

        expect(getByRole("button")).toHaveClass('TestClass');
        expect(getByRole("button")).toHaveAttribute('type', 'email');
        expect(getByRole("button")).toHaveTextContent('TestText');
    });
});