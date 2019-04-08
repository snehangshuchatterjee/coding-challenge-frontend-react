import React, {Component} from "react";
import ReactPaginate from "react-paginate";
import AxiosController from "../../controllers/AxiosController";
import FilterComponent from "../filterComponent/FilterComponent";
import CardComponent from "../shared/cardComponent/CardComponent";
import ErrorComponent from "../shared/errorComponent/ErrorComponent";
import ModalComponent from "../shared/modalComponent/ModalComponent";

interface IFilterDataObject {
    subjectHeading: string;
    fromDate: number;
    toDate: number;
}

class BikeListComponent extends Component {
    public BASE_URL: string = "https://bikewise.org/api/v2/incidents";
    public PAGE_NUMBER: number = 1;
    public ITEMS_PER_PAGE: number = 10;
    public PROXIMITY: string = "Berlin";
    public PROXIMITY_SQUARE: number = 100;
    public TOTAL_COUNT: number = 0;
    public LANDING_PAGE_NUMBER: number = 0;
    public QUERY: string = "";
    public OCCURED_BEFORE: number = 0;
    public OCCURED_AFTER: number = 0;
    public ERROR_MESSAGE: string = "Oops, Something went wrong...";
    public apiClass: AxiosController = new AxiosController();

    public state = {
        incidentCount: 0,
        incidents : [],
        isError : false,
        isLoading: true,
    };

    constructor(props: any) {
        super(props);
    }

    public getBerlinDataURL = () => {
        let url = "";
        url = this.BASE_URL
                +
                "?proximity="
                +
                this.PROXIMITY
                +
                "&proximity_square="
                +
                this.PROXIMITY_SQUARE
                +
                "&query="
                +
                this.QUERY;

        url = (this.OCCURED_AFTER === 0) ? url : url + "&occurred_after=" + this.OCCURED_AFTER;
        url = (this.OCCURED_BEFORE === 0) ? url : url + "&occurred_before=" + this.OCCURED_BEFORE;

        return url;
    }

    public componentDidMount = () => {
        this.getData();
    }

    public getData = () => {
        this.apiClass.getData(this.getBerlinDataURL())
        .then(
            (response) => {
                this.TOTAL_COUNT = response.data.incidents.length;
                this.getDataPerPage({selected: this.LANDING_PAGE_NUMBER});
            },
        );
    }

    public getDataPerPage = (selectedItem: {selected: number}) => {
        const pageNumber = selectedItem.selected + 1;
        const url = this.getBerlinDataURL();

        this.apiClass.getDataPerPage(url, pageNumber, this.ITEMS_PER_PAGE)
        .then((response) => {
            this.setState({
                incidentCount: this.TOTAL_COUNT,
                incidents : response.data.incidents,
                isLoading: false,
            });
        })
        .catch((error) => {
            this.setState({
                isError : true,
            });
        });
    }

    public handleSearch = (stateObj: IFilterDataObject) => {
        this.QUERY = stateObj.subjectHeading;
        this.OCCURED_AFTER = stateObj.fromDate;
        this.OCCURED_BEFORE = stateObj.toDate;

        this.getData();
    }

    public closeErrorMessage = () => {
        this.setState({
            isError : false,
        });
    }

    public render = () => {
        const incidentLength = this.state.incidents.length;
        if (this.state.isLoading) {
            return(
                <div>
                    <FilterComponent handleSearch={this.handleSearch}/>
                    <p>Loading....</p>
                </div>
            );
        } else if (this.state.isError) {
            return(
                <div>
                    <FilterComponent handleSearch={this.handleSearch}/>
                    <ErrorComponent errorMessage={this.ERROR_MESSAGE} closeButtonEventHandler={this.closeErrorMessage}/>
                </div>
            );
        } else {
            return(
                <div>
                    <FilterComponent handleSearch={this.handleSearch}/>
                    <div style={{position: "absolute", right: "30px", top: "90px"}}>
                        <strong>Total Cases: </strong>{this.TOTAL_COUNT}
                    </div>
                    {
                        incidentLength === 0 ?
                            <p>No Results</p>
                            :
                            this.state.incidents.map((incident: any) => {
                                return(
                                    <CardComponent
                                        key={incident.id}
                                        incident={incident}
                                    />
                                );
                            })
                    }
                    <ReactPaginate
                        pageCount={Math.ceil(this.state.incidentCount / this.ITEMS_PER_PAGE)}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        initialPage={0}
                        containerClassName={"pagination justify-content-center"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"page-item active"}
                        onPageChange={this.getDataPerPage}
                    />
                </div>
            );
        }
    }
}

export default BikeListComponent;
