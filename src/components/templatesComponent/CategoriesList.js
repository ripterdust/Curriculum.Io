import React from 'react'
import { data } from '../../data/data'
import { useFilter } from '../../hooks/useFilter'

export const CategoriesList = ({ category }) => {

    const [list] = useFilter({data, category});
    console.log(list)
    return (
        <div className='listTemplates'>
            <div className="cards">
                
            </div>
        </div>
    )
}
