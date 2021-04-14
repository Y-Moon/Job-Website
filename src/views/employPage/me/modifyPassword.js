import React from 'react'
import axios from 'axios'
import { Formik } from 'formik';
import * as Yup from 'yup';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
	TextField,
	Box,
	Divider,
	Button,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root:{
		paddingLeft :50,
	},
}));
const ModifyPasswordView=()=>{
	const classes = useStyles();
	const url='http://localhost:8010/employPage/mine/password';
	let username=document.cookie;
	// console.log(username);
	username=username.split("=")[1];
	// console.log(username);
	const handleClick=(values)=>{
		// console.log(values.OldPassword);
		// console.log(values.NewPassword);
		let formData=new FormData();
		formData.append("username",username);
		formData.append("oldPassword",values.OldPassword);
		formData.append("newPassword",values.NewPassword);
		axios.put(url,formData).then(resp=>{
								  console.log(resp.data);
							  },error=>{
								  console.log(error);
							  })
	}
	return (
		<Box className={classes.root}>
			<Box textAlign="left" m={1} className={classes.threeTab}>
						  登录邮箱:&nbsp;&nbsp;&nbsp;{username}
			</Box>
			  <Divider/>
			  <Formik
			    initialValues={{
			      OldPassword: '',
			      NewPassword: ''
			    }}
			    validationSchema={Yup.object().shape({
			      OldPassword: Yup.string().max(255).required('需要OldPassword'),
			      NewPassword: Yup.string().max(255).required('需要NewPassword')
			    })}
			    onSubmit={(values,credentials) => {
					console.log(credentials);
					 setTimeout(() => {
					      credentials.setSubmitting(false);
					    }, 100);
					 handleClick(values);
					 // console.log(values);
			    }}
			  >
			  {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            })=>(
				<form
					onSubmit={handleSubmit}
				>
				  <Box textAlign="left" m={1} className={classes.threeTab}>
					 <TextField
					   error={Boolean(touched.OldPassword && errors.OldPassword)}
					   helperText={touched.OldPassword && errors.OldPassword}
					   label="OldPassword"
					   name="OldPassword"
					   value={values.OldPassword}
					   onBlur={handleBlur}
					   type="password"
					   onChange={handleChange}
					   autoComplete="current-password"
					 />
				  </Box>
				  <Box textAlign="left" m={1} className={classes.threeTab}>
					<TextField
					    error={Boolean(touched.NewPassword && errors.NewPassword)}
						helperText={touched.NewPassword && errors.NewPassword}
						label="NewPassword"
						name="NewPassword"
						value={values.NewPassword}
						onBlur={handleBlur}
						type="password"
						onChange={handleChange}
						autoComplete="current-password"
					  />
				  </Box>
				  <Box textAlign="left" m={1} className={classes.threeTab}>
				  	<Button 
				  	variant="outlined" 
				  	color="primary" 
				  	disabled={isSubmitting}
				  	type="submit"
				  	startIcon={<KeyboardArrowUpIcon/>}>
				  		 提交
				  	</Button>
				  </Box>
				</form>
			)}
			</Formik>
			
		</Box>
	);
}
export default ModifyPasswordView;
