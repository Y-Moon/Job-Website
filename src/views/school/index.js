import React from 'react';
import {
	makeStyles,
}from '@material-ui/core';
import Page from 'src/components/Page';
import TopFrame from './topFrame';

const useStyles = makeStyles((theme) => ({
  root: {
<<<<<<< HEAD
    margin:"100px 150px",
=======

>>>>>>> a486f68e5c42bea7825379ecd430c839fb8cc43c
  }
}));
const SchoolView=()=>{
	const classes=useStyles();
	return(
		<Page
		className={classes.root}
		title='school'>
			<TopFrame/>
		 </Page>
	);
};
export default SchoolView;
