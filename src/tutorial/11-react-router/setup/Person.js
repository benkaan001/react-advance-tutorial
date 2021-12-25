import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

// ---> because the id is a number and in our object the person id is a string, we always need to convert it
// to a string.
const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        {' '}
        Back to People
      </Link>
    </div>
  );
};

export default Person;
