import React from 'react';

class CardComponent extends React.Component{
    constructor(props: any){
        super(props);
    }
    
    render(): JSX.Element{
        return(
            <div className="media">
                <div style = {{'padding': '10px'}}>
                    <img className="mr-3" alt="Bootstrap Media Preview" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg" />
                </div>
                <div className="media-body">
                    <h5 className="mt-0">
                        Lost Bike Case Heading
                    </h5> 
                    Lost bike description. Entire description goes here. This text is to be replaced by the actual description
                </div>
            </div>           
        )
    }
}

export default CardComponent;