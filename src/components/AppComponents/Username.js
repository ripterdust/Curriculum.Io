import React, {  useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export const Username = () => {

    const history = useHistory()
    const { id } = useParams()


    const [data, setData] = useState({
        name: '',
        lastName: ''
    })

    const handleName = (e) => {
        setData(state => ({...state, name:e.target.value}))
    }
    const handleLastName = (e) => {
        setData(state => ({...state, lastName:e.target.value}))
    }

    const handleForm = () => {
        
        history.push(`/app/${id}/career`);
    }

    return <div className="form" >
        <div className="name">
            <span>Name</span>
            <input type="text" value={data.name} 
            placeholder={data.name}
            onChange={handleName}
            />
        </div>
        <div className="lastName">
            <span>LastName</span>
            <input type="text" value={data.lastName} 
            placeholder={data.lastName}
            onChange={handleLastName}
            />
        </div>
        
        <button onClick={handleForm}></button>

    </div>

}
