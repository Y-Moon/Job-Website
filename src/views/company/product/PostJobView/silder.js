import React, { useState } from 'react';
import {
	makeStyles,
	Slider,
	Typography
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
	marginTop:theme.spacing(3),
  },
  slider:{
	  width:300,
	  
  }
}));

function valuetext(value) {
  return `${value}`;
}
const  MySlider=(props)=>{
	const classes = useStyles();
	const [value, setValue] = React.useState([1, 3]);
	let marks=[{
		value: 0,
		label: '0'+props.label,
		},
		{
			value: props.max,
			label: props.max+props.label,
		}];
	const handleChange = (event, newValue) => {
	    setValue(newValue);
		props.getvalue(newValue);
	  };
	return(
		<div
		className={classes.root}
		>
			<Typography id="range-slider"  gutterBottom>
			  经验要求:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</Typography>
			<Slider
			  className={classes.slider}
			  value={value}
			  marks={marks}
			  step={1}
			  onChange={handleChange}
			  valueLabelDisplay="auto"
			  aria-labelledby="range-slider"
			  getAriaValueText={valuetext}
			  max={props.max}
			/>
		</div>
	);
};
export default MySlider;