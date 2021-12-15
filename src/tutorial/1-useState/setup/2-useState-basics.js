import React, { useState } from 'react'

// console.log(useState()) will log an array [undefinied, function]
// when we invoke useState() we need to pass in a value 'getter' - string, array, object ,etc
// and a function 'setter'

// --> hooks start with 'use...'
// --> component name (UseStateBasics) must be UPPERCASE or we will get an error
// --> the hook needs to be placed/invoked INSIDE the function or the component body
// const[text, setText] = useState(...) would throw `invalid hook call` error
// --> Hooks cannot be invoked conditionally

const UseStateBasics = () => {
  // console.log(useState('Yes!')) // ['Yes!', f]
  // const getter = useState(1)[0]
  // console.log(getter) //  1
  // const setter = useState(1)[1]
  // console.log(setter) // f

  const [text, setText] = useState('Say Yes to React!')

  const handleClick = () => {
    // setText('Updated Title')
    if (text === 'Say Yes to React!') {
      setText('Updated Title')
    } else {
      setText('Say Yes to React!')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
