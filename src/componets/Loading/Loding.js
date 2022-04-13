import React from 'react';

function Loding(componet) {

    return function withLoadingComponent({ isLoading, data }) {
        if (isLoading) {
            return (
                <p>Loading</p>
            )
        } else {
            return (
                <componet data={data} />
            );
        }
    }
}

export default Loding;