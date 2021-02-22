// import the react and reactDom libraries
import React from "react";
// import React, { useState } from "react";
import { TextField, Button, Icon, Box } from "@material-ui/core";

function date() {
  return new Date().toDateString().toString();
  // return "yes"
}

// Create a react component
const Form = (props) => {
  let { onSubmit, task, onChange } = props;
  let addButton;
  if (task) {
    addButton = (
      <Button type="submit">
        <Icon color="primary">add_circle</Icon>
      </Button>
    );
  }

  return (
    <Box mb={3}>
      <p>{date()}</p>
      <form onSubmit={onSubmit}>
        <TextField
          id="task"
          type="text"
          value={task}
          onChange={(e) => onChange(e.target.value)}
        />
        {addButton}
      </form>
    </Box>
  );
};

export default Form;
