import React from 'react';
import { data } from '../../../data';

// we will refactor using the functional approach

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  // ----->  notice instead of passing the leftovers value directly into setPeople,
  // we are passing a callback function that returns the leftovers value after
  // it filters through the oldPeople value.

  // ------>  ****** remember to RETURN some value from this function, otherwise
  // we will get an error becasue that would set the people value to undefinied!****/

  const removePerson = (id) => {
    setPeople((oldPeople) => {
      let leftovers = oldPeople.filter((person) => person.id !== id);
      return leftovers;
    });
  };

  // const removePerson = (id) => {
  //   let leftovers = people.filter((person) => person.id !== id);
  //   setPeople(leftovers);
  // };
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
