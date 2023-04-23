import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const adduserhandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge , id: Math.random().toString }];
    });
  };

    return (
      <>
        <AddUser onAddUser={adduserhandler} />
        <UsersList users={usersList} />
      </>
    );
  };


export default App;
