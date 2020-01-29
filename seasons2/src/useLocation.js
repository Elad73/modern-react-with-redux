import { useState, useEffect } from 'react';

export default () => {
    const [lat, setLat] = useState(null); //the first is the value that we want to store and the second is a function to change that value
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []); //the empty array parameter, means only try to run this function one time in total for the entire life-cycle of this component

    return [lat, errorMessage];
};