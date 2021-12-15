import React from 'react'

// though our console logs 'Updated title', the title inside our h2 does not update.
// It is because we are not RE-rendering our component

// This is where useState comes into play

const ErrorExample = () => {
  let title = 'Say Yes to React!'
  const handleClick = () => {
    title = 'Updated title!'
    console.log(title)
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
