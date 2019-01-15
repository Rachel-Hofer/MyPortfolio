import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';

class NavBar extends Component{


    render(){

        return(

<div>
                <nav class="navbar navbar-expand-lg customizedNavBar">
                    <Link class="navbar-brand links" to = ''>About Me</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link class="navbar-brand links" to = ''>Projects</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link class="navbar-brand links" to = ''>Skills</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link class="navbar-brand links" to = ''>Resume</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse moveContactMeRight" id="navbarText">
                        <span class="navbar-text">
                            <Link className="navbar-brand links" to="">Contact Me</Link>
                        </span>
                    </div>
                </nav>             
                </div>

        )
    }

}

export default NavBar;