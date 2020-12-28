import React from "react";
import Typography from "@material-ui/core/Typography";
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

const useStyles = makeStyles(() => ({
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
    textIndent: "25px",
    lineHeight: "30px",
  },
  titleStyle: {
    margin: "10px",
  },
  table: {
    minWidth: 200,
  },
}));

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

function createDetailData(nacName, nacPosition, nacAction) {
  return { nacName, nacPosition, nacAction };
}

const nacTypeData = [
  createTypeData("Poisson", "2"),
  createTypeData("Tortue", "1"),
];

const nacDetailData = [
  createDetailData("Poisson", "zone 1A [50,50]", "bouger"),
  createDetailData("Poisson", "zone 1A [50,50]", "bouger"),
  createDetailData("Poisson", "zone 1A [50,50]", "bouger"),
];

export default function Espace() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        {/* 账号信息 */}
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12} className={classes.paper}>
            <Typography variant="h6" align="left">
              Bienvenue dans votre espace
            </Typography>
            <Typography variant="body2" align="left">
              ✅ Votre compte : sheldonhuang1994@gmail.com
            </Typography>
            <Typography variant="body2" align="left">
              ✅ L'observation à distance est prête.
            </Typography>
            <Typography variant="body2" align="left">
              ✅ La connexion à la base de données est réussie.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
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
          <Grid item xs={12} md={12} lg={7} className={classes.paper}>
            <img
              src={EspaceSamplePicture}
              alt=""
              className={classes.imageStyle}
            />
          </Grid>
        </Grid>
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
                {nacDetailData.map((row) => (
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
