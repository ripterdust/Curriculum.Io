import React from 'react'
import { useParams } from 'react-router-dom'

export const Body = (props) => {

    const params = useParams();
    console.log(params)


    return (
        <div>
            Your location is: { params.category }
        </div>
    )
}
