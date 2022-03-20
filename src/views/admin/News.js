import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// core components
import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/maps.js";

const useStyles = makeStyles(componentStyles);

const News = () => {
  const classes = useStyles();
  <>
    <Header />
    {/* Page content */}
    <Container
      maxWidth={false}
      component={Box}
      marginTop="-6rem"
      classes={{ root: classes.containerRoot }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Card classes={{ root: classes.cardRoot }}></Card>
        </Grid>
      </Grid>
    </Container>
  </>;
};

export default News;
