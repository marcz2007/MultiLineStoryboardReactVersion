import React, {Component} from 'react';
import './App.css';
import Storyboard from './Components/Storyboard'
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {



    render() {
        return (
            <BrowserRouter>
            <div className="App">
                <Route path={'/'} component = {Storyboard} />
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
