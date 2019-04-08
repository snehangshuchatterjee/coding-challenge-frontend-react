import React, {Component} from "react";

interface ErrorComponentProps {
    errorMessage: string;
    closeButtonEventHandler: () => void;
}

class ErrorComponent extends Component <ErrorComponentProps> {
    constructor(props: ErrorComponentProps) {
        super(props);
    }

    public render = () => {
        return(
            <div className="alert alert-danger">
                <a href="#" className="close" data-dismiss="alert" onClick={this.props.closeButtonEventHandler}>&times;</a>
                <strong>Error!</strong> {this.props.errorMessage}
            </div>
        );
    }
}

export default ErrorComponent;
