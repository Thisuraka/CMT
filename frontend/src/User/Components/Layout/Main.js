import React from 'react'
import NavBar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'


export default ({children}) => {

    // console.log('render Main Admin')

    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}