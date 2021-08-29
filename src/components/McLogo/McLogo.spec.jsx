import McLogo from "./McLogo";
import {cleanup} from "@testing-library/react";
import { shallow } from "enzyme";

afterEach(cleanup);

describe("McLogo", () => {
    it("renders correctly",() => {
        const wrapper = shallow(<McLogo/>);
        expect(wrapper.find("img").exists()).toEqual(true);
    });
});