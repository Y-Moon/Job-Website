import React from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
	Box,
	makeStyles,
	TextField
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
	root:{
		paddingLeft :50,
	},
}));
const MyIntroduction=()=>{
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<form>
			  <label>
			    此处上传简历:
			  </label>
			  <br/>
			  <br/>
			  <input type="file" name="name" />
			</form>
		</Box>
	);
}
export default MyIntroduction;
