import React, { useState } from 'react';

// We can also place the event listern on the button as onClick={handleSubmit}

// --> VALUE in INPUT: we need to have a value property in the input that
// references the stateValue

// --> onChange EVENT LISTENER that takes in the event as an argument
// (we are referencing the event in the form handler wthere it is onClick
// or onSubmit)
// and changes the state value to whatever value is passed into the input (e.target.value).

// ES6 syntax enable us to avoid repeating names in the key/value pair has
// the same name as in ---> const person ={firstName: firstName, email:email};

// ---> setPeople[...people, person] would be the alternative if we don't want to
// go with the functional route below - setPeople((person) =>{ return [...people], person})

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      console.log('submit the form');
      const person = { firstName, email, id: new Date().getTime().toString() };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
