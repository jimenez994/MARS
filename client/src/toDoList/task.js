import { Typography, Icon, Button, Box, Grid } from "@material-ui/core";
import React from "react";
import Edit from "./edit";

class Task extends React.Component {
  state = {
    show: false,
    toggleOpt: false,
  };

  showEdit = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    let editForm;
    let deleteButton;
    if (this.state.show) {
      editForm = (
        <Edit
          hideEdit={this.showEdit}
          onSubmitEdit={this.props.onSubmitEdit}
          taskObj={this.props.taskObj}
        />
      );
      deleteButton = (
        <Button onClick={() => this.props.onDelete(this.props.taskId)}>
          <Icon>delete</Icon>
        </Button>
      );
    } else {
      editForm = (
        <Button style={{ textTransform: "unset" }}>
          <Typography variant="h5">{this.props.taskObj.task} </Typography>
        </Button>
      );
    }
    return (
      <React.Fragment>
        <Box mb={2}>
          <Grid container justify="space-between">
            <Grid item xs={8}>
              {editForm}
            </Grid>
            <Grid item>
              <Button onClick={this.showEdit}>
                <Icon>edit</Icon>
              </Button>
              {deleteButton}
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}

export default Task;
