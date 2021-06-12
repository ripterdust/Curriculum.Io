import React from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesList } from './CategoriesList';
import { HeroCategories } from './HeroCategories';
import { TemplatesNav } from './TemplatesNav';

export const Body = (props) => {

    const { category } = useParams();
    
    return (
        <div>
            <HeroCategories category={category} />
            <TemplatesNav />
            <CategoriesList category={category} />
        </div>
    )
}
