import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ReactComponent as Logo } from "../../assets/vsr_logo_black.svg";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 4,
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
    logo: {
      maxWidth: 40,
      marginRight: "10px",
    },
    circleBackground: {
      position: "absolute",
      top: 5,
      height: 106 + "px",
      width: 106 + "px",
      backgroundColor: "#2e3b55",
      borderRadius: 50 + "%",
      display: "inline",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    },
    circle: {
      fill: "none",
      stroke: "#bbb",
      strokeMiterlimit: 10,
      width: 100,
      marginTop: 3,
    },
  })
);
const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div className={classes.circleBackground}>
              <Logo className={classes.circle} />
            </div>
          </Typography>

          <Button color="inherit">Agenda</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;