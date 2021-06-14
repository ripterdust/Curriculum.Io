import React from 'react'
import { useParams } from 'react-router-dom'

export const PdfMaker = () => {

    const params = useParams()
    console.log(params)
    return (
        <div>
            Creador de pdf
        </div>
    )
}
