import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, {Component} from "react";
import ModalComponent from "./ModalComponent";

configure({ adapter: new Adapter() });
import {Modal} from "react-bootstrap";

import bikePic from "../../../resources/images/bike_pic.jpg";

describe("ModalComponent", () => {
    let wrapper: any;
    let incidentData: {
        [key: string]: any,
    };
    let showModal: boolean;
    let altImage: string;

    beforeEach(() => {
        incidentData = {
            title: "dummy Title",
            description: "dummy description",
        };
        showModal = true;
        altImage = bikePic;
        wrapper = shallow<ModalComponent>(

            <ModalComponent
                incident={incidentData}
                showModal={showModal}
                altImage={altImage}
            />);
    });

    describe("render", () => {
        it("should render the component properly", () => {
            expect(wrapper.find(Modal).length).toEqual(1);
        });

        it("should render the altImage if no image url is present in the incident", () => {
            expect(wrapper.find("img").prop("src")).toEqual(bikePic);
        });

        it("should render the image present in the incident", () => {
            incidentData = {
                title: "dummy Title",
                description: "dummy description",
                media: {
                    image_url: "test string",
                },
            };
            wrapper.setProps({
                incident: incidentData,
                showModal,
                altImage,
            });
            expect(wrapper.find("img").prop("src")).toEqual("test string");
        });
    });

    describe("handleClose", () => {
        it("should set showModal value in the state as false", () => {
            wrapper.instance().handleClose();
            expect(wrapper.state().showModal).toEqual(false);
        });
    });

    describe("componentWillReceiveProps", () => {
        let incidentData2: {
            [key: string]: any,
        };

        beforeEach(() => {
            incidentData2 = {
                title: "New Title",
                description: "new Description",
            };
            const showModal2 = true;
            const altImage2 = bikePic;
        });

        it("should update the state values on passing new props", () => {
            expect(wrapper.state().incident.title).toEqual("dummy Title");
            wrapper.setProps({
                incident: incidentData2,
            });
            expect(wrapper.state().incident.title).toEqual("New Title");
        });
    });
});
