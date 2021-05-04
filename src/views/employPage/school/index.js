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
	const classes=useStyles();
	const [state,setState]=React.useState({"cardJson":[]});
	const [init,setInit]=React.useState();
	let url='http://localhost:8010/employPage/school/job';
	const requestService=(data)=>{
	  let req={"category":data};
	  axios.get(url,{params:req}).then(resp => {
		let cardJson=resp.data;
		if(cardJson!=null){
		setState({"cardJson":cardJson});
		}else{
			setState({"cardJson":[]});
		}
		console.log(state);
	  },e=>{
		console.log(e);
	  });
	};
	const handleClick=(category)=>{
		console.log("点击"+category);
		requestService(category);
	}
	React.useEffect(()=>{
		if(init==null||init.state!=1){
			setInit({"state":1})
			requestService("1-1");
		}
	});
	return(
		<Page
			className={classes.root}
			title='校园招聘'
			>
			<TopFrame onClick={(category)=>handleClick(category)}/>
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
