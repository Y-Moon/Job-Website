import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
	Grid,
	Paper,
	Tabs,
	Tab,
	Typography,
	Box,
	} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import MyCard from './card.js';
const useStyles = makeStyles((theme) => ({
  root:{
	  paddingLeft: 0,
	  marginTop: 50,
  },
  paginationStyle:{
	  margin:theme.spacing(5),
	  display:"flex",
	  justifyContent:"center",
  },
  TabPanelStyle:{
	  margin:"0px",
  }
}));

function CardList() {
  const classes = useStyles();
  return (
  
    <Container maxWidth={false} className={classes.root}>
	<Box m={5}>
	</Box>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <MyCard />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <MyCard />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <MyCard />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <MyCard />
        </Grid>
		<Grid
		  item
		  lg={4}
		  sm={6}
		  xl={4}
		  xs={12}
		>
		  <MyCard />
		</Grid>
      </Grid>
	 <Pagination count={10} className={classes.paginationStyle}>
	 </Pagination>
    </Container>
  );
}
export default CardList;