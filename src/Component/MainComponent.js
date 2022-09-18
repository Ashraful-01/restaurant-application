import React from 'react';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';


const MainComponent = () => {
    return (

        <div>
            <Header />
            <Body />
            <Footer />

            <p>This is another Component!</p>
        </div>
    );
}



export default MainComponent;