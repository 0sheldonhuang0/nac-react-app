import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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

export default function AuthInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const storeSuccessedData = (uploadData) => {
    dispatch({
      type: "ADD_UPLOADSUCCESS",
      successedData: uploadData,
    });
  };

  // 注册用户
  // 文档在此：https://firebase.google.com/docs/auth/web/start?authuser=0
  function signUpWithEmailPassword(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        console.log(user);
        alert("大概注册成功了！");
        storeSuccessedData(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert("遇到了一些错误！");
      });
  }

  // 登录
  function signInWithEmailPassword(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        console.log(user);
        alert("大概登录成功了！");
        storeSuccessedData(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert("遇到了一些错误！");
      });
  }

  return (
    <div className={classes.root}>
         {storeSuccessedData(false)}
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12} className={classes.paper}>
              <FormLabel component="legend" className={classes.formLabel}>
                Veuillez entrer votre email
              </FormLabel>
              <TextField
                id="standard-email"
                label="Votre mail"
                type="email"
                className={classes.inputEmpty}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12} className={classes.paper}>
              <FormLabel component="legend" className={classes.formLabel}>
                Veuillez entrer mot de passe
              </FormLabel>
              <TextField
                id="standard-password"
                label="Votre mot de passe"
                type="password"
                className={classes.inputEmpty}
              />
            </Grid>
          </Grid>
          <Box textAlign="center">
            <Button
              variant="contained"
              className={classes.buttonArea}
              onClick={() => {
                var email = document.getElementById("standard-email").value;
                var password = document.getElementById("standard-password")
                  .value;
                signUpWithEmailPassword(email, password);
              }}
            >
              CRÉER UN COMPTE
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonArea}
              onClick={() => {
                var email = document.getElementById("standard-email").value;
                var password = document.getElementById("standard-password")
                  .value;
                signInWithEmailPassword(email, password);
              }}
            >
              SE CONNECTER
            </Button>
          </Box>
        </Container> 
    </div>
  );
}
