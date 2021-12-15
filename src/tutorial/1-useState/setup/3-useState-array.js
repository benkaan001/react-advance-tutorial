import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removePerson = (id) => {
    let leftovers = people.filter((person) => person.id !== id);
    setPeople(leftovers);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Delete</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Delete Everyone
      </button>
    </>
  );
};

export default UseStateArray;
