import React, { Component } from 'react';
import NavBar from  './NavBar'
import {Route} from 'react-router-dom';

class Main extends Component{


    render(){

        return(

            <div>
                <Route  component= {NavBar} />
            </div>

        )
    }

}

export default Main;