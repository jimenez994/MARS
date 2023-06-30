import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar color="primary">
        <Typography
          variant="h5"
          align="center"
          component="h2"
          color="inherit"
          noWrap
        >
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
