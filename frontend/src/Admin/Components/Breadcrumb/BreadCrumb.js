import React from 'react'

const Breadcrumb = (props) =>{
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props.titles.map((title,i) => {                    
                    return props.titles.length === i +1 ?
                        <li className="breadcrumb-item active" key={i} aria-current="page">{title.name}</li>
                        :
                        <li className="breadcrumb-item" key={i} ><a href={title.link} className="text-decoration-none">{title.name}</a></li>                   
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb;