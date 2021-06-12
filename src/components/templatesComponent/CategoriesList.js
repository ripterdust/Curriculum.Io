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
                        <div className="cardElem" key={i} >
                            <div className="img">
                            <div className="overlay">
                                <Link to="/app/:id">Use Template</Link>
                            </div>
                                <img src='https://s3.resume.io/uploads/local_template_image/image/147/persistent-resource/madrid-resume-templates.jpg' alt={`Tempalte of ${i}`} />
                            </div>
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
