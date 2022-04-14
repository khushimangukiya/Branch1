import React from 'react';

function Loding(Component) {

    return function withLoadingComponent({ isLoading, data }) {
        if (isLoading) {
            return (
                <div className='loader_main'>
                <div className='loading-container'>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
                </div>
            )
        } else {
            return (
                <Component data={data} />
            );
        }
    }
}

export default Loding;