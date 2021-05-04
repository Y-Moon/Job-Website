import React, { useState } from 'react';
import {
	makeStyles,
	Slider,
	Box,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
	marginTop:theme.spacing(3),
	
  },
  slider:{
	  width:300,
	  marginLeft:theme.spacing(1),
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
		<Box className={classes.root} >
			<Box fontSize='h5.fontSize' fontWeight='fontWeightBold' mb={1}>
			  经验要求:
			</Box>
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
		</Box>
	);
};
export default MySlider;