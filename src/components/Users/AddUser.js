import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, SetError] = useState();

  const nameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (
      enteredUserAge.trim().length === 0 ||
      enteredUserName.trim().length === 0
    ) {
      SetError({
        Title :'Invalid Input',
        Message : 'Please enter a valid name and age'
      })
      return;
    }
    if (+enteredUserAge < 1) {
        SetError({
            Title :'Invalid Age',
            Message : 'Please enter a valid age (> 0)'
          })
          return;
    };

    props.onAddUser(enteredUserName,enteredUserAge)
    setEnteredUserAge("");
    setEnteredUserName("");
  };

  const errorHandler = ()=>{
    SetError(null);
  }

  return (<>
  {error && <ErrorModal Title={error.Title} Message={error.Message} Close={errorHandler}/>}
  <Card className={styles.input}>
    <form onSubmit={SubmitHandler}>
      <label htmlFor="username">UserName </label>
      <input
        id="username"
        value={enteredUserName}
        type="text"
        onChange={nameChangeHandler}
      ></input>
      <label htmlFor="age">Age </label>
      <input
        id="age"
        value={enteredUserAge}
        type="number"
        onChange={ageChangeHandler}
      ></input>
      <Button type="submit">Add User</Button>
    </form>
  </Card></>
    
  );
};

export default AddUser;
