import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const adduserhandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [ { name: userName, age: userAge , id: Math.random().toString() },...prevUserList];
    });
  };

  const onDeleteUser = (ID)=>{
   setUsersList((prevUserList)=>{
    const oldUserList = prevUserList.filter(user=>user.id !== ID)
    return oldUserList;
   })
  }

    return (
      <>
        <AddUser onAddUser={adduserhandler} />
        <UsersList deleteUser={onDeleteUser} users={usersList} />
      </>
    );
  };


export default App;
