import React from 'react'
import axios from 'axios'
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
		wdith:'700px',
		paddingLeft :50,
	},
}));
const MyIntroduction=()=>{
	const classes = useStyles();
	const uploadFile=React.useRef();
	let username=document.cookie;
	username=username.split("=")[1];
	console.log(username);
	const url='http://localhost:8010/employPage/mine/recruit';
	const onConfirm=(e)=>{
		let formData=new FormData();
		formData.append("username",username);
		formData.append("file",uploadFile.current.files[0]);
		axios.post(url,formData).then(resp=>{
			console.log(resp.data);
		},error=>{
			console.log(error);
		})
	}
	return (
		<Box className={classes.root}>
			<form>
			  <Box fontSize='h5.fontSize'>
			    简历:
			  </Box>
			  <Box mt={2}>
			  </Box>
			  <Button
			    color="primary"
			    variant="contained"
			    component="label"
			  >
			   点击上传
			   <input ref={uploadFile} onChange={onConfirm} type="file" name="name" hidden/>
			  </Button>
			</form>
		</Box>
	);
}
export default MyIntroduction;
