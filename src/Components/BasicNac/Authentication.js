import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import AuthSuccess from "./AuthSuccess";
import AuthInput from "./AuthInput";

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

export default function Setup() {
  const classes = useStyles();

  const userInfo = useSelector((state) => state.userInfo);
  //获取reducer上的数据
  console.log(userInfo);

  return (
    <div className={classes.root}>
      {userInfo.uid === undefined ? (
        <AuthInput></AuthInput>
      ) : (
        <AuthSuccess></AuthSuccess>
      )}
    </div>
  );
}
