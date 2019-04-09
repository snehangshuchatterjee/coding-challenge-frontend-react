import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, {Component} from "react";
import BikeListComponent from "./BikeListComponent";
import ErrorComponent from "../shared/errorComponent/ErrorComponent";
import ReactPaginate from "react-paginate";

// import * as axios from 'axios';
import axios from 'axios';
import AxiosController from "../../controllers/AxiosController";
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
                isLoading: false,
                incidents: [
                    {}
                ]
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

    describe("getData ", () => {
         it("should get TOTAL COUNT from the promise", async () => {
            var apiClass = new AxiosController();
            const promise = wrapper.instance().getData(
                "https://bikewise.org/api/v2/incidents??proximity=Berlin&proximity_square=100",
                apiClass
            );
            setTimeout(() => {
                expect(promise.data.incidents.length).toEqual(25);
            }, 0);
        });

        it("should call the getDataPerPage method", async () => {
            var apiClass = new AxiosController();
            const promise = wrapper.instance().getData(
                "https://bikewise.org/api/v2/incidents??proximity=Berlin&proximity_square=100",
                apiClass
            );
            setTimeout(() => {
                expect(wrapper.instance().getDataPerPage).toBeCalled();
            }, 0);
        });
    });

    describe("getDataPerPage  ", () => {
         it("should set the TOTAL COUNT to the state", async () => {
            var apiClass = new AxiosController();
            var url = "https://bikewise.org/api/v2/incidents??proximity=Berlin&proximity_square=100";
            wrapper.instance().ITEMS_PER_PAGE = 10
            wrapper.instance().getBerlinDataURL = () => {
                return url;
            } 
            const promise = wrapper.instance().getDataPerPage({selected: 1});
            setTimeout(() => {
                expect(wrapper.state().incidentCount).toEqual(25);
            }, 0);
        });
    });
});