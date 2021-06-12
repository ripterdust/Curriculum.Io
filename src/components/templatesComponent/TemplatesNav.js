import React from 'react'
import { NavLink } from 'react-router-dom'
export const TemplatesNav = () => {
    return (
        <div className="templatesNav">
            <div className="selection">
                <NavLink to="/templates/" activeClassName="categoryActive" >All</NavLink>
                <NavLink to="/templates/simple" activeClassName="categoryActive" >Simple</NavLink>
                <NavLink to="/templates/modern" activeClassName="categoryActive" >Modern</NavLink>
                <NavLink to="/templates/professional" activeClassName="categoryActive" >Professional</NavLink>
                <NavLink to="/templates/creative" activeClassName="categoryActive" >Creative</NavLink>
            </div>
        </div>
    )
}
