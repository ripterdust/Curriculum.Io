import React from 'react'
import { data } from '../../data/data'
import { useFilter } from '../../hooks/useFilter'
import { Link } from 'react-router-dom'
export const CategoriesList = ({ category }) => {

    const [list] = useFilter({data, category});


    return (
        <div className='listTemplates'>
            <div className="cardList">
                {
                    list.map((el, i) => (
                        <Link to={`/app/${i}`} className="cardElem" key={i} >
                            <div className="img">
                                <div className="overlay">
                                    <div className="a" to={`/app/template/${el.id}`}>Use Template</div>
                                </div>
                                <img src={el.img} alt={`Tempalte of ${i}`} />
                            </div>
                            
                            <div className="text">
                                <div className="title">
                                    {el.title}
                                </div>
                                <div className="description">
                                    La descripción es: {el?.description}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
