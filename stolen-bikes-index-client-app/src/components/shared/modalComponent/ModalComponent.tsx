import React, {Component} from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

interface IIncidentType {
    incident: {
        [key: string]: any,
    };
    showModal?: boolean;
    altImage: string;
}

class ModalComponent extends Component<IIncidentType> {
    public state: IIncidentType = {
        altImage : "",
        incident : {},
        showModal : false,
    };

    constructor(props: any) {
        super(props);
    }

    public componentDidMount = () => {
        this.setState({
            altImage: this.props.altImage,
            incident: this.props.incident,
            showModal: this.props.showModal,
        });
    }

    public componentWillReceiveProps = (newProps: IIncidentType) => {
        this.setState({
            altImage: newProps.altImage,
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
            <Modal
                show={this.state.showModal}
                onHide={this.handleClose}
                centered={true}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
            >
            <Modal.Header closeButton={true}>
                <Modal.Title>{this.state.incident.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Container>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <div >
                                <img
                                    src={this.state.incident.media ? this.state.incident.media.image_url : this.state.altImage}
                                    style={{maxWidth: "468px", maxHeight: "468px"}}
                                    alt={"No Image Provided"}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            {this.state.incident.description}
                            <div style={{paddingTop : "10px"}}>
                                <div>
                                    <strong>
                                        Occurred On:
                                    </strong>
                                    {new Date(this.state.incident.occurred_at).toLocaleDateString()}
                                </div>
                                <div>
                                    <strong>
                                        Reported On:
                                    </strong>
                                    {new Date(this.state.incident.updated_at).toLocaleDateString()}
                                </div>
                                <div>
                                    <strong>
                                        Occurred At:
                                    </strong>
                                    {this.state.incident.address}
                                </div>
                                <div>
                                    <strong>
                                        Incident Type:
                                    </strong>
                                    {this.state.incident.type}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
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
