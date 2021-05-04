import React from 'react';
//本地引入
import CardView from './card';
import SilderView from './silder';
//material组件
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
	makeStyles,
	Box,
	TextField,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	formControl: {
	    marginRight: theme.spacing(10),
	    minWidth: 120,
	  },
	address: {
		width:320,
	}
}));
let education='不限';
let isSchool=0;
let experience=[0,0];
let address='全国各地不限'
const Content=(props)=>{
	const classes=useStyles();
	const [degree, setDegree] = React.useState('');
	const [isStudent, setIsStudent] = React.useState('');
	const handleDegree = (event) => {
		setDegree(event.target.value);
		education=event.target.value;
		props.getValue(education,null,null,null);
	};
	const handleStudent = (event) => {
		setIsStudent(event.target.value);
		isSchool=event.target.value;
		props.getValue(null,isSchool,null,null);
	};
	function handleSilder(newValue){
		experience=newValue;
		props.getValue(null,null,experience,null);
	}
	function handleAddress(e){
		const id=e.target.id;
		console.log(id);
		address=document.getElementById(id).value;
		props.getValue(null,null,null,address);
	}
	return(
		<Box className={classes.root} >
			<SilderView
			  max={10}
			  label="年"
			  getvalue={handleSilder}
			/>
			<Box fontSize='h5.fontSize' fontWeight='fontWeightBold' mb={1} mt={2}>
			  教育要求:
			</Box>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-label">学历</InputLabel>
				<Select
				  labelId="demo-simple-select-label"
				  id="demo-simple-select"
				  value={degree}
				  onChange={handleDegree}
				>
				  <MenuItem value={'不限'}>不限</MenuItem>
				  <MenuItem value={'专科'}>专科</MenuItem>
				  <MenuItem value={'本科'}>本科</MenuItem>
				  <MenuItem value={'研究生'}>研究生</MenuItem>
				  <MenuItem value={'博士'}>博士</MenuItem>
				</Select>
			</FormControl>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-label">学生</InputLabel>
				<Select
				  labelId="demo-simple-select-label"
				  id="demo-simple-select"
				  value={isStudent}
				  onChange={handleStudent}
				>
				  <MenuItem value={'1'}>是</MenuItem>
				  <MenuItem value={'0'}>否</MenuItem>
				</Select>
			</FormControl>
			
			<Box fontSize='h5.fontSize' fontWeight='fontWeightBold' mt={4} mb={2}>
			  工作地址:
			</Box>
			<TextField 
				id="address" 
				label="地址" 
				className={classes.address} 
				onChange={handleAddress}
				/>
		</Box>
	)
}
const ConditionView=(props)=>{
	return(
		<CardView
			title='条件要求'
			content={<Content getValue={props.getValue}/>}
		/>
	)
}
export default ConditionView;