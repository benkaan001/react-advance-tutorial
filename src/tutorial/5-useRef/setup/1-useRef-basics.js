import React, { useEffect, useRef } from 'react';

// ---> just like useState, useRef too preserves the values in the state, BUT unlike useState, useRef does
// not trigger re-render.

// ---> most commonly it is used to target the DOM nodes/elements

// ---> we need to place the useRef hook in a const and assign a default value. in this case our default is null. Then we need to set this const to an attribute that we choose. In this case we are using ref in the input
// element. We can add this ref attribute to any of the html elements.

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value); // will log the value in the input that user submitted on the form
    console.log(divContainer.current); // will log <div>hello there</div>
    console.log(divContainer.current.value); // will log undefined because there is no value to reference to
  };

  return (
    <>
      {' '}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello there</div>
    </>
  );
};

export default UseRefBasics;
