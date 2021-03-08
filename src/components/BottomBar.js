import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Container,
	Divider,
	Typography,
	Box
	} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	root:{
		width:"100%",
		position: "absolute",
		bottom:"0rpx",
	},
    boxStyle: {
	    display: "flex",
	    argin:theme.spacing(5),
	    width:"300px",
	
    }
}));
export default function CustomizedTables() {
  const classes = useStyles();
  return (
    <Container component={Paper} >
	  <Divider  />
	  
    </Container>
  );
}