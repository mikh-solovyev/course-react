import Navigation from "./Navigation";
import {cleanup} from "@testing-library/react";
import { shallow } from "enzyme";

afterEach(cleanup);

describe("Navigation", () => {
    it("renders correctly",() => {
        const wrapper = shallow(<Navigation/>);
        expect(wrapper.find(".navigation").exists()).toEqual(true);
    });

    it("setState",() => {
        const wrapper = shallow(<Navigation/>);
        expect(wrapper.find(".navigation__item").length).toEqual(3);

        wrapper.setState({items: [{id: 1, name: "test", link: "test"}]});
        expect(wrapper.find(".navigation__item").length).toEqual(1);
        expect(wrapper.find(".navigation__item").text()).toEqual("test");
    });

    it("active item link change",() => {
        const props = {
            currentPage: "map"
        }

        const wrapper = shallow(<Navigation {...props}/>);
        expect(wrapper.find(".active").text()).toEqual("Карта");
    });
});