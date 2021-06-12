import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="text">
                <div className="title">
                    Only 2% of resumes make it past the first round. Be in the top 2%
                </div>
                <div className="subTitle">
                    Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free! 
                </div>
                <div className="btn">
                    <Link to='/templates' className='button' >Create my resume</Link>
                </div>
            </div>
        </div>
    )
}
