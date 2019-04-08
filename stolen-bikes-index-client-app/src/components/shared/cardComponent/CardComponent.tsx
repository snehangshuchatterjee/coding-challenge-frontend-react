import React from "react";

import bikePic from "../../../resources/images/bike_pic.jpg";
import ModalComponent from "../modalComponent/ModalComponent";

interface IIncidentType {
    incident: {
        [key: string]: any,
    };
    showModal?: boolean;
}

class CardComponent extends React.Component<IIncidentType> {
    public state: IIncidentType = {
        incident : {},
        showModal: false,
    };

    constructor(props: any) {
        super(props);
    }

    public componentDidMount = () => {
        this.setState({
            incident: this.props.incident,
        });
    }

    public componentWillReceiveProps = (newProps: IIncidentType) => {
        this.setState({
            incident: newProps.incident,
        });
    }

    public getImageURL = (imageUrlObject: {image_url_thumb: string}) => {
        const thumbNailURL = imageUrlObject ? imageUrlObject.image_url_thumb : undefined;
        if (!thumbNailURL) {
            return bikePic;
        } else {
            return thumbNailURL;
        }
    }

    public handleLinkClick = () => {
        this.setState({
            showModal : true,
        });
    }

    public render(): JSX.Element {
        const occuredDate: string = this.state.incident.occurred_at === ""
            ?
                "No Date Specified"
            : new Date(this.state.incident.occurred_at).toLocaleDateString();
        return(
            <div
                className="media border border-light rounded"
                style={
                    {
                        background : "#F7F5F5",
                        margin: "10px",
                        maxHeight: "150px",
                        padding: "10px",
                    }
                }
            >
                <div style={{padding: "10px"}}>
                    <img
                        className="mr-3"
                        alt="Sorry, Image not available"
                        src={this.getImageURL(this.state.incident.media)}
                        width="100px"
                        style={{maxWidth: "100px"}}
                    />
                </div>
                <div className="media-body">
                    <h5 className="mt-0">
                        {this.state.incident.title ? this.state.incident.title : "No Title"}
                    </h5>
                    <div style={{height: "3em", overflow: "hidden"}}>
                        {this.state.incident.description ? this.state.incident.description : "No Description"}
                    </div>
                    <div style={{position: "static", top: "40px", paddingTop: "10px"}}>
                        <strong>Reported On: </strong>{occuredDate}
                    </div>
                    <div style={{textAlign: "end", color: "blue"}}>
                        <a onClick={this.handleLinkClick} style = {{cursor: "pointer"}}>Read More....</a>
                    </div>
                </div>
                <div>
                    <ModalComponent
                        incident={this.state.incident}
                        showModal={this.state.showModal}
                        altImage={bikePic}
                    />
                </div>
            </div>
        );
    }
}

export default CardComponent;
