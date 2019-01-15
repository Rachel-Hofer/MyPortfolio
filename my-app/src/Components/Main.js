import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from  './NavBar'
import AboutMe from  './AboutMe';


class Main extends Component{


    render(){

        return(

            <div>
                <Route  component= {NavBar} />
                <Route  component= {AboutMe} />
            </div>

        )
    }

}

export default Main;