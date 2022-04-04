import React, { Component } from 'react';

class State extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            id:101,
            StateName:'Rajasthan'
        }
    }
    
    changeCityNam = () => {
        this.setState ({
            StateName:'Gujarat'
        })
    }

    render() {
        return (
            <div>
                {this.state.StateName}
                <button onClick={() => this.changeCityNam()}>Change State</button>
            </div>
        );
    }
}

export default State;