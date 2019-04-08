import React, {Component} from "react";
import DatePicker from "react-datepicker";
import ErrorComponent from "../shared/errorComponent/ErrorComponent";

import "react-datepicker/dist/react-datepicker.css";

interface FilterComponentProps {
    handleSearch: (stateObj: any) => void;
}

interface CustomObject {
    [key: string]: any;
}

class FilterComponent extends Component<FilterComponentProps> {
    public state = {
        subjectHeading : "",
        fromDate: new Date(),
        fromDateSelected: false,
        toDate: new Date(),
        toDateSelected: false,
        errorMessage: "",
        initialDate : new Date(),
    };

    constructor(props: any) {
        super(props);
    }

    public handleSearchboxDataChange = (e: any): void => {
        this.setState({
            subjectHeading: e.target.value,
        });
    }

    public handleFromDataChange = (e: any): void => {
        if (e == null) {
            this.setState({
                fromDateSelected: false,
            });
        } else {
            this.setState({
                fromDate: new Date(e),
                fromDateSelected: true,
            });
        }
    }

    public handleToDataChange = (e: any): void => {
        if (e == null) {
            this.setState({
                toDateSelected: false,
            });
        } else {
            this.setState({
                toDate: new Date(e),
                toDateSelected: true,
            });
        }
    }

    public handleButtonClick = (e: any): void => {
        const filterObject: CustomObject = {};

        filterObject.subjectHeading = this.state.subjectHeading;
        filterObject.fromDate = this.state.fromDateSelected ? this.state.fromDate.getTime() : 0;
        filterObject.toDate = this.state.toDateSelected ? this.state.toDate.getTime() : 0;

        if ((this.state.fromDateSelected && this.state.toDateSelected) && (filterObject.fromDate > filterObject.toDate)) {
            this.setState({
                errorMessage : "From Date cannot be after To Date",
            });
        } else if (filterObject.fromDate > new Date()) {
            this.setState({
                errorMessage : "From Date cannot be after Current Date",
            });
        } else if (filterObject.toDate > new Date()) {
            this.setState({
                errorMessage : "To Date cannot be after Current Date",
            });
        } else {
            this.props.handleSearch(filterObject);
        }
    }

    public closeErrorMessage = () => {
        this.setState({
            errorMessage : "",
        });
    }

    public render(): JSX.Element {
        return(
            <div style={{textAlign : "center"}}>
                <div style={{display : "inline-block"}}>
                    <div style={{display: "table", padding : "10px", borderSpacing: "20px"}}>
                        <div style={{display: "table-cell"}}>
                            <input className="form-control" type="text" placeholder="Enter Case Description"  onChange={this.handleSearchboxDataChange}/>
                        </div>
                        <div style={{display: "table-cell"}}>
                            <DatePicker
                                onChange={this.handleFromDataChange}
                                placeholderText="From"
                                isClearable={true}
                                onChangeRaw={() => {

                                }}
                                selected={this.state.fromDateSelected ? this.state.fromDate : undefined}
                            />
                        </div>
                        <div style={{display: "table-cell"}}>
                            <DatePicker
                                onChange={this.handleToDataChange}
                                placeholderText="To"
                                selected={this.state.toDateSelected ? this.state.toDate : undefined}
                            />
                        </div>
                        <div style={{display: "table-cell", verticalAlign: "middle"}}>
                            <button type="button" className="btn btn-primary" onClick={this.handleButtonClick.bind(this)}>Search Cases</button>
                        </div>
                    </div>
                </div>
                {this.state.errorMessage != ""
                    ?
                    <ErrorComponent errorMessage={this.state.errorMessage} closeButtonEventHandler={this.closeErrorMessage}/>
                    :
                    null
                }
            </div>
        );
    }
}

export default FilterComponent;
