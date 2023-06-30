import React from "react";

import Form from "./form";
import List from "./list";
import Header from "./header";

import nextId from "react-id-generator";
import {
  CardContent,
  Container,
  createMuiTheme,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { blue, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: teal,
    secondary: blue,
  },
});

class ToDoList extends React.Component {
  state = {
    latitude: null,
    errorMessage: null,
    taskList: [],
    task: "",
  };

  onChange = (event) => {
    this.setState({ task: event });
  };

  onSubmit = (e) => {
    // console.log("submit");
    e.preventDefault();
    if (this.state.task) {
      let genId = nextId();
      this.setState({
        taskList: [{ id: genId, task: this.state.task }, ...this.state.taskList],
      });
      this.setState({ task: "" });
    }
  };

  onSubmitEdit = (e, id) => {
      let updatedTaskList = this.state.taskList;
      updatedTaskList[id] = e;
      this.setState({ taskList: updatedTaskList });
  };

  onDelete = (id) => {
    const tasks = [...this.state.taskList];
    tasks.splice(id, 1);
    this.setState({ taskList: tasks });
  };

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Container maxWidth="md">
            <Paper elevation={3}>
              <Header title="To Do List" />
              <CardContent>
                <Form
                  onChange={this.onChange}
                  task={this.state.task}
                  onSubmit={this.onSubmit}
                />
                <List
                  onSubmitEdit={this.onSubmitEdit}
                  taskList={this.state.taskList}
                  onDelete={this.onDelete}
                />
              </CardContent>
            </Paper>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default ToDoList;
