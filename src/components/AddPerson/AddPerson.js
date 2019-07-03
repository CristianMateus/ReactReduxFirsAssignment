import React, { useState } from 'react';

import './AddPerson.css';

const addPerson = (props) => {
    const [personsState, setPersonsState] = useState({
        name: "",
        age: null
    })

    const onNameChanged = (event) => {
        setPersonsState({
            name: event.target.value,
            age: personsState.age
        })
    }
    const onAgeChanged = (event) => {
        setPersonsState({
            name: personsState.name,
            age: event.target.value
        })
    }

	return (
		<div className="AddPerson">
			<input type="text" placeholder="Name" value={personsState.name} onChange={(event) => onNameChanged(event)}/>
			<input type="text" placeholder="Age" value={personsState.age} onChange={(event) => onAgeChanged(event)}/>
			<button onClick={() => props.personAdded(personsState.name, personsState.age)}>Add Person</button>
		</div>
	);
};

export default addPerson;
