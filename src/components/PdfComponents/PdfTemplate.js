import React, { createRef } from 'react'
import Pdf from 'react-to-pdf';

// Styles
import './templateStyles.css';

export const PdfTemplate = ({ data }) => {

    const ref = createRef();

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

    // Pdf options

    const options = {
        orientation: 'portrait',
        unit: 'in'
    }

    // Creating template
    return <>
        <div className={`template${id} pdf`} ref={ref}>
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
        <Pdf targetRef={ref} filename={`Resume_of_${name}`} options={options} >
            {
                ({toPdf}) => <button onClick={toPdf} className="btnPdf">Capture as PDF</button>
            }
        </Pdf>
    </> 
}
