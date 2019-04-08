import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, {Component} from "react";
import bikePic from "../../../resources/images/bike_pic.jpg";
import ModalComponent from "../modalComponent/ModalComponent";
import CardComponent from "./CardComponent";

configure({ adapter: new Adapter() });

describe("CardComponent", () => {
    let incidentData: {
        [key: string]: any,
    };
    let showModal: boolean;
    let wrapper: any;

    beforeEach(() => {
        incidentData = {
            title: "dummy Title",
            description: "dummy description",
        };
        showModal = true;
        wrapper = shallow<CardComponent>(

            <CardComponent
                incident={incidentData}
                showModal={showModal}
            />,
        );
    });

    describe("render", () => {
        it("should render the component properly", () => {
            expect(wrapper.find("div").length).toEqual(7);
            expect(wrapper.find(ModalComponent).length).toEqual(1);
        });
    });

    describe("handleLinkClick", () => {
        it("should set showModal value in the state as true", () => {
            wrapper.instance().handleLinkClick();
            expect(wrapper.state().showModal).toEqual(true);
        });
    });

    describe("getImageURL", () => {
        it("should return the default image url if thumbnail url is not present", () => {
            let imageUrlObject;

            expect(wrapper.instance().getImageURL(imageUrlObject)).toEqual(bikePic);
        });

        it("should return the thumbnail image url if present", () => {
            const imageUrlObject = {
                image_url_thumb: "dummyImage",
            };

            expect(wrapper.instance().getImageURL(imageUrlObject)).toEqual("dummyImage");
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
