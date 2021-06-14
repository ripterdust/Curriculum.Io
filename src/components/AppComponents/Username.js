import React, {  useState } from 'react'
import { useParams } from 'react-router-dom'
import { CreateForm } from './CreateForm'
import { CreateTitle } from './CreateTitle'

export const Username = () => {

    const { id } = useParams()


    
    

    return <div className="data">

        <CreateTitle />

        <CreateForm />

    </div>

}
