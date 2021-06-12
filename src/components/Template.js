import React from 'react';
import { Link } from 'react-router-dom';

export const Template = () => {
    return (
        <div className="templatePage" >
            Templates page

            <div className="templatesList">
                <div className="cats">
                    <Link to='/templates/' ><i class="lni lni-gallery"></i>All Templates</Link>
                    <Link to='/templates/simple' ><i className="lni lni-star"></i>Simple</Link>
                    <Link to='/templates/creative' ><i className="lni lni-brush-alt"></i>Creative</Link>
                    <Link to='/templates/pro' ><i className="lni lni-briefcase"></i>Professional</Link>
                    <Link to='/templates/modern' ><i className="lni lni-rocket"></i>Modern</Link>
                </div>
            </div>
        </div>
    )
}
