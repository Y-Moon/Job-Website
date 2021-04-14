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
const TopFrame=(props)=>{
	const classes=useStyles();
	const test23=(category,e)=>{
		props.onClick(category);
	}
	return(
		<Box className={classes.root}>
			<Paper   className={classes.leftBox}>
				<List>
				{JobData.map((object)=>(
					<ListItem button 
					key={object.title}
					>
						<ListItemText primary={object.title} />
						{object.Link.map((minorObj,index)=>(
						<ListItemText key={index}>
						<Link
						  color="textSecondary"
						  onClick={(e)=>test23(minorObj.category,e)}
						>
							<Box m={1} fontSize={10} display="inline" >
							  {minorObj.content}
							</Box>
						</Link>
						</ListItemText >
						))}
						
					</ListItem>
				))}
				</List>
			</Paper >
			<img  src={ADpic} alt="广告"  className={classes.rightBox}/>
		</Box>
	)
}
export default TopFrame;
