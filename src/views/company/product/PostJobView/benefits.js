import React, { useState } from 'react';
import {
	makeStyles,
	TextField,
	Box,
	InputLabel,
	InputAdornment,
} from '@material-ui/core';
//本地引入
import CardView from './card';
//普通样式表
const useStyles = makeStyles((theme) => ({
  root: {
	marginTop:theme.spacing(3),
  },
  textField:{
	  width:170,
	  marginTop:theme.spacing(1),
	  marginRight:theme.spacing(10),
	  marginBottom:theme.spacing(1),
  }
}));
//按钮样式定义
let benefits=["","","","",""];
let salary=[0,0];
const  Content=(props)=>{
	const classes = useStyles();
	const handleChange=(e)=>{
		let element=e.target;
		let id=element.id;
		let index=id.slice(id.length-1,id.length);
		benefits[parseInt(index)-1]=document.getElementById(id).value;
		props.getValue(benefits,null);
	}
	const handleSalary=(e)=>{
		let hashMap=new Map();
		hashMap.set("bStart",0);
		hashMap.set("bEnd",1);
		let element=e.target;
		let id=element.id;
		salary[hashMap.get(id)]=parseInt(document.getElementById(id).value);
		if(Object.is(salary[hashMap.get(id)], NaN)){
			salary[hashMap.get(id)]=0;
		}
		if(salary[0]>salary[1]){
			salary[1]=salary[0];
		}
		props.getValue(null,salary);
	}
	return(
		<div
		className={classes.root}
		>
			<Box fontSize='h5.fontSize' fontWeight='fontWeightBold' mb={1}>
				福利待遇(可以为空):
			</Box>
			<form onChange={handleChange}>
				<TextField id="bkey1" label="福利1"  className={classes.textField} />
				<TextField id="bkey2" label="福利2"  className={classes.textField} />
				<TextField id="bkey3" label="福利3"  className={classes.textField} />
				<TextField id="bkey4" label="福利4"  className={classes.textField} />
				<TextField id="bkey5" label="福利5"  className={classes.textField} />
			</form>
				<Box mb={3}>
				</Box>
				<Box fontSize='h5.fontSize' fontWeight='fontWeightBold' mb={5}>
					薪资:
				</Box>
			<form onChange={handleSalary}>
				<TextField
					  label="start"
					  id="bStart"
					  type="number"
					  InputProps={{
						startAdornment: <InputAdornment position="start">K</InputAdornment>,
					  }}
					  variant="outlined"
				/>
				<Box display='inline' m={1}>
					一
				</Box>
				<TextField
					  label="end"
					  id="bEnd"
					  type="number"
					  InputProps={{
						startAdornment: <InputAdornment position="start">K</InputAdornment>,
					  }}
					  variant="outlined"
					/>
				<br/>
			</form>
		</div>
	);
}
const BenefitsView=(props)=>{
	
	return(
		<CardView 
			title='福利待遇'
			content={<Content getValue={props.getValue}/>}
		/>
	)
}
export default BenefitsView;