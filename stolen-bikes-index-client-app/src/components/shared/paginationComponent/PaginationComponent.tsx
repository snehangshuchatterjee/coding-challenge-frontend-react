import React, {Component} from 'react';

interface PaginationComponentProps {
    totalNoOfPages: number; 
    currentPageNumber: number;
}

class PaginationComponent extends Component<PaginationComponentProps>{
    state = {
        totalNoOfPages: 0,
        currentPageNumber: 0
    };

    constructor(props: any){
        super(props);
    }

    componentDidMount(){
        this.setState({
            totalNoOfPages : this.props.totalNoOfPages,
            currentPageNumber : this.props.currentPageNumber
        });
    }

    componentWillReceiveProps(newProps: PaginationComponentProps){
        this.setState({
            totalNoOfPages : newProps.totalNoOfPages,
            currentPageNumber : newProps.currentPageNumber
        });
    }

    render = () => {
        console.log("this.state.totalNoOfPages :"+ this.state.totalNoOfPages);
        return(
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#">Previous</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">4</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">5</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default PaginationComponent;