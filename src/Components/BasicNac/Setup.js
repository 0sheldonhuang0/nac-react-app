import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from '@material-ui/core/TextField';
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
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
            <TextField id="standard-basic" label="Votre mail" className={classes.inputEmpty}/>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <FormLabel component="legend" className={classes.formLabel}>
              Veuillez entrer le code de couplage
            </FormLabel>
            <TextField id="standard-basic" label="Votre code dans le logiciel" className={classes.inputEmpty}/>
          </Grid>
          <Grid item xs={12} md={5} lg={5} className={classes.paper}>
            <FormControlLabel
              control={
                <Switch
                  checked={format.cardNum}
                  onChange={handleChangeCardNum}
                  name="cardNum"
                />
              }
              label="？"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
