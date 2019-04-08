import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, {Component} from "react";
import HeaderComponent from "./HeaderComponent";

configure({ adapter: new Adapter() });

describe("HeaderComponent", () => {
    const wrapper = shallow(<HeaderComponent/>,
    );

    it("should render the component properly", () => {
        expect(wrapper.find("div").length).toEqual(6);
    });
});
