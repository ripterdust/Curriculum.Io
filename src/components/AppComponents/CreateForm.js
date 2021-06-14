import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const CreateForm = () => {

    const {id} = useParams()

    const [data, setData] = useState({

        name: '',
        lastName: '',
        description: ''
    });


    const handleName = (e) => {
        setData(state => ({...state, name:e.target.value}))
    }
    const handleLastName = (e) => {
        setData(state => ({...state, lastName:e.target.value}))
    }
    const handleDescription = (e) => {
        setData(state => ({...state, description:e.target.value}))
    }


    return (
        <div>
            Acá irá el formulario
        </div>
    )
}
