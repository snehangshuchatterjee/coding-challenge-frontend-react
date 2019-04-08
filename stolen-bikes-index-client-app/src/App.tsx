import React, { Component } from "react";
import "./App.css";
import BodyComponent from "./components/bodyComponent/BodyComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import logo from "./logo.svg";

class App extends Component {
    public render() {
        return (
            <div className="col-md-12">
                <HeaderComponent />
                <BodyComponent />
            </div>
        );
    }
}

export default App;
