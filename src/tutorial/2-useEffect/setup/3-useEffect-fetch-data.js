import React, { useState, useEffect } from 'react';

// useEffect cannot return a promise. That is why the callback for useEffect cannot be
// async/await. However, we can place an async/await into the function body of the useEffect's
// callback either directly or indirectly as we did below.

// AGAIN, whenever we are invoking a function that is insdie useEffect and that is resulting in
// re-rendering, we must make sure pass in the empty dependency array [] as our second parameter
// in the useEffect to avoid an infinite loop of re-rendering and crashing our browser.

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>GitHub Users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
