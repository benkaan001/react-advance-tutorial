import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'ben',
    age: 36,
    message: 'hi mom!',
  });
  // ****** OPTION2**************** WE CAN SET UP MULTIPLE STATE VALUES
  // const [name, setName] = useState('ben');
  // const [age, setAge] = useState(36);
  // const [message, setMessage] = useState('updated message');

  const changeMessage = () => {
    // ----> if we invoke the setFunction with only 'hello world' string argument,
    // this will wipe out our person object and will only return 'hello world'.
    // setPerson('hello world')
    // ---->  setPerson({ message: 'hellow world'}) would wipe out the name and
    // age properties of the object as well
    setPerson({ ...person, message: 'updated message' });
    // ****** OPTION 2*****************
    // setMessage('Updated Message')
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
      {/* ******* OPTION 2 **********
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{message}</h3> */}
    </>
  );
};

export default UseStateObject;
