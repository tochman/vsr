import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ReactComponent as Logo } from "../../assets/vsr_logo_black.svg";
import { Link } from "react-router-dom";

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
    },
    logo: {
      maxWidth: 40,
      marginRight: "10px",
    },
    circleBackground: {
      position: "absolute",
      top: 5,
      height: 107 + "px",
      width: 107 + "px",
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
      marginLeft: 3,
    },
  })
);
const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <div className={classes.circleBackground}>
                <Logo className={classes.circle} />
              </div>
            </Link>
          </Typography>

          <Button
            color="inherit"
            component={() => <Link to="/agenda">Agenda</Link>}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
