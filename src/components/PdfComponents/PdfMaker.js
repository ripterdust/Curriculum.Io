import React from 'react'
import { useParams } from 'react-router-dom'
import { PdfTemplate } from './PdfTemplate'

export const PdfMaker = () => {

    const params = useParams()
    
    return <>
        <PdfTemplate data={params} />
    </> 
    
}
