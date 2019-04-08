import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, {Component} from "react";
import bikePic from "../../../resources/images/bike_pic.jpg";
import ErrorComponent from "../shared/errorComponent/ErrorComponent";
import FilterComponent from "./FilterComponent";

configure({ adapter: new Adapter() });

describe("FilterComponent", () => {

    const handleSearch = (stateObj: any): void  => {};
    const wrapper: any = shallow(
        
        <FilterComponent
            handleSearch={handleSearch}/>,
    );

    describe("render", () => {
        it("should render the component properly", () => {
            expect(wrapper.find("div").length).toEqual(7);
        });
        it("should render the ErrorComponent if error message is present", () => {
            wrapper.setState({
                errorMessage: "Dummy Messsage",
            });
            expect(wrapper.find(ErrorComponent).length).toEqual(1);
        });
    });

    describe("handleButtonClick", () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let errorMessage: string;

        it("should return an error message if from date is after to date", () => {
            errorMessage  = "From Date cannot be after To Date";
            const filterObject = {
                fromDate: tomorrow,
                toDate: new Date(),
            };
            wrapper.setState({
                fromDateSelected: true,
                toDateSelected: true,
                fromDate: filterObject.fromDate,
                toDate: filterObject.toDate,
            });
            wrapper.instance().handleButtonClick();
            expect(wrapper.state().errorMessage).toEqual(errorMessage);
        });

        it("should return an error message if from date is after current date", () => {
            errorMessage = "From Date cannot be after Current Date";
            const filterObject = {
                fromDate: tomorrow,
                toDate: new Date(),
            };
            wrapper.setState({
                fromDateSelected: true,
                toDateSelected: false,
                fromDate: filterObject.fromDate,
                toDate: 0,
            });
            wrapper.instance().handleButtonClick();
            expect(wrapper.state().errorMessage).toEqual(errorMessage);
        });

        it("should return an error message if to date is after current date", () => {
            errorMessage = "To Date cannot be after Current Date";
            const filterObject = {
                toDate: tomorrow,
                fromDate: new Date(),
            };
            wrapper.setState({
                fromDateSelected: false,
                toDateSelected: true,
                fromDate: 0,
                toDate: filterObject.toDate,
            });
            wrapper.instance().handleButtonClick();
            expect(wrapper.state().errorMessage).toEqual(errorMessage);
        });

        it("should call the handleSearch method if all the conditions are met", () => {
            errorMessage = "To Date cannot be after Current Date";
            const filterObject = {
                toDate: tomorrow,
                fromDate: new Date(),
            };
            wrapper.setState({
                fromDateSelected: false,
                toDateSelected: false,
                fromDate: 0,
                toDate: 0,
            });

            wrapper.setProps({
                handleSearch,
            });
            wrapper.instance().handleButtonClick();
            expect(wrapper.props().handleSearch).toHaveBeenCalled;
        });
    });

    describe("closeErrorMessage", () => {
        it("should clear the errorMessage value from state", () => {
            wrapper.instance().closeErrorMessage();
            expect(wrapper.state().errorMessage).toEqual("");
        });
    });

    describe("handleSearchboxDataChange", () => {
        it("should set the value passed as input parameters in the state", () => {
            wrapper.instance().handleSearchboxDataChange({
                target: {
                    value: "inputData",
                },
            });
            expect(wrapper.state().subjectHeading).toEqual("inputData");
        });
    });

    describe("handleToDataChange", () => {
        it("should set toDateSelected as false if the input parameter is null", () => {
            wrapper.instance().handleToDataChange(null);
            expect(wrapper.state().toDateSelected).toEqual(false);
        });
        it("should set from date to the value specified in the input parameter if the input parameter is not null", () => {
            wrapper.instance().handleToDataChange(1554837640488);
            expect(wrapper.state().toDate).toEqual(new Date(1554837640488));
        });
        it("should set toDateSelected as true if the input parameter is not null", () => {
            wrapper.instance().handleToDataChange(1554837640488);
            expect(wrapper.state().toDateSelected).toEqual(true);
        });
    });

    describe("handleFromDataChange", () => {
        it("should set fromDateSelected as false if the input parameter is null", () => {
            wrapper.instance().handleFromDataChange(null);
            expect(wrapper.state().fromDateSelected).toEqual(false);
        });
        it("should set from date to the value specified in the input parameter if the input parameter is not null", () => {
            wrapper.instance().handleFromDataChange(1554837640488);
            expect(wrapper.state().fromDate).toEqual(new Date(1554837640488));
        });
        it("should set fromDateSelected as true if the input parameter is not null", () => {
            wrapper.instance().handleFromDataChange(1554837640488);
            expect(wrapper.state().fromDateSelected).toEqual(true);
        });
    });
});
