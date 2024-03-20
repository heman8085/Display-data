import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //  const nameInputRef = useRef();
  //  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredCollegename, setEnteredCollegname] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // const enteredName = nameInputRef.current.value;
    // const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredCollegename.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username, age and college name (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const userData = {
      name: enteredUsername,
      age: enteredAge,
      collegename: enteredCollegename,
    };
    props.onAddUser(userData);
    //clear input fields
    setEnteredUsername("");
    setEnteredAge("");
    setEnteredCollegname("");
    //nameInputRef.current.value = ' ';
    //ageInputRef.current.value = ' ';
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const collegenameChangeHandler = (event) => {
    setEnteredCollegname(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            //ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            //ref={ageInputRef}
          />
          <label htmlFor="collagename">College name</label>
          <input
            id="collegename"
            type="text"
            value={enteredCollegename}
            onChange={collegenameChangeHandler}
            //ref={collegenameInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
