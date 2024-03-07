import React from 'react';
import LandingPage from './LandingPage'; // Make sure to provide the correct path to your LandingPage component
import SearchProperty from './SearchProperty'; // Make sure to provide the correct path to your SearchProperty component

const HomePage = () => {
    return (
        <div>
            <LandingPage />
            <SearchProperty />
        </div>
    );
};

export default HomePage;
