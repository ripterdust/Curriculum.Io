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
    const handleSumbit = (e) => {
        e.preventDefault();
        // Destructuriying state
        let { id, name, profession} = data;

        // Sending data as params
        history.push(`/pdf/${id}/${name}/${profession}`);

    }

    return (<form onSubmit={handleSumbit} action='/'>
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



            </div>
            <div className="workInfo">

            </div>


            <input type="submit" value="Send data" />
    </form>
    )
}
