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
require("firebase/storage");

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

function readUserData(userEmail) {
  // Récupérer les données de la Firebase
  // var userId = firebase.auth().currentUser;
  var adaRef = firebase
    .database()
    .ref("/cibles/" + userNameGenerate(userEmail))
    .once("value")
    .then(function (snapshot) {
      var targetPosition = snapshot.exportVal();
      // console.log(targetPosition[ProcessingObject(targetPosition).slice(-1)])
      // // 总是显示最新的那组数据
      var targetPositionDetail =
        targetPosition[ProcessingObject(targetPosition).slice(-1)];
      var json = eval("(" + targetPositionDetail.targetPosition + ")"); // StringToObject
      console.log(targetPositionDetail.targetPosition); // String
      console.log(json); // Object
      console.log(targetPositionDetail.timeStamp); // 时间戳 int
      var realTimeString = ProcessingTime(targetPositionDetail.timeStamp);

      var allObject = ProcessingObject(json); //["person", "suitcase", "truck"]
      // [{nacName: "Poisson", nacPosition: "zone 1A [50,50]", nacAction: "bouger"},
      // {nacName: "Poisson", nacPosition: "zone 1A [50,50]", nacAction: "bouger"}]
      var nacDetailData = [];
      var nacTypeData = [];
      for (var i = 0; i < allObject.length; i++) {
        for (var j = 0; j < json[allObject[i]].length; j++) {
          var tempObject = { nacName: "", nacPosition: "", nacAction: "" };
          tempObject["nacName"] = allObject[i]; //json[allObject[i]] = [[764, 365],[764, 365]]
          tempObject["nacPosition"] = json[allObject[i]][j];
          tempObject["nacAction"] = json[allObject[i]][j];
          nacDetailData.push(tempObject);
        }
        var tempObject = { nacName: "", nacNumber: "" };
        tempObject["nacName"] = allObject[i];
        tempObject["nacNumber"] = json[allObject[i]].length;
        nacTypeData.push(tempObject);
      }

      console.log(nacDetailData);
      return { nacDetailData, nacTypeData, realTimeString };
    });
  console.log(adaRef);
  return adaRef;
}

function readUserImg(userEmail) {
  // Create a storage reference from our storage service
  var storageRef = firebase
    .storage()
    .ref("/" + userNameGenerate(userEmail) + "/")
    .list({ maxResults: 5 })
    .then(function (res) {
      var imgItems = res.items;
      var imgNameList = [];
      for (var i = 0; i < imgItems.length; i++) {
        imgNameList.push(imgItems[i].name);
      }
      imgNameList.reverse();
      return { imgNameList };
    });
  return storageRef;
}

// function readImgUrl(userEmail, imageName, i) {
//   var imageUrl = firebase
//     .storage()
//     .ref(userNameGenerate(userEmail) + "/" + imageName[i]) //不用加jpg！！！
//     .getDownloadURL()
//     .then(function (res) {
//       return { res };
//     });
//   return imageUrl;
// }

// 处理链接
function ProcessingUrl(userEmail,urlName, i) {
  var url =
    "https://firebasestorage.googleapis.com/v0/b/fir-rtc-aff50.appspot.com/o/"+ userNameGenerate(userEmail) + "%2F" +
    urlName[i] +
    "?alt=media";
  return url;
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

// 处理时间戳
function ProcessingTime(time) {
  var date = new Date(time * 1000);
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = date.getDate() + " ";
  var h = date.getHours() + ":";
  var m = date.getMinutes() + ":";
  var s = date.getSeconds();
  console.log(Y + M + D + h + m + s);
  return Y + M + D + h + m + s;
}

// 重建用户名
function userNameGenerate(userEmail) {
  console.log(userEmail);
  userEmail = userEmail.replace(/\./g, "_").replace(/@/g, "__");
  console.log(userEmail);
  return userEmail;
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

// Données de détection d'état
export default function Espace() {
  const classes = useStyles();

  // Données de détection d'état
  const userInfo = useSelector((state) => state.userInfo);
  const [nacDetailDataValue, setNacDetailDataValue] = useState([
    { nacName: "", nacPosition: "", nacAction: "" },
  ]);
  const [nacTypeDataValue, setNacTypeDataValue] = useState([
    { nacName: "", nacNumber: "" },
  ]);
  const [timeValue, setTimeValue] = useState("");
  const [urlName, setUrlName] = useState([[]]);

  useEffect(() => {
    readUserData(userInfo.email).then((result) => {
      setNacDetailDataValue([...result.nacDetailData]);
      setNacTypeDataValue([...result.nacTypeData]);
      setTimeValue([...result.realTimeString]);
    });

    readUserImg(userInfo.email).then((result) => {
      setUrlName([...result.imgNameList]);
      console.log(result.imgNameList);
    });
  }, []);

  return (
    <React.Fragment>
      <div>
        {/* 账号信息 */}
        {console.log(ProcessingUrl(userInfo.email,urlName,0))}
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
              src={ProcessingUrl(userInfo.email,urlName,0)}
              alt=""
              className={classes.imageStyle}
            />
            <Typography variant="caption" className={classes.textStyle}>
              Dernière capture d'écran dans {timeValue}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={4} className={classes.paper}>
            <Typography variant="caption" className={classes.textStyle}>
              Le numéro de votre NAC dans {timeValue}
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
                  {nacTypeDataValue.map((row) => (
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
            Les activités de votre NAC dans {timeValue}
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
                    <StyledTableCell>({row.nacPosition[0]},{row.nacPosition[1]})</StyledTableCell>
                    <StyledTableCell>({row.nacAction[0]},{row.nacAction[1]})</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Divider variant="middle" className={classes.divider} />
        <Typography variant="caption" className={classes.textStyle}>
          Les activités récentes du votre NAC
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <img
              src={ProcessingUrl(userInfo.email,urlName,1)}
              alt="示例图片：识别 NAC"
              className={classes.imageStyle}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <img
              src={ProcessingUrl(userInfo.email,urlName,2)}
              alt="示例图片：识别 NAC"
              className={classes.imageStyle}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <img
              src={ProcessingUrl(userInfo.email,urlName,3)}
              alt="示例图片：识别 NAC"
              className={classes.imageStyle}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <img
              src={ProcessingUrl(userInfo.email,urlName,4)}
              alt="示例图片：识别 NAC"
              className={classes.imageStyle}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
