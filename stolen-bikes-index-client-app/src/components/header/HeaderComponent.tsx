import React from 'react';

class HeaderComponent extends React.Component{
    constructor(props: any){
        super(props);
    }

    render(): JSX.Element{
        return(
            <div className="row">
				<div className="col-md-1">
				</div>
				<div className="col-md-3" style = {{'textAlign' : 'center'}}>
					<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
				</div>
				<div className="col-md-7" style = {{'display' : 'table-cell', 'verticalAlign' : 'middle'}}>
					<div className="page-header" style = {{'display' : 'inline-block'}}>
						<h1>
							Police Department of Berlin
						</h1>
					</div>
				</div>
				<div className="col-md-1">
				</div>
			</div>
        );
    }
}

export default HeaderComponent;