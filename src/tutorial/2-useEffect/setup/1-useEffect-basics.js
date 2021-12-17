import React, { useState, useEffect } from 'react';

// --->   We use useEffect when we want to create a SIDE EFFECT, which is
// work/functionality outside components such as data fetching, even listening, etc

// --->   by default useEffect hook runs(the callback is invoked) after every re-render

// cleanup function

// --->  SECOND PARAMETER: if we only want the useEffect to create a side effect on
// the first render only, then we can pass an empty array [] as an arguemnt. This
// secon parameter represents the array of dependencies. In our example, because of our logic to
// update title only after the value goes up to 2, our document.title will never get a chance to update.
// ON THE OTHER HAND, if we pass in a value into the second argument/into the dependency array
// every time that value changes, it will invoke the callback function of the useEffect.
// i.e. if we pass [value], every time our value updates, the useEffect will re-render

// ---> There is NO LIMIT on the number of useEffect functions that we would like to run

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // we cannot call hooks conditionally. Putting the if statemet below here would result
  // in an error. The work around it is placing the if statement inside the hook like this

  useEffect(() => {
    console.log('call useEffect');
    if (value > 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log(
      'I am the second use effect, but I run only once coz of the empty array argument that you passed into me!'
    );
  }, []);
  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
