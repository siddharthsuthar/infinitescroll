import React, { Component } from 'react';
import NavBar from "./NavBar"
import RightPane from './RightPanel'
import LeftPanel from './LeftPanel'
import CenterPanel from './CenterPanel'
import PropTypes from 'prop-types';
import red from "@material-ui/core/colors/red";
import '../App.css'




class HomePage extends Component {


    render() {
        return (

            <div>
                <NavBar className = "Top"/>
                <br/>
                <div className="row container">
                    <div className="col-md-1" ></div>
                    <LeftPanel className = "Left"/>
                    <CenterPanel className = "Middle"/>
                    <RightPane className = "Right"/>
                    <div className="col-md-1" ></div>
                </div>
            </div>


        );
    }
}


HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default HomePage;
