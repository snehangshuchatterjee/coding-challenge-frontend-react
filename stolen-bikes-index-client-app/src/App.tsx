import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import BodyComponent from './components/bodyComponent/BodyComponent';

class App extends Component {
    render() {
        return (
            <div className="col-md-12">
                <HeaderComponent />
                <BodyComponent />
            </div>
        );
    }
}

export default App;
