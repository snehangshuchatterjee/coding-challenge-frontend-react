import React, {Component} from 'react';
import FilterComponent from '../filterComponent/FilterComponent';
import CardComponent from '../shared/cardComponent/CardComponent';
import PaginationComponent from '../shared/paginationComponent/PaginationComponent';
import BikeListComponent from '../bikeListComponent/BikeListComponent';

class BodyComponent extends Component{
    constructor(props: any){
        super(props);
    }

    render() : JSX.Element{
        return(
            <div className="row">
                <div className="col-md-1">
				</div>
				<div className="col-md-10">
                    <FilterComponent />
					{/* <CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent /> */}
                    <BikeListComponent />
				</div>
				<div className="col-md-1">
				</div>
            </div>
        );
    }
}
export default BodyComponent;