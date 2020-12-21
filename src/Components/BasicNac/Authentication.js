import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
require('firebase/auth')

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

export default function Setup() {
  // 注册用户
  // 文档在此：https://firebase.google.com/docs/auth/web/start?authuser=0
  function signUpWithEmailPasswoerd(email,password) {
    // var email = "test@example.com";
    // var password = "hunter2";
    // [START auth_signup_password]
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        console.log(user)
        alert("大概注册成功了！");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        alert("遇到了一些错误！");
      });
    // [END auth_signup_password]
  }

  // 登录
  function signInWithEmailPassword(email,password) {
    // var email = "test@example.com";
    // var password = "hunter2";
    // [START auth_signin_password]
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        console.log(user)
        alert("大概登录成功了！");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        alert("遇到了一些错误！");
      });
    // [END auth_signin_password]
  }

  function signInOrNot(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
      } else {
        // No user is signed in.
        console.log("NOOOOOOOOO")
      }
    });
  }

  const classes = useStyles();
  const [format, setFormat] = React.useState({
    format: "Pdf16",
    font: "fontFz",
    fontSizeA: "fontMiddle",
    fontSizeB: "fontMiddle",
    cardNum: true,
  });
  //format是原始数据，为array；setFormat用于更新format

  // 用 useDispatch 產生 dispatch Value方法，dispatch用来给reducer送数据
  const dispatch = useDispatch();
  const storeFormat = (format) => {
    // 用法一樣
    dispatch({
      type: "ADD_FORMAT",
      format: format,
    });
  };

  const handleChangeFormat = (event) => {
    format.format = event.target.value;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  const handleChangeFont = (event) => {
    format.font = event.target.value;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  const handleChangeFontSizeA = (event) => {
    format.fontSizeA = event.target.value;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  const handleChangeFontSizeB = (event) => {
    format.fontSizeB = event.target.value;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  const handleChangeCardNum = (event) => {
    format.cardNum = event.target.checked;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <FormLabel component="legend" className={classes.formLabel}>
              Veuillez entrer votre email
            </FormLabel>
            <TextField
              id="standard-email"
              label="Votre mail"
              type = "email"
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
              type = "password"
              className={classes.inputEmpty}
            />
          </Grid>
        </Grid>
        <Box textAlign="center">
          <Button
            variant="contained"
            className={classes.buttonArea}
            onClick={() => {
              var email = document.getElementById("standard-email").value
              var password = document.getElementById("standard-password").value
              signUpWithEmailPasswoerd(email,password);
            }}
          >
            CRÉER UN COMPTE
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonArea}
            onClick={() => {
              var email = document.getElementById("standard-email").value
              var password = document.getElementById("standard-password").value
              signInWithEmailPassword(email,password);
            }}
          >
            SE CONNECTER
          </Button>
        </Box>
      </Container>
    </div>
  );
}
