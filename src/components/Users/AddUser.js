import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

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
      return;
    }
    if (+enteredUserAge < 1) return;

    console.log(enteredUserAge, enteredUserName);
    setEnteredUserAge("");
    setEnteredUserName("");
  };

  return (
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
    </Card>
  );
};

export default AddUser;
