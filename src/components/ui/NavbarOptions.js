import React from 'react'
import {Link} from 'react-router-dom';
export const NavbarOptions = () => {
    return (
        <>
        <div className="left">
            <div className="title">
                <Link to='/templates'>
                    Curriculum templates
                </Link>
                <Link to='/templates' className="all">
                    View all
                </Link>
            
            </div>

            <div className="categories">
                <Link className="cat" to='/templates/simple'>
                    <div className="title"><i className="lni lni-star"></i>Simple</div>
                    <div className="description">
                        Clean, straightforward templates aiming to keep the focus on your letter’s writing and content
                    </div>
                </Link>
                <Link className="cat" to='/templates/pro'>
                    <div className="title"><i className="lni lni-briefcase"></i>Profesional</div>
                    <div className="description">
                    Polished designs to help you highlight your knowledge and expertise in formal fields
                    </div>
                </Link>
                <Link className="cat" to="/templates/modern" >
                    <div className="title"><i className="lni lni-rocket"></i>Modern</div>
                    <div className="description">
                        Sleek and attractive designs for forward-thinking candidates in innovative fields
                    </div>
                </Link>
                <Link className="cat" to="/templates/creative" >
                    <div className="title"><i className="lni lni-brush-alt"></i>Creative</div>
                    <div className="description">
                        Stylish templates defined by a unique approach to show off your originality and inspiration
                    </div>
                </Link>
            </div>

        </div>
        <div className="right">
            <img src="/img/nav.png" alt="" />
        </div>
        </>
    )
}
