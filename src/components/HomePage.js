import React, { Component } from 'react';
import NavBar from "./NavBar"
import RightPane from './RightPanel'
import LeftPanel from './LeftPanel'
import CenterPanel from './CenterPanel'

class HomePage extends Component {
    render() {
        return (

            <div>
                <NavBar/>
                <br/>
                <div className="row">
                    <div className="col-md-1" ></div>
                    <LeftPanel/>
                    <CenterPanel/>
                    <RightPane/>
                    <div className="col-md-1" ></div>
                </div>
            </div>


        );
    }
}

export default HomePage;
