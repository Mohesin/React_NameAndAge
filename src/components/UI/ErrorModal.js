import React from 'react'
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
   
  return <div className={classes.backdrop} onClick={props.Close}>
  <Card className={classes.modal}>
    <header className={classes.header}>
        <h2 >
          {props.Title}
        </h2>
    </header>
    <div className={classes.content}>
        <p>
       {props.Message}
        </p>
    </div>
    <footer className={classes.actions}>
        <Button onClick={props.Close}>Okay</Button>
    </footer>
  </Card>
  </div> 
};

export default ErrorModal;
