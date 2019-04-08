import React, {Component} from "react";

interface IErrorComponentProps {
    errorMessage: string;
    closeButtonEventHandler: () => void;
}

class ErrorComponent extends Component <IErrorComponentProps> {
    constructor(props: IErrorComponentProps) {
        super(props);
    }

    public render = () => {
        return(
            <div className="alert alert-danger">
                <a
                    href="#"
                    className="close"
                    data-dismiss="alert"
                    onClick={this.props.closeButtonEventHandler}
                >
                    &times;
                </a>
                <strong>Error!</strong> {this.props.errorMessage}
            </div>
        );
    }
}

export default ErrorComponent;
