import React from 'react'
import { data } from '../../data/data'
import { useFilter } from '../../hooks/useFilter'

export const CategoriesList = ({ category }) => {

    const [list] = useFilter({data, category});


    return (
        <div className='listTemplates'>
            <div className="cards ">
                {
                    list.map((el, i) => (
                        <div className="card animate__animated animate__fadeIn" key={i} >
                            <img src={el.img} alt={`Tempalte of ${el.title}`} />
                            <div className="text">
                                <div className="title">
                                    {el.title}
                                </div>
                                <div className="description">
                                    {el?.description}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
