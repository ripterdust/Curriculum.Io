import React from 'react'

export const PdfTemplate = ({ data }) => {

    // Destructuring params
    const {
        id,
        name,
        profession,
        email,
        phone,
        enterprise,
        job,
        university,
        grade
    } = data;

    // Creating template
    return <>
        <div className={`template${id}`}>
            <div className="hero">
                <div className="name"> {name} </div>
                <div className="profession">
                    {profession}
                </div>
                <div className="mail">
                    {email}
                </div>
                <div className="phone">
                    {phone}
                </div>
            </div>
            <div className="job">
                <div className="job">
                    {job}
                </div>
                <div className="enterprise">
                    { enterprise}
                </div>
            </div>
            <div className="scolarship">
                <div className="university">
                    {university}
                </div>
                <div className="grade">
                    { grade }
                </div>
            </div>
        </div>
        
    </> 
}
