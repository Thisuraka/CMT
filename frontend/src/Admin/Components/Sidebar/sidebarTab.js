import React from 'react'

const sidebarTab = ({link,iconclass,title,children,...rest}) =>{
    return (
        <li className="nav-item">
            <a href={link} {...rest} className="nav-link text-secondary align-middle px-0 ">
                <i className={iconclass}></i> <span className="ms-1 d-none d-sm-inline">{title}</span>
            </a>
            {children}
        </li>
    );
}

export default sidebarTab;