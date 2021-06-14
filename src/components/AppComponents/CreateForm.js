import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export const CreateForm = () => {

    // React-router-dom hooks
    const {id} = useParams();
    const history = useHistory();

    // UseState
    const [data, setData] = useState({
        id: id,
        name: '',
        profession: ''
    });

    // Change state 
    const handleInputs = (e) => {
        setData(state => ({...state, [ e.target.name ]: e.target.value}))
    }

    // Send data
    const sendData = () => {
        let { id, name, profession} = data;
        history.push(`/pdf/${id}/${name}/${profession}`)
    }
    return (
        <div>
            <div className="personalData">
                {/* Name information */}
                <input 
                type="text" 
                name='name' 
                onChange={handleInputs} 
                placeholder="Full name" />
                {/* Profession */}
                <input type="text" 
                name='profession' 
                onChange={handleInputs} 
                placeholder="Profession" />


                {/* Send data information */}
                <button onClick={sendData}>Send Data</button>
            </div>
            <div className="workInfo">

            </div>
        </div>
    )
}
