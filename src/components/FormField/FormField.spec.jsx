import FormField from "./FormField";
import {cleanup} from "@testing-library/react";
import { shallow } from "enzyme";

afterEach(cleanup);

describe("FormField", () => {
    it("renders correctly",() => {
        const wrapper = shallow(<FormField/>);
        expect(wrapper.find(".form__field").exists()).toEqual(true);
    });

    it("renders with props",() => {
        const props = {
            options: {
                label: "TestLabel",
                name: "TestName",
                type: "TestType",
                class: "TestClass",
                placeholder: "TestPlaceholder"
            }
        };

        const wrapper = shallow(<FormField {...props}/>);

        expect(wrapper.find(".form__field").hasClass("TestClass")).toEqual(true);
        expect(wrapper.find("input").prop("name")).toEqual("TestName");
        expect(wrapper.find("input").prop("type")).toEqual("TestType");
        expect(wrapper.find("input").prop("placeholder")).toEqual("TestPlaceholder");
        expect(wrapper.find("label").text()).toEqual("TestLabel");
    });
});

