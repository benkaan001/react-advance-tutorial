import React, { useState, useEffect } from 'react';

// ---> CLEANUP FUNCTION: To prevent memory leak in a larger-scale application, it is important
// to set up a cleanup function inside the useEffect.

// ---> SECOND ARGUMENT: Alternatively, we can always pass in an empty dependency array as
// second argument to prevent potential mess that comes with re-rendering too much.More to come...

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('clean up');
      window.removeEventListener('resize', checkSize);
    };
  });
  console.log('render');

  return (
    <>
      <h1>window</h1>
      <h2>{size}PX</h2>
    </>
  );
};

export default UseEffectCleanup;
