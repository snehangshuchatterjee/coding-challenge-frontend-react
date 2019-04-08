import React from "react";
import berlin_police_logo from "../../resources/images/Berlin_police_logo.png";

class HeaderComponent extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return(
            <div className="row">
                <div className="col-md-1"/>
                <div className="col-md-3" style={{textAlign : "center"}}>
                    <img alt="Bootstrap Image Preview" src={berlin_police_logo} />
                </div>
                <div className="col-md-7" style={{display : "table-cell", verticalAlign : "middle"}}>
                    <div className="page-header" style={{display : "inline-block", paddingTop: "60px"}}>
                        <h1>
                            Police Department of Berlin
                        </h1>
                    </div>
                </div>
                <div className="col-md-1"/>
            </div>
        );
    }
}

export default HeaderComponent;
