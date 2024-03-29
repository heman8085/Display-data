import React, { useState ,Fragment} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userData) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,userData];
    });
  };

  return (
     <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
