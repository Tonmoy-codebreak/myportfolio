import React from 'react';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Skills from '../Components/Skills';
import Education from '../Components/Education';

const HomePage = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            
        </div>
    );
};

export default HomePage;