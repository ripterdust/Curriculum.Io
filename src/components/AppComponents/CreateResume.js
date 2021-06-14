import React from 'react'
import { useParams } from 'react-router-dom'
import { TemplateContext } from '../../hooks/templateContext';
import { templates } from '../../data/templatesData';

export const CreateResume = () => {

    // Requiring id in params.
    const { id } = useParams();
    let template;
    for (let i = 0; i < templates.length; i++) {
        
        if(templates[i].id === parseInt(id)){
            template = templates[i];
            break
        }
        
    }
    
    
    return (
        <TemplateContext.Provider value={template}>
            { template.id }
        </TemplateContext.Provider>
    )
}
