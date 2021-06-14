import React, {  useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export const Username = () => {

    const history = useHistory()
    const { id } = useParams()


    const [data, setData] = useState({
        name: '',
        lastName: '',
        description: ''
    })

    const handleName = (e) => {
        setData(state => ({...state, name:e.target.value}))
    }
    const handleLastName = (e) => {
        setData(state => ({...state, lastName:e.target.value}))
    }
    const handleDescription = (e) => {
        setData(state => ({...state, description:e.target.value}))
    }

    const handleForm = () => {
        
        history.push(`/app/${id}/carrer`);
    }

    return <div className="data">

        <div className="text">
            <div className="title" >
                Insert your data.
            </div>
            <div className="subTitle" >
                All this information will appear on your resume.
            </div>
        </div>

    </div>

}
