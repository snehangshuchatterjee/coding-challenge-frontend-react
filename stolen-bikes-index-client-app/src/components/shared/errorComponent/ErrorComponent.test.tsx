import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, {Component} from "react";
import ErrorComponent from "./ErrorComponent";

configure({ adapter: new Adapter() });

describe("ErrorComponent", () => {
    const errorMessage: string = "This is an Error Message";
    const closeButtonEventHandler = (): void  => {};
    const wrapper = shallow<ErrorComponent>(

        <ErrorComponent
            errorMessage={errorMessage}
            closeButtonEventHandler={closeButtonEventHandler}
        />,
    );

    it("should display the error message passed as props", () => {
        expect(wrapper.find("div").text()).toContain(errorMessage);
    });
});
