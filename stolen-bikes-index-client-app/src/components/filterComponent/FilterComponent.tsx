import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class FilterComponent extends Component{
    constructor(props: any){
        super(props);
    }

    handleClickEvent = () : void => {

    }

    render(): JSX.Element{
        return(
            <div style = {{'textAlign' : 'center'}}>
            <div style = {{'display' : 'inline-block'}}>
                <div style = {{'display': 'table', 'padding' : '10px', 'border-spacing': '20px'}}>
					<div style = {{'display': 'table-cell'}}>
                    	<input className="form-control" type = 'text' placeholder = 'Enter Case Description' />
                    </div>
					<div style = {{'display': 'table-cell'}}>
						<DatePicker 
                            onChange = {this.handleClickEvent}
                            placeholderText = "From"
                        />
					</div>
					<div style = {{'display': 'table-cell'}}>
                        <DatePicker 
                            onChange = {this.handleClickEvent}
                            placeholderText = "To"
                        />
					</div>
                    <div style={{'display': 'table-cell', 'verticalAlign': 'middle'}}>
                        <button type = 'button' className="btn btn-primary">Search Cases</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default FilterComponent;