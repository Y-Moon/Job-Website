import React from 'react';
import axios from 'axios';
import {
	Button,
	Box
} from '@material-ui/core';
const Download=()=>{
	window.open("http://localhost:8010/file/test.txt");
	window.history.go(-1);
	return(
		<Box mt={30} mb={100} fontSize={50} textAlign='center' variant="h1">
			HAHA,彩蛋!!!
		</Box>
	)
}
export default Download;