import React, {Component} from 'react';

type PaginationComponentProps = {
    totalNoOfPages: number; 
    currentPageNumber: number;
    clickHandler: (num: number) => void;
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

    getPageButtons = () => {
        var outputArray = [];
        for(var index = 0; index < this.state.totalNoOfPages; index++){
            outputArray.push(index+1);
        }
        return outputArray;
    }

    handleClickEvents = (num: number) => {
        console.log(num);
    }

    render = () => {
        console.log("this.state.totalNoOfPages :"+ this.state.totalNoOfPages);
        return(
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#">Previous</a>
                    </li>

                    {this.getPageButtons().map((pageNumber) => {
                        return (
                            <li className="page-item">
                                <a className="page-link" href="#" onClick = {(event: React.MouseEvent<HTMLElement>) => {
                                        this.props.clickHandler(pageNumber);
                                    }}>{pageNumber}
                                    </a>
                            </li>
                        );
                    })}

                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default PaginationComponent;