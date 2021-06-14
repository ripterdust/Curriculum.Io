import React from 'react'
import { useParams } from 'react-router-dom'

export const CreateResume = () => {
    console.log('Create resume')

    // Requiring id in params.
    const { id } = useParams();

    console.log(id)
    return (
        <div>
            Create resume
        </div>
    )
}
