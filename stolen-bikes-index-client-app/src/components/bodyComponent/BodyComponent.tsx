import React, {Component} from "react";
import BikeListComponent from "../bikeListComponent/BikeListComponent";

class BodyComponent extends Component {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return(
            <div className="row">
                <div className="col-md-1"/>
                <div className="col-md-10">
                    <BikeListComponent />
                </div>
                <div className="col-md-1"/>
            </div>
        );
    }
}
export default BodyComponent;
