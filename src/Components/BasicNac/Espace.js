import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EspaceSamplePicture from "../../images/espace_sample_picture.jpg";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");

const useStyles = makeStyles(() => ({
  buttonArea: {
    margin: "0 10px 10px 10px",
  },
  divider: {
    margin: "20px",
  },
  imageStyle: {
    margin: "0px",
    width: "90%",
  },
  imageStyleForDetaile: {
    margin: "0px",
    width: "80%",
  },
  paper: {
    margin: "10px",
  },
  textStyle: {
    margin: "10px",
    textIndent: "0px",
    lineHeight: "30px",
  },
  titleStyle: {
    margin: "10px",
  },
  table: {
    minWidth: 200,
  },
}));

function userNameGenerate(userEmail) {
  console.log(userEmail);
  userEmail = userEmail.replace(/\./g, "_").replace(/@/g, "__");
  console.log(userEmail);
  return userEmail;
}

function readUserData(userEmail) {
  // Récupérer les données de la Firebase
  // var userId = firebase.auth().currentUser;
  var adaRef = firebase
    .database()
    .ref("/cibles/" + userNameGenerate(userEmail))
    .once("value")
    .then(function (snapshot) {
      var targetPosition = snapshot.exportVal();
      var result = [];
      console.log(targetPosition);

      // console.log(targetPosition[ProcessingObject(targetPosition).slice(-1)])
      // // 总是显示最新的那组数据
      var targetPositionDetail =
        targetPosition[ProcessingObject(targetPosition).slice(-1)];
      var json = eval("(" + targetPositionDetail.targetPosition + ")"); // StringToObject
      console.log(targetPositionDetail.targetPosition); // String
      console.log(json); // Object
      console.log(targetPositionDetail.timeStamp); // 时间戳 int

      var allObject = ProcessingObject(json); //["person", "suitcase", "truck"]
      // [{nacName: "Poisson", nacPosition: "zone 1A [50,50]", nacAction: "bouger"},
      // {nacName: "Poisson", nacPosition: "zone 1A [50,50]", nacAction: "bouger"}]
      var nacDetailData = [];
      for (var i = 0; i < allObject.length; i++) {
        for (var j = 0; j < json[allObject[i]].length; j++) {
          var tempObject = { nacName: "", nacPosition: "", nacAction: "" };
          tempObject["nacName"] = allObject[i]; //json.allObject(i) = [[764, 365],[764, 365]]
          tempObject["nacPosition"] = json[allObject[i]][j];
          tempObject["nacAction"] = json[allObject[i]][j];
          nacDetailData.push(tempObject);
        }
      }
      console.log(nacDetailData);
      return nacDetailData;
    });
    return adaRef;
}

// 处理对象 object，返回一个数组
function ProcessingObject(object) {
  var result = [];
  for (var i in object) {
    if (object.hasOwnProperty(i)) {
      result.push(i);
    }
  }
  return result;
}

// Données de table
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createTypeData(nacName, nacNumber) {
  return { nacName, nacNumber };
}

const nacTypeData = [
  createTypeData("Poisson", "2"),
  createTypeData("Tortue", "1"),
];

// Données de détection d'état
export default function Espace() {
  const classes = useStyles();

  console.log(nacTypeData);

  // Données de détection d'état
  const userInfo = useSelector((state) => state.userInfo);
  const [nacDetailDataValue, setNacDetailDataValue] = useState([
    { nacName: "", nacPosition: "", nacAction: "" },
  ]);
  useEffect(() => {
    readUserData(userInfo.email).then(result =>
       setNacDetailDataValue([...result]))
  }, []);

  return (
    <React.Fragment>
      <div>
        {/* 账号信息 */}
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={5} className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonArea}
            >
              Bilan du jour
            </Button>
            <Button variant="contained" className={classes.buttonArea}>
              Mettre à jour
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={6} className={classes.paper}>
            <Typography variant="body2" align="left">
              ✅ Votre compte : {userInfo.email}
            </Typography>
            <Typography variant="body2" align="left">
              ❎ L'observation à distance n'est pas prête.
            </Typography>
            <Typography variant="body2" align="left">
              ❎ La connexion à la base de données n'est pas réussie.
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" className={classes.divider} />
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={7} className={classes.paper}>
            <img
              src={EspaceSamplePicture}
              alt=""
              className={classes.imageStyle}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4} className={classes.paper}>
            <Typography variant="caption" className={classes.textStyle}>
              下表中为最近您NAC的数量情况
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Types de NAC</StyledTableCell>
                    <StyledTableCell>Quantité</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {nacTypeData.map((row) => (
                    <StyledTableRow key={row.nacName}>
                      <StyledTableCell component="th" scope="row">
                        {row.nacName}
                      </StyledTableCell>
                      <StyledTableCell>{row.nacNumber}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Divider variant="middle" className={classes.divider} />
        <Grid item xs={12} md={12} lg={12} className={classes.paper}>
          <Typography variant="caption" className={classes.textStyle}>
            下表中为最近您NAC的活动情况
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Votre NAC</StyledTableCell>
                  <StyledTableCell>Coordonnée</StyledTableCell>
                  <StyledTableCell>Que fait-il</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {nacDetailDataValue.map((row) => (
                  <StyledTableRow key={row.nacName}>
                    <StyledTableCell component="th" scope="row">
                      {row.nacName}
                    </StyledTableCell>
                    <StyledTableCell>{row.nacPosition}</StyledTableCell>
                    <StyledTableCell>{row.nacAction}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Divider variant="middle" className={classes.divider} />
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <img
              src={EspaceSamplePicture}
              alt="示例图片：识别 NAC"
              className={classes.imageStyle}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <img
              src={EspaceSamplePicture}
              alt="示例图片：识别 NAC"
              className={classes.imageStyle}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <img
              src={EspaceSamplePicture}
              alt="示例图片：识别 NAC"
              className={classes.imageStyle}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <img
              src={EspaceSamplePicture}
              alt="示例图片：识别 NAC"
              className={classes.imageStyle}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
