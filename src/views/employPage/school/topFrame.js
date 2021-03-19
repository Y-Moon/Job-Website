import React from 'react';
import {
	makeStyles,
	Box,
	Typography,
	Paper ,
	Link,
	List,
	ListItem,
	ListItemText,
}from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import JobData from './JobLabel.json';
import ADpic from './pic/AD.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
	width:"1200px",
  },
  leftBox: {
	  display:"inline-block",
	  position:"relative",
	  padding:"10px",
	  overflow: "auto",
	  width:300, 
	  height:360,
	  padding:theme.spacing(3),
	  backgroundColor:"#ffffff",
  },
  rightBox :{
	  display:"inline-block",
	  position:"relative",
	  overflow: "auto",
	  left:30,
	   width:720, 
	   height:360, 
	   backgroundColor:"#ffffff",
  },
}));
const TopFrame=()=>{
	const classes=useStyles();
	return(
		<Box className={classes.root}>
			<Paper   className={classes.leftBox}>
				<List>
				{JobData.map((object)=>(
					<ListItem button key={object.title}>
						<ListItemText primary={object.title} />
						{object.Link.map((minorObj)=>(
						<ListItemText >
						<Link
						  component={RouterLink}
						  to={minorObj.to}
						  color="textSecondary"
						>
							<Box m={1} fontSize={10} display="inline" >
							  {minorObj.content}
							</Box>
						</Link>
						</ListItemText >
						))}
						
						<ArrowRightIcon color="action"/>
					</ListItem>
				))}
				</List>
			</Paper >
			<img  src={ADpic} alt="广告"  className={classes.rightBox}/>
		</Box>
	)
}
export default TopFrame;
