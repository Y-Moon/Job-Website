import React from 'react';
import {
	makeStyles,
	Box,
	Typography,
	Paper ,
	Link,
	List,
	ListItem,
	ListItemText
}from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import JobData from './JobLabel.json';
const useStyles = makeStyles((theme) => ({
  root: {
	width:"1200px",
  },
  leftBox: {
	  display:"inline-block",
	  position:"relative",
	  padding:"10px",
	  overflow: "auto",
<<<<<<< HEAD
	  width:300, 
	  height:360,
	  padding:theme.spacing(3),
	  backgroundColor:"#ffffff",
=======
	   top:50,
	   left:50,
	   width:300,
	   height:400,
	   padding:theme.spacing(3),
	    backgroundColor:"#55ff00",
>>>>>>> a486f68e5c42bea7825379ecd430c839fb8cc43c
  },
  rightBox :{
	  display:"inline-block",
	  position:"relative",
	  overflow: "auto",
<<<<<<< HEAD
	  left:30,
	   width:720, 
	   height:360, 
	   backgroundColor:"#ffffff",
	   border:"1px solid",
  },
=======
	   top:50,
	   left:100,
	   width:400,
	   height:400,
	   backgroundColor:"#ff0000",
  }
>>>>>>> a486f68e5c42bea7825379ecd430c839fb8cc43c
}));
const TopFrame=()=>{
	const classes=useStyles();
	return(
		<Box className={classes.root}>
<<<<<<< HEAD
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
			<Box  className={classes.rightBox}>
				<img src="./pic/AD.jpg" alt="广告"/>
			</Box >
=======
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
>>>>>>> a486f68e5c42bea7825379ecd430c839fb8cc43c
		</Box>
	)
}
export default TopFrame;
