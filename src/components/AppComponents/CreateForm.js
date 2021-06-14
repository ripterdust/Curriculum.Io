import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const CreateForm = () => {

    // React-router-dom hooks
    const {id} = useParams();
    const history = useHistory();
    // UseState
    const [data, setData] = useState({id: id});

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

    return (<form onSubmit={handleSumbit} onChange={handleInputs} action='/'>
            <div className="inputs">
                <div className="personalData">
                    <span>Personal data</span>
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
                    <span>Laboral data</span>
                    <input type="text" 
                    name='Enterprise' 
                    placeholder="Enterprise" 
                    required/>
                    <input type="text" 
                    name='jobTitle'
                    placeholder="Job Title"
                    required
                    />
                </div>

                <div className="scolarship">
                <span>Scolarship</span>
                |<input type="text" 
                    name='university' 
                    placeholder="University name" 
                    required/>
                    <input type="text" 
                    name='jobTitle'
                    placeholder="Job Title"
                    required
                    />
                    <input type="text" 
                    name='grade' 
                    placeholder="Grade" 
                    required/>
                    <input type="text" 
                    name='jobTitle'
                    placeholder="Job Title"
                    required
                    />
                </div>

            </div>


            <input type="submit" value="Send data" />
    </form>
    )
}
