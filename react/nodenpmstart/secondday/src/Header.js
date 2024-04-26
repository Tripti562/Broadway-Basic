import "./App.css"
import Header from "./Header";
import React from "react";
import "react-bootstrap";
import "bootstrap";

function Meader(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow py-4 px-4 mb-4">
            <div className="container">
                <a className="navbar-brand" href="#">
                <img src="images/logo.png"></img>
                </a>
            </div>
        </nav>
    );
}

export default Header;