import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
	  paddingLeft: '0',
  },
  paginationStyle:{
	  margin:theme.spacing(5),
	  display:"flex",
	  justifyContent:"center",
  }
}));

export default function NestedGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Container maxWidth={false} className={classes.root}>
	<Paper square elevation='0'>
		<Tabs  onChange={handleChange} aria-label="simple tabs example">
		  <Tab label="热门职位"  />
		  <Tab label="最新职位"  />
		</Tabs>
	</Paper>
	<Divider/>
	<Typography >
		<Box m={5}>
		</Box>
	</Typography>
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