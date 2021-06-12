import React from 'react'
import { data } from '../../data/data'
import { useFilter } from '../../hooks/useFilter'

export const CategoriesList = ({ category }) => {

    const [list] = useFilter({data, category});


    return (
        <div className='listTemplates'>
            <div className="cardList">
                {
                    list.map((el, i) => (
                        <div className="cardElem" key={i} >
                            <img src={el.img} alt={`Tempalte of ${i}`} />
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
