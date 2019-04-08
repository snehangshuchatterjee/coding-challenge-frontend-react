import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, {Component} from "react";
import BikeListComponent from "./BikeListComponent";
import ErrorComponent from "../shared/errorComponent/ErrorComponent";
import ReactPaginate from "react-paginate";

// import * as axios from 'axios';
import axios from 'axios';
const mockedAxios = axios as jest.Mocked<typeof axios>;

configure({ adapter: new Adapter() });

jest.mock("axios");

describe('BikeListComponent', () => {
    let wrapper: any = shallow(<BikeListComponent />);
    
    describe("render", () => {
        it("should show Loading if state.isLoading is true(true by default)", () => {
            expect(wrapper.find("div").length).toEqual(1);
            expect(wrapper.find("p").length).toEqual(1);
        });
        it("should show Error if state.isError is true", () => {
            wrapper.setState({
                isError: true,
                isLoading: false
            });
            expect(wrapper.find("div").length).toEqual(1);
            expect(wrapper.find(ErrorComponent).length).toEqual(1);
        });
        it("should render the component correctly if none of the above conditions are true", () => {
            wrapper.setState({
                isError: false,
                isLoading: false
            });
            expect(wrapper.find("div").length).toEqual(2);
            expect(wrapper.find(ReactPaginate).length).toEqual(1);
        });
    });

    describe("closeErrorMessage ", () => {
        it("should set isError value in the state as false", () => {
            wrapper.instance().closeErrorMessage ();
            expect(wrapper.state().isError).toEqual(false);
        });
    });

    describe("handleSearch", () => {
        it("should call the getData method", () => {
            var inputData = {
                subjectHeading: "text",
                fromDate: new Date(),
                toDate: new Date()
            }

            wrapper.instance().handleSearch (inputData);
            expect(wrapper.instance().getData).toHaveBeenCalled;
        });
    });

    // describe("getData ", () => {
        /* mockAxios.get.mockImplementation(() => Promise.resolve({ data: {
            incidents : [{}, {}, {}]
        } })) */
        /* it("should get TOTAL COUNT from the promise", () => {
            expect(wrapper.instance().closeErrorMessage().then(data => expect(data.data.incidents.length))).toEqual(25);
        });
    }); */
});