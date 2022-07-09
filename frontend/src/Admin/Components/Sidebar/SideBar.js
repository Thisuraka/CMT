import React from 'react';
import SidebarTab from './sidebarTab';

const SideBar = ({children}) => {
    return(
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark ">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <SidebarTab  link="/admin" title="Dashboard" iconclass="fs-4 bi-house"/>
                            <SidebarTab  link="/admin/user" title="User" iconclass="fs-4 bi-house"/>
                            <SidebarTab  link="/admin/event" title="Event" iconclass="fs-4 bi-house"/>
                            <SidebarTab  link="/admin/material" title="Material" iconclass="fs-4 bi-house"/>
                            {/* <SidebarTab  link="#Material" data-bs-toggle="collapse" title="Material" iconclass="fs-4 bi-house">
                                <ul className="collapse nav flex-column ms-1" id="Material" data-bs-parent="#menu">
                                    <SidebarTab  link="/admin/researchmaterial" title="Research Material" iconclass="fs-4 bi-house"/>
                                    <SidebarTab  link="/admin/workshopmaterial" title="Workshop Material" iconclass="fs-4 bi-house"/>
                                </ul>
                            </SidebarTab>                                                        */}
                        </ul>
                    </div>
                </div>
                <div className="col py-3">{children}</div>
            </div>
        </div>
    );
}

export default SideBar;