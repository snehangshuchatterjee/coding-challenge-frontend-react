import React, {Component} from 'react';
import FilterComponent from '../filterComponent/FilterComponent';
import CardComponent from '../shared/cardComponent/CardComponent';
import PaginationComponent from '../shared/paginationComponent/PaginationComponent';

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
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<PaginationComponent totalNoOfPages = {1000} currentPageNumber = {3} />
				</div>
				<div className="col-md-1">
				</div>
            </div>
        );
    }
}
export default BodyComponent;