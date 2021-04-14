import React from 'react';
import axios from 'axios';
import {
	Button,
	Box
} from '@material-ui/core';
const Download=()=>{
	let username=document.cookie;
	username=username.split("=")[1];
	let url="http://localhost:8010/employPage/mine/recruit";
	axios.get(url,{params:{"username":username}}).then(resp=>{
		console.log(resp);
		let extName="";
		if(resp.data!=null&&resp.data!=""){
			window.open("http://localhost:8010/file/"+resp.data);
			
		}
	},error=>{
		console.log(error);
	});
	window.history.go(-1);
	return(
		<Box mt={30} mb={100} fontSize={50} textAlign='center' variant="h1">
			下载中...
		</Box>
	)
}
export default Download;