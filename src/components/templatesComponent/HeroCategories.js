import React from 'react'
import { Link } from 'react-router-dom';


export const HeroCategories = ({ category }) => {
    return (
        <div className="HeroCategories" >
            <div className="text">
                <div className="title">
                    Job-winning resume { category } templates
                </div>
                <div className="descriptionTemplate">
                    Each template is expertly designed and follows the exact “
                    resume rules” hiring managers look for. Stand out and get 
                    hired faster with field-tested resume templates.
                </div>
                <Link to="/create/" className="btn" >Create my resume now</Link>
            </div>
        </div>
    )
}
