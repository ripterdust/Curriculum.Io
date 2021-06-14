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
        lastName: '',
        description: ''
    });

    // Change state 
    const handleInputs = (e) => {
        setData(state => ({...state, [ e.target.name ]: e.target.value}))
    }

    // Send data
    const sendData = () => {
        console.log(data)
    }
    return (
        <div>
            <input type="text" name='name' onChange={handleInputs} />
            <input type="text" name='lastName' onChange={handleInputs} />
            <input type="text" name='description' onChange={handleInputs} />
            <button onClick={sendData}>Send Data</button>
        </div>
    )
}
