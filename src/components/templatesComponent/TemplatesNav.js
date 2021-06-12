import React from 'react'
import { NavLink } from 'react-router-dom'
export const TemplatesNav = () => {
    return (
        <div className="templatesNav">
            <div className="elements">
                <NavLink exact to="/templates/" 
                activeClassName="categoryActive" 
                className="element">
                    <i className="lni lni-book"></i>All
                </NavLink>
                <NavLink to="/templates/simple" 
                activeClassName="categoryActive" 
                className="element">
                    <i className="lni lni-star"></i>Simple
                </NavLink>
                <NavLink to="/templates/modern" 
                activeClassName="categoryActive" 
                className="element">
                    <i className="lni lni-rocket"></i>Modern
                </NavLink>
                <NavLink to="/templates/professional" 
                activeClassName="categoryActive" 
                className="element">
                    <i className="lni lni-briefcase"></i>Professional
                </NavLink>
                <NavLink to="/templates/creative" 
                activeClassName="categoryActive" 
                className="element">
                    <i className="lni lni-brush-alt"></i>Creative
                </NavLink>
            </div>
        </div>
    )
}
