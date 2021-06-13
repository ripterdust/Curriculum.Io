import React from 'react'
import { Link } from 'react-router-dom'

export const ResumeItem = ({ data }) => {

    return (
        <div className="card" >
            <div className="title">
                {data.title}
            </div>
            <img src={data.img} alt={data.title} />
            <Link to={`/app/${data.id}`} >Use Template</Link>            
        </div>
    )
}
