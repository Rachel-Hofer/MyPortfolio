import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';

class AboutMe extends Component{


    render(){

        return(

        <div className="container addedStyleAboutMe">
                <h1 className="myName">Rachel Hofer </h1> 
                <h3 className="myPosition">Front-End React Developer</h3>             
        </div>

        )
    }

}

export default AboutMe;