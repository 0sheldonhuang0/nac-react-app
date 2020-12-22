import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux"; //新版里导入useDispatch和useSeletor
// import makeTxtFile3 from "../../images/makeTxtFile3.jpg";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
require("firebase/auth");

const useStyles = makeStyles(() => ({
  printHelperArea: {
    padding: "20px",
  },
  textStyle: {
    margin: "10px",
    textIndent: "25px",
    lineHeight: "30px",
  },
  titleStyle: {
    margin: "10px",
  },
  imageStyle: {
    margin: "20px",
    width: "80%",
  },
}));

export default function Welcome() {
  const classes = useStyles();

  const [userInfo, setUserInfo] = React.useState({
    name: undefined,
    email: undefined,
    uid: undefined,
  });

  const dispatch = useDispatch();
  const storeSuccessedData = (uploadData) => {
    dispatch({
      type: "ADD_UPLOADSUCCESS",
      successedData: uploadData,
    });
  };
  const storeUserInfo = (userInfo) => {
    dispatch({
      type: "ADD_USERINFO",
      userInfo: userInfo,
    });
  };

  useEffect(() => {
    setUserInfo({ ...userInfo });
  }, []);
  // useEffect在组件mount时执行，但也会在组件更新时执行。
  // 因为我们在每次请求数据之后都会设置本地的状态，所以组件会更新，
  // 因此useEffect会再次执行，因此出现了无限循环的情况。
  // 我们只想在组件mount时请求数据。我们可以传递一个空数组作为useEffect的第二个参数，
  // 这样就能避免在组件更新执行useEffect，只会在组件mount时执行。

  const handleGetUserInfo = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        userInfo.name = user.providerData[0].displayName;
        userInfo.email = user.providerData[0].email;
        userInfo.uid = user.providerData[0].uid;
        storeUserInfo(userInfo);
        console.log(userInfo)
      } else {
        userInfo.name = undefined;
        userInfo.email = undefined;
        userInfo.uid = undefined;
        storeUserInfo(userInfo);
        console.log("Aucun utilisateur n'est connecté.");
      }
    });
  };

  return (
    <React.Fragment>
      <div>
      {handleGetUserInfo()}
      {console.log(userInfo)}
        <Container maxWidth="lg" className={classes.printHelperArea}>
        </Container>
        {storeSuccessedData(true)}
      </div>
    </React.Fragment>
  );
}
