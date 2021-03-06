import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Index1 from "../../images/index_1.jpg";
import Index2 from "../../images/index_2.jpg";
import Index3 from "../../images/index_3.jpg";
import ProductCurvyLines from "../../images/productCurvyLines.png";
import IndexIcon1 from "../../images/index-icon-1.svg";
import IndexIcon2 from "../../images/index-icon-2.svg";
import IndexIcon3 from "../../images/index-icon-3.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundImage: `url(${ProductCurvyLines})`,
    overflow: "hidden",
    backgroundColor: "#ffffff", // Average color of the background image.
    backgroundPosition: "center",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    width: "100%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderRadius: "5px",
    boxShadow: "2px 2px 10px rgba(0,0,0,.5)",
  },
  imageIcon: {
    width: "15%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Fonctionnalités
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <img src={Index1} alt="" className={classes.image} />
              <div className={classes.item}>
              <img src={IndexIcon1} className={classes.imageIcon} />
                <div className={classes.number}>Voir à distance</div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src={Index2} className={classes.image} />
              <div className={classes.item}>
                <img src={IndexIcon2} className={classes.imageIcon} />
                <div className={classes.number}>Couvrir tous les plateformes</div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src={Index3} className={classes.image} />
              <div className={classes.item}>
              <img src={IndexIcon3} className={classes.imageIcon} />
                <div className={classes.number}>Personnaliser</div>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="primary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="/espace"
        >
          Commencez !
        </Button>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
