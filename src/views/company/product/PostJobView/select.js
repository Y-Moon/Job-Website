import React, { useState } from 'react';
//本地引入
//material组件
import {
	makeStyles,
	Typography,
	RadioGroup,
	Radio,
	FormControlLabel,
	TextField,
	Box
} from '@material-ui/core';
//样式表
const useStyles = makeStyles((theme) => ({
  root: {
	  marginTop:theme.spacing(3),
  },
  textField:{
	  width:130,
	  marginRight:theme.spacing(2),
  }
}));
let lable=[
	{
		'name':'Java',
		'number':'1-1'
	},
	{
		'name':'Web前端',
		'number':'1-2'
	},
	{
		'name':'产品经理',
		'number':'2-1'
	},
	{
		'name':'产品助理',
		'number':'2-2'
	},
	{
		'name':'ui设计',
		'number':'3-1'
	},
	{
		'name':'视觉设计',
		'number':'3-2'
	},
	{
		'name':'运营专员',
		'number':'4-1'
	},{
		'name':'市场',
		'number':'5-1'
	},
	{
		'name':'商务',
		'number':'5-2'
	},
	{
		'name':'管培生',
		'number':'6-1'
	},
	{
		'name':'人事',
		'number':'6-2'
	}];
//主函数
let jobKey=["","","","",""];
const  SelectView=(props)=>{
	const classes = useStyles();
	let category="1-1";
	const [value, setValue] = React.useState(category);
	const handleChange = (event) => {
	  setValue(event.target.value);
	  category=event.target.value;
	  props.getValue(category,null);
	};
	const handleTable=(e)=>{
		const element=e.target;
		const id=element.id;
		let index=id.slice(id.length-1,id.length);
		jobKey[parseInt(index)-1]=document.getElementById(id).value;
		props.getValue(null,jobKey);
	}
	return(
		<div
			className={classes.root}
		>
				<Typography gutterBottom>
					分区版块:
				</Typography>
				<RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
						{
							lable.map((jobName,index)=>(
							<FormControlLabel key={index} value={jobName.number} control={<Radio size="small"/>}  label={jobName.name} />
							))
						}
				</RadioGroup>
				<Box m={4}>
				</Box>
				<Typography gutterBottom>
					关键字:
				</Typography>
				<form onChange={handleTable}>
					<TextField  id="skey1" label="关键字1"  className={classes.textField} />
					<TextField  id="skey2" label="关键字2"  className={classes.textField} />
					<TextField  id="skey3" label="关键字3"  className={classes.textField} />
					<TextField  id="skey4" label="关键字4"  className={classes.textField} />
					<TextField  id="skey5" label="关键字5"  className={classes.textField} />
				</form>
		</div>
	);
};
export default SelectView;