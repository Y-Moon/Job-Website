import React from 'react';
import {
  Container,
  makeStyles,
  Divider,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
  Grid ,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import MyCard from './card.js';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import TopBar from './topbar'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    minHeight: '100%',
	padding:theme.spacing(10),
  },
  paginationStyle:{
  	  margin:theme.spacing(5),
  	  display:"flex",
  	  justifyContent:"center",
  },
  TabPanelStyle:{
  	  padding:0,
	  marginTop :40,
  }
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const HotView = () => {
	const classes = useStyles();
	const [state,setState]=React.useState([]);
	let topvalue=0;
	const handleChange = (event, newValue) => {
	    topvalue=newValue; 
		console.log(topvalue);
		requestService();
	  };
	const topbarUpdate=(respJson)=>{
		setState(respJson);
		console.log(respJson);
	}
	function requestService(){
	  let req={"hot":topvalue};
	  axios.get('http://localhost:8010/employPage/hot/cardList',{params:req}).then(r => {
	  let cardJson=r.data;
	  console.log(cardJson);
	  // console.log(state);
	  },e=>{
	  console.log(e);
	  });
	}
  return (
    <Page
      className={classes.root}
      title='hot job'
    >
	  <TopBar topbarUpdate={topbarUpdate}/>
      <Divider/>
      <TabPanel value={topvalue} index={0} className={classes.TabPanelStyle}>
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
        </Grid>
      </TabPanel>
       <Pagination count={10} className={classes.paginationStyle}>
       </Pagination>
    </Page>
  );
};

export default HotView;
