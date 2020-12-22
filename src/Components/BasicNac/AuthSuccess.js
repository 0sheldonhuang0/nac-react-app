import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useSelector,useDispatch } from "react-redux";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
require("firebase/auth");

// Initiale
const useStyles = makeStyles(() => ({
  buttonArea: {
    margin: "0 10px 10px 10px",
  },
  root: {
    flexGrow: 1,
    display: "flex",
  },
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  formLabel: {
    padding: "0 0 10px 0",
    textAlign: "left",
  },
  inputEmpty: {
    margin: "0 0 15px 0",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}));

export default function AuthSuccess() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const storeSuccessedData = (uploadData) => {
    dispatch({
      type: "ADD_UPLOADSUCCESS",
      successedData: uploadData,
    });
  };
  const userInfo = useSelector((state) => state.userInfo);
  //获取reducer上的数据

  // 注销
  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("大概注销了！");
        console.log(userInfo);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
      });
  }

  return (
    <div className={classes.root}>
                 {storeSuccessedData(true)}
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <Typography>已登陆成功</Typography>
            <Button
              color="primary"
              onClick={() => {
                signOut();
              }}
            >
              Déconnexion
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
