import React from 'react';
import {
	makeStyles,
	Grid,
	Box
}from '@material-ui/core';
import Page from 'src/components/Page';
import TopFrame from './topFrame';
import MyCard from './card.js';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    margin:"100px 150px",
  }
}));
const SchoolView=()=>{
	let topvalue='1-1';
	const classes=useStyles();
	const [state,setState]=React.useState({"cardJson":[],"value":0});
	let url='http://localhost:8010/employPage/hotList';
	const requestService=(data)=>{
	  let req={"school":topvalue};
	  axios.get(url,{params:req}).then(r => {
		let cardJson=r.data;
		setState({"cardJson":cardJson,"value":topvalue});
		console.log(state);
	  },e=>{
		console.log(e);
	  });
	};
	React.useEffect(()=>{
		if(state.cardJson.length==0||state==null){
			requestService(0);
		}
	});
	return(
		<Page
		className={classes.root}
		title='school'>
			<TopFrame/>
			<Box mb={10}>
			</Box>
			<Grid
			  container
			  spacing={3}
			>
				{state.cardJson.map((s,i)=>(
					<Grid
					  item
					  lg={4}
					  sm={6}
					  xl={4}
					  xs={12}
					  key={i}
					>
					<MyCard 
						data={s}
					  />
					</Grid>
				))}
			</Grid>
		 </Page>
	);
};
export default SchoolView;
