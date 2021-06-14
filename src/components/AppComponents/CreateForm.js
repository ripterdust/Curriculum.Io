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
                    <span className="sectionTitle">Personal data</span>
                    {/* Name information */}
                    <div className="inputDiv">
                        <span className="title">Full Name: </span>
                        <input 
                        type="text" 
                        name='name' 
                        onChange={handleInputs} 
                        placeholder="Full name" required />
                    </div>
                    {/* Profession */}
                    <div className="inputDiv">
                        <span className="title">Profession:</span>
                        <input type="text" 
                        name='profession' 
                        onChange={handleInputs} 
                        placeholder="Profession" required />
                    </div>

                    {/* Contact Data */}
                    <div className="inputDiv">
                        <span className="title">E-mail:</span>
                        <input 
                        type="email"  
                        name='email'
                        placeholder="E-mail"
                        required/>
                    </div>

                    {/* Phone */}
                    <div className="inputDiv">
                        <span className="title">Phone number:</span>
                        <input 
                        type="text" 
                        name='phone' 
                        placeholder="Phone"
                        required/>
                    </div>

                </div>
                <div className="workInfo">
                    <span className="sectionTitle">Laboral data</span>

                    <div className="inputDiv">
                        <span className="title">Enterprise:</span>
                        <input type="text" 
                        name='Enterprise' 
                        placeholder="Enterprise" 
                        required/>
                    </div>
                    <div className="inputDiv">
                        <span className="title">Job Title:</span>
                        <input type="text" 
                        name='jobTitle'
                        placeholder="Job Title"
                        required
                        />
                    </div>
                </div>

                <div className="scolarship">
                    <span className="sectionTitle">Scolarship</span>
                    <div className="inputDiv">
                        <span className="title">University: </span>
                        <input type="text" 
                        name='university' 
                        placeholder="University name" 
                        required/>
                    </div>
                    <div className="inputDiv">
                        <span className="title">Carrer:</span>
                        <input type="text" 
                        name='grade' 
                        placeholder="Grade" 
                        required/>
                    </div>
                
                </div>
                <input type="submit" className="sendBtn" value="Create" />
            </div>
    </form>
    )
}
