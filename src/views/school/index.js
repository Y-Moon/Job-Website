import react from 'react';
import {
	makeStyles,
}from '@material-ui/core';
import Page from 'src/components/Page';
import TopFrame from './topFrame';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:"100px 150px",
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