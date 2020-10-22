import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Storyboard from './Components/Storyboard'
import TopField from './Components/TopField'
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {



    render() {
        return (
            <BrowserRouter>
            <div className="App">
                <Route path={'/'} component = {Storyboard} />
                {/*<TopField />*/}
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
