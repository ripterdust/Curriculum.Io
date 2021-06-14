import React from 'react'
import { useParams } from 'react-router-dom'
import { TemplateContext } from '../../hooks/templateContext';
export const CreateResume = () => {
    console.log('Create resume')

    // Requiring id in params.
    const { id } = useParams();

    const user = {
        id: 123,
        name: 'Bryan'
    }
    
    return (
        <TemplateContext.Provider value={user}>
            Acá irá toda la info
        </TemplateContext.Provider>
    )
}
