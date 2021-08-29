import React from "react";
import Header from "./Header";
import {render, cleanup} from "@testing-library/react";
import { shallow } from "enzyme";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

afterEach(cleanup);

describe("Header", () => {
    it("renders correctly",async () => {
        const {getByTestId} = render(<Header/>);
        expect(getByTestId("header-component")).toHaveClass('header');
    });

    it("renders inner component",async () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.contains(<Logo/>)).toEqual(true);
        expect(wrapper.contains(<Navigation/>)).toEqual(true);
    });
});