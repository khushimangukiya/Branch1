import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 101,
            CityName: 'Surat'
        }
    }

    changeStateNam = () => {
        this.setState({
            CityName: 'Ahmdabad'
        })
    }

    render() {
        return (
            <>
                <p>Famouse Place</p>
                {
                    this.props.place === 'Gujarat' ? 'Surat' : this.props.place === 'Rajasthan' ? 'Jetpur' : ''
                }
                <div>
                    {this.state.CityName}
                    <button onClick={() => this.changeStateNam()}>Change City</button>
                </div>
            </>
        );
    }
}

export default City;