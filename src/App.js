import React, {Component} from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import BattleContainer from "./components/Battle/BattleContainer";

class App extends Component {
    render() {
        return (
            <div className="app_wrapper">
              <HeaderContainer/>
              <Navbar/>
                <div className="app_wrapper_content">
                    <Switch>
                        <Route path="/battle" render={() =>
                            <BattleContainer/>}/>
                        <Route path="*" render={() =>
                            <div>404 not found</div>
                        }/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
