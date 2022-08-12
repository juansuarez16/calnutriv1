import React from 'react'
import { FcRules } from "react-icons/fc";
import { Paper ,Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
import NavbarForm from '../../components/navbarForm';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
  
const HomeForm = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
     <NavbarForm/>
      <Container>          
          <Outlet/>
      </Container>
  </div>
  )
}

export default HomeForm