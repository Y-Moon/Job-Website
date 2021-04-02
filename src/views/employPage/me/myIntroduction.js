import React from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
	Box,
	makeStyles,
	TextField,
	Button
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
			    简历:
			  </label>
			  <Box mt={2}>
			  </Box>
			  <Button
			    color="primary"
			    variant="contained"
			    component="label"
			  >
			   点击上传
			   <input type="file" name="name" hidden/>
			  </Button>
			</form>
		</Box>
	);
}
export default MyIntroduction;
