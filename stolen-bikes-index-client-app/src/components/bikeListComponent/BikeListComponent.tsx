import React, {Component} from 'react';
import axios from 'axios';
import CardComponent from '../shared/cardComponent/CardComponent';
import PaginationComponent from '../shared/paginationComponent/PaginationComponent';

class BikeListComponent extends Component {
    BASE_URL : string = 'https://bikewise.org/api/v2/incidents';
    PAGE_NUMBER: number = 1;
    ITEMS_PER_PAGE  : number = 10;
    PROXIMITY: string = 'Berlin';
    PROXIMITY_SQUARE: number = 100;
    TOTAL_COUNT: number = 0;
    LANDING_PAGE_NUMBER: number = 1;
    
    state = {
        incidents : [],
        incidentCount: 0,
        isLoading: true
    };

    constructor(props: any){
        super(props);
    }

    getITotalCountURL = () => {
        var url = '';
        url = this.BASE_URL+'?proximity='+this.PROXIMITY+'&proximity_square='+this.PROXIMITY_SQUARE;
        return url;
    }

    getIncidentsPerPageURL = (page_number: number) => {
        var url = '';
        url = this.BASE_URL+'?page='+page_number+'&per_page='+this.ITEMS_PER_PAGE+'&proximity='+this.PROXIMITY+'&proximity_square='+this.PROXIMITY_SQUARE;
        return url;
    }

    componentDidMount() {
        var me = this;
        axios.get(this.getITotalCountURL())
        .then(
            (response) => {
                console.log(response.data.incidents);
                me.TOTAL_COUNT = response.data.incidents.length;    
                this.getDataPerPage(this.LANDING_PAGE_NUMBER);                
            }
        )
    }

    getDataPerPage = (page_number: number) => {
        axios.get(this.getIncidentsPerPageURL(page_number))
        .then(
            (response) => {
                // console.log(response.data.incidents);
                this.setState({
                    incidents : response.data.incidents,
                    incidentCount : this.TOTAL_COUNT,
                    isLoading : false
                });             
            }
        )
    }

    render = () => {
        if(this.state.isLoading){
            return(
                <div>
                    Loading....
                </div>
            );
        }
        else{
            return(
                <div>
                    {this.state.incidents.map((incident: any) => {
                        return <CardComponent key = {incident.id} title = {incident.title} description = {incident.description} thumbnailURL = {incident.media.image_url_thumb}/>
                    })}
                    <PaginationComponent    totalNoOfPages = {Math.ceil(this.state.incidentCount/this.ITEMS_PER_PAGE)} 
                        currentPageNumber = {3} 
                        clickHandler = {this.getDataPerPage.bind(this)}
                    />
                </div>
            );            
        }
    }
}

export default BikeListComponent;
