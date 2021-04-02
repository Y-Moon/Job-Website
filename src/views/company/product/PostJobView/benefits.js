import React, { useState } from 'react';
import {
	makeStyles,
	TextField,
	Typography,
	Box,
	InputLabel,
	InputAdornment,
} from '@material-ui/core';
//普通样式表
const useStyles = makeStyles((theme) => ({
  root: {
	marginTop:theme.spacing(3),
  },
  textField:{
	  width:130,
	  marginRight:theme.spacing(2),
  }
}));
//按钮样式定义
const  BenefitsView=(props)=>{
	const classes = useStyles();
	return(
		<div
		className={classes.root}
		>
			<Typography gutterBottom>
				福利待遇(可以为空):
			</Typography>
			<TextField id="standard-basic" label="福利1"  className={classes.textField} />
			<TextField id="standard-basic" label="福利2"  className={classes.textField} />
			<TextField id="standard-basic" label="福利3"  className={classes.textField} />
			<TextField id="standard-basic" label="福利4"  className={classes.textField} />
			<TextField id="standard-basic" label="福利5"  className={classes.textField} />
			<Box mb={3}>
			</Box>
			<Typography gutterBottom>
				薪资:
			</Typography>
			<TextField
			          label="start"
			          id="outlined-start-adornment"
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
					  id="outlined-start-adornment"
					  InputProps={{
						startAdornment: <InputAdornment position="start">K</InputAdornment>,
					  }}
					  variant="outlined"
					/>
			<br/>
			
			
		</div>
	);
};
export default BenefitsView;