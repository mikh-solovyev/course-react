import Logo from "./Logo";
import {cleanup} from "@testing-library/react";
import { shallow } from "enzyme";
import logoWhite from "../../assets/logoWhite.png";
import logoDark from "../../assets/logoDark.png";

afterEach(cleanup);

describe("Logo", () => {
    it("renders correctly",() => {
        const wrapper = shallow(<Logo/>);
        expect(wrapper.find(".logo").exists()).toEqual(true);
    });

    it("renders with themes",() => {
        const props = {
            currentPage: "profile"
        };
        const wrapper = shallow(<Logo {...props}/>);

        expect(wrapper.find("img").prop("src")).toEqual(logoDark);
        wrapper.setProps({currentPage: "registration"});

        expect(wrapper.find("img").prop("src")).toEqual(logoWhite);
    });
});