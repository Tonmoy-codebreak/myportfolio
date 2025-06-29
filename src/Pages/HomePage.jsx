import React from 'react';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';

const HomePage = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            
        </div>
    );
};

export default HomePage;