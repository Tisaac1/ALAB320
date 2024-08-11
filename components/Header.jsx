// import React from 'react';
import Header from '../Header.jsx';

function EmployeeList() {
  const username = 'Meg Stallion '; 

  return (
    <div>
      <Header />
      <ul>
        <li>Username: {username}</li>
      </ul>
    </div>
  );
}

export default EmployeeList;