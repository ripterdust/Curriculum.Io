import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const CreateForm = () => {

    const {id} = useParams()

    const [data, setData] = useState({
        id,
        name: '',
        lastName: '',
        description: ''
    });

    const handleInputs = (e) => {
        setData(state => ({...state, [ e.target.name ]: e.target.value}))
  
    }

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
