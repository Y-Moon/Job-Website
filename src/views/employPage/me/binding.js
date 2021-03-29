import React from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
	Box,
	Typography,
	Divider,
	makeStyles,
	Button
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
	root:{
		paddingLeft :50,
	},
	threeTab:{
		marginLeft:theme.spacing(5),
		marginTop:theme.spacing(2),
	},
}));
const MyselfView=()=>{
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Typography align='center' display='inline'>
				email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</Typography>
			<Typography align='center' display='inline'>
				2692946134@qq.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</Typography>
			<Button>
			  <LockIcon fontSize='small'/>
			</Button>
		</Box>
	);
}
export default MyselfView;
