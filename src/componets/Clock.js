import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        
        console.log("1 constructor");
        this.state = {
            time : new Date()
        }
    }
    
    tick = () => {
        this.setState({
            time : new Date()
        })
        console.log("tick");
    }

    componentDidUpdate = () =>{
        console.log("4. componentDidUpdate");
    }

    componentWillUnmount = () => {
        clearInterval (this.timerID);
        console.log("last componentwillUnmount");
    }

    componentDidMount = () => {
        this.timerID = setInterval(() => this.tick(), 1000);
        console.log("3. componentDidMount");
    }

    render() {
        console.log("2. render");
        return (
            <div>
            {this.state.time.toLocaleDateString()} <br></br>           
            {this.state.time.toLocaleTimeString()} 
            </div>
        );
    }
}

export default Clock;