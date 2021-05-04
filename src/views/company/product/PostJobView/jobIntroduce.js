import {
	makeStyles,
	TextField,
	Box,
	Container,
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
//本地引入
import CardView from './card';
const useStyles = makeStyles((theme)=>({
		textField:{
		   marginTop:30,
		},
		card:{
			  marginTop:'20px',
			  marginBottom: '20px',
			  padding:"20px",
		},
}));
const Content=(props)=>{
	const classes=useStyles();
	const handleTable=(e)=>{
		let id=e.target.id;
		let value=document.getElementById(id).value;
		console.log(id);
		switch(id){
			case 'jobName':{
				props.getValue(value,null,null);
				break;
			}
			case 'introduce':{
				props.getValue(null,value,null);
				break;
			}
			case 'jobCondition':{
				props.getValue(null,null,value);
				break;
			}
		}
	}
	return(
	<Box>
		<Formik
		  initialValues={{
			  jobName: '',
			  introduce: '此处是关于工作的介绍信息',
			  jobCondition: '这里写明详细的工作要求',
		  }}
		  validationSchema={Yup.object().shape({
			jobName: Yup.string().max(50,'最大不超过50个字').required('必须输入岗位'),
			introduce: Yup.string().max(255,'不能超过255个字').required('职位介绍不能为空'),
			jobCondition: Yup.string().max(255,'不能超过255个字'),
		  })}
		>
		{({
		  errors,
		  handleBlur,
		  handleChange,
		  handleSubmit,
		  isSubmitting,
		  touched,
		  values
		}) => (
			<form onChange={handleTable}>
				<Box textAlign='center' >
					<TextField 
					  id="jobName" 
					  label="岗位(必)"
					  name="jobName"
					  error={Boolean(touched.jobName && errors.jobName)}
					  helperText={touched.jobName && errors.jobName}
					  onBlur={handleBlur}
					  onChange={handleChange}
					  value={values.jobName}
					/>
				</Box>
				<Box m={2}/>
				<TextField
				   className={classes.textField}
				   id="introduce"
				   label="职位介绍(必)"
				   fullWidth
				   multiline
				   rows={6}
				   variant="outlined"
				   name="introduce"
				   error={Boolean(touched.introduce && errors.introduce)}
				   helperText={touched.introduce && errors.introduce}
				   onBlur={handleBlur}
				   onChange={handleChange}
				   value={values.introduce}
				/>
				<TextField
					className={classes.textField}
					id="jobCondition"
					label="岗位要求"
					fullWidth
					multiline
					rows={6}
					variant="outlined"
					name="jobCondition"
					error={Boolean(touched.jobCondition && errors.jobCondition)}
					helperText={touched.jobCondition && errors.jobCondition}
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.jobCondition}
				/>
			</form>
		)}
		</Formik>
	</Box>
	)
}
const JobIntroduceView=(props)=>{
	return(
		<CardView
			title='岗位介绍'
			content={<Content getValue={props.getValue} />}
		/>
	)
}
export default JobIntroduceView;