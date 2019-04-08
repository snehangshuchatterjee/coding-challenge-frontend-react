import React, {Component} from "react";
import { Button, Modal } from "react-bootstrap";

interface IncidentType {
    incident: {
        [key: string]: any,
    };
    showModal?: boolean;
}

class ModalComponent extends Component<IncidentType> {
    public state: IncidentType = {
        incident : {},
        showModal : false,
    };

    constructor(props: any) {
        super(props);
    }

    public componentDidMount = () => {
        this.setState({
            incident: this.props.incident,
            showModal: this.props.showModal,
        });
    }

    public componentWillReceiveProps = (newProps: IncidentType) => {
        this.setState({
            incident: newProps.incident,
            showModal: newProps.showModal,
        });
    }

    public handleClose = () => {
        this.setState({
            showModal: false,
        });
    }

    public render = (): JSX.Element => {
        return(
            <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header closeButton={true}>
                <Modal.Title>{this.state.incident.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div style={{display: "table"}}>

                    <div style={{float: "left", display: "table-cell"}}>
                        {this.state.incident.description}
                            <div >
                                <img src={this.state.incident.media ? this.state.incident.media.image_url : ""} style={{maxWidth: "468px", maxHeight: "468px"}}/>
                            </div>
                        <div style={{paddingTop : "10px"}}>
                            <div>
                                <strong>Occurred On: </strong>{new Date(this.state.incident.occurred_at).toLocaleDateString()}
                            </div>
                            <div>
                                <strong>Reported On: </strong>{new Date(this.state.incident.updated_at).toLocaleDateString()}
                            </div>
                            <div>
                                <strong>Occurred At: </strong>{this.state.incident.address}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={this.handleClose}>
                Close
                </Button>
            </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalComponent;
