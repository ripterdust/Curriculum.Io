import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const CreateForm = () => {

    // React-router-dom hooks
    const {id} = useParams();
    const history = useHistory();

    // UseState
    const [data, setData] = useState({id});

    // Change state 
    const handleInputs = (e) => {
        setData(state => ({...state, [ e.target.name ]: e.target.value}))
    }

    // Send data
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(data)
        // Destructuriying state
        let { id, name, profession} = data;

        // Sending data as params
        history.push(`/pdf/${id}/${name}/${profession}`);

    }

    return (<form onSubmit={handleSumbit} onChange={handleInputs} action='/'>
            <div className="personalData">
                {/* Name information */}
                <input 
                type="text" 
                name='name' 
                onChange={handleInputs} 
                placeholder="Full name" required />
                {/* Profession */}
                <input type="text" 
                name='profession' 
                onChange={handleInputs} 
                placeholder="Profession" required />

                {/* Contact Data */}
                <input 
                type="email"  
                name='email'
                placeholder="E-mail"
                required/>

                {/* Phone */}
                <input 
                type="text" 
                name='phone' 
                placeholder="Phone"
                required/>

            </div>
            <div className="workInfo">

            </div>

            <div className="scolarship">

            </div>


            <input type="submit" value="Send data" />
    </form>
    )
}
