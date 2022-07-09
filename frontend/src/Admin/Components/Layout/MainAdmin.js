import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import SideBar from '../Sidebar/SideBar'


export default ({children}) => {

    // console.log('render Main Admin')

    return (
        <>
            <Header />
                <SideBar >{children}</SideBar>
            <Footer />
        </>
    )
}