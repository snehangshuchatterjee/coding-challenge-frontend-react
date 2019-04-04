import React from 'react';

import bikePic from '../../../resources/images/bike_pic.jpg';

interface CardComponentProps{
    key: number,
    title : string;
    description: string;
    thumbnailURL: string;
}

class CardComponent extends React.Component<CardComponentProps>{
    state = {
        cardTitle : '',
        cardDescription: '',
        img_src:  ''
    }
    

    constructor(props: any){
        super(props);
    }

    componentDidMount = () => {
        this.setState({
            cardTitle : this.props.title,
            cardDescription: this.props.description,
            img_src:  this.props.thumbnailURL
        });
        
        console.log('this.props.title: '+this.props.thumbnailURL)
    }

    componentWillReceiveProps = (newProps: CardComponentProps) => {
        this.setState({
            cardTitle : newProps.title,
            cardDescription: newProps.description,
            img_src:  newProps.thumbnailURL
        });
    }

    getImageURL = (thumbNailURL: string) => {
        console.log(thumbNailURL);
        if(!thumbNailURL){
            return bikePic
        }
        else{
            return thumbNailURL;
        }
    }
    
    render(): JSX.Element{
        console.log("render called in CardComponent for ID: "+ this.props.key);
        return(
            <div className="media">
                <div style = {{'padding': '10px'}}>
                    <img className="mr-3" alt={bikePic} src= {this.getImageURL(this.state.img_src)}  width = '100px'/>
                </div>
                <div className="media-body">
                    <h5 className="mt-0">
                        {this.state.cardTitle}
                    </h5> 
                    {this.state.cardDescription}
                </div>
            </div>           
        )
    }
}

export default CardComponent;