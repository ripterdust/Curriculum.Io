import React from 'react'
import { data } from '../../data/data';
import { useFilter } from '../../hooks/useFilter';
import { ResumeItem } from './ResumeItem';



export const AppTemplates = () => {


    const [list] = useFilter({data})

    let slideIndex = 1;

    return <div className="carousel">
        {
            list.map((el, i) => <div className="card" key={i} >
                <ResumeItem data={el} />
            </div> )
        }

        <button className="prev">&#10094;</button>
        <button className="next" >&#10095;</button>

    </div>
}
