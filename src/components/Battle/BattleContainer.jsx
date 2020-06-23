import React from "react";
import Battle from "./Battle";


class BattleContainer extends React.Component{
    componentDidMount(){

    }

    render(){
        return <Battle {...this.props}/>
    }
}

export default BattleContainer;