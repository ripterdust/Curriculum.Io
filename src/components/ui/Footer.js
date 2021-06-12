import React from 'react'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                Connect with my social media.
                <div className="links">
                    <a href="/"><i className="lni lni-facebook-oval"></i></a>
                    <a href="/"><i className="lni lni-linkedin-original"></i></a>
                    <a href="/"><i className="lni lni-whatsapp"></i></a>
                </div>
            </div>

            <div className="copy">
                &copy; Copyright 2021 - Bryan Guillermo Arévalo
            </div>
        </div>
    )
}
