import React, {Component} from "react";

interface IErrorComponentProps {
    errorMessage: string;
    closeButtonEventHandler: () => void;
}

const ErrorComponent = (props: IErrorComponentProps): JSX.Element => {
    return(
        <div className="alert alert-danger">
            <a
                href="#"
                className="close"
                data-dismiss="alert"
                onClick={props.closeButtonEventHandler}
            >
                &times;
            </a>
            <strong>Error!</strong> {props.errorMessage}
        </div>
    );
};

export default ErrorComponent;
