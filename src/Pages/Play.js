import React from 'react'
import StartPlay from './Component/StartPlay';
import Header from './Component/CommonComponent/Header';
import Footer from './Component/CommonComponent/Footer';


const Play = (props) => {
    return (
        <>
            <Header active="i6" />
            <StartPlay player={props.match.params.name} />
            <Footer />
        </>
    )
}

export default Play;
