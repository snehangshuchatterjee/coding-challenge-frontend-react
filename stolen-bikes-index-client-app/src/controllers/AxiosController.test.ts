import axios from "axios";
import { mount, shallow } from "enzyme";
import React, {Component} from "react";
import AxiosController from "./AxiosController";

describe.only("AxiosController", () => {
    const wrapper: AxiosController = new AxiosController();
    let url: string = "";

    beforeEach(() => {
        url = "http://www.google.co.in";
    });

    describe("getData", () => {
       it("should call axios.get method with the passed url", () => {
            expect(wrapper.getData(url)).toEqual(axios.get(url));
        });
    });

    describe("getDataPerPage", () => {
       it("should call axios.get method with the passed url", () => {
            const pageNo: number = 1;
            const perPage: number = 10;
            const pageUrl: string = url + "&page=" + pageNo + "&per_page=" + perPage;
            expect(wrapper.getDataPerPage(url, pageNo, perPage)).toEqual(axios.get(pageUrl));
        });
    });
});
