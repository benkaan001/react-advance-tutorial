import React, { useState } from 'react';

// if statements are not allowed inside JXS curly braces inside a fragment. For example:

// return
//    <>
//   { if(something){console.log(something)} }   ===> Would throw a syntax error
//    </>

//That's why why heavily rely on other conditional operators.

const ShortCircuit = () => {
  const [text, setText] = useState('peter');
  // const [text, setText] = useState('');

  const [isError, setIsError] = useState(false);

  //********* SHORT CIRCUIT OPERATOR *******************//

  // while the useState is an empty string, the first value would return 'hello world'
  // because JS would evaluate the text to be FALSY since text is set to an empty value
  // However, the secondValue would return an empty string becaus of the && operator logic
  // --> if we pass in any value inside useState, then the firstValue would return that string
  // while the secondValue would return 'hello world'.

  // --> Again, for the && OPERATOR, if the text is truthy, then JS will display
  // <h1>hello world</h1>. Else, it will display nothing.

  // --> For the || OPERATOR, if the text is truthy, then JS will display the text value,
  // OR it will display the alternative text 'hello world'.

  //******************** TERNARY OPERATOR **********************//

  //  ---X---  ?  [DISPLAY THIS IF X IS TRUE]  :  [DISPLAY THIS IF X IS FALSE]

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'john doe'}</h1>
      {text && <h1>hello world</h1>}

      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {isError && <h1> Error...</h1>}
      {isError ? (
        <p>TRUE, there is an error</p>
      ) : (
        <h4>FALSE, there is no error!</h4>
      )}
    </>
  );
};

export default ShortCircuit;
