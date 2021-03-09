import React from 'react';
import {
	makeStyles,
	Box,
	Typography,
	Card,
}from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
	width:"1920px",
  },
  leftBox: {
	  display:"inline-block",
	  position:"relative",
	  overflow: "auto",
	   top:50,
	   left:50,
	   width:300,
	   height:400,
	   padding:theme.spacing(3),
	    backgroundColor:"#55ff00",
  },
  rightBox :{
	  display:"inline-block",
	  position:"relative",
	  overflow: "auto",
	   top:50,
	   left:100,
	   width:400,
	   height:400,
	   backgroundColor:"#ff0000",
  }
}));
const TopFrame=()=>{
	const classes=useStyles();
	return(
		<Box className={classes.root}>
			<Card  className={classes.leftBox}>
				<Box fontSize={20} display="inline" fontWeight="fontWeightLight">
					技术
				</Box>
				<Box m={3} fontSize={15} display="inline" fontWeight="fontWeightLight">
					java
				</Box>

			</Card>
			<Card className={classes.rightBox}>
			</Card>
		</Box>
	)
}
export default TopFrame;
