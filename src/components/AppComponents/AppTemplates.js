import React from 'react'
import { data } from '../../data/data';
import { useFilter } from '../../hooks/useFilter';
import { ResumeItem } from './ResumeItem';



export const AppTemplates = () => {


    const [list] = useFilter({data})


    return <div className="carousel">
        
    </div>
}
