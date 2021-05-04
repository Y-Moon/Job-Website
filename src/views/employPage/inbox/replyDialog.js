import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import TitleIcon from '@material-ui/icons/Title';
import { Formik } from 'formik';
import * as Yup from 'yup';
//本地引入
import request from 'src/components/Request'
import getCookie from 'src/components/CookieUntils'
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	makeStyles,
	InputAdornment,
	Box,
		} from '@material-ui/core';
const useStyles=makeStyles({
  root: {
    display:'inline',
  },
  buttonStyle:{
	  margin:15,
  }
});
export default function ReplyDialog(props) {
  const [open, setOpen] = React.useState(false);
  const classes=useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const submitRquest= (values) => {
	  let url='http://localhost:8010/public/sendEmail'
	  let username=getCookie(document.cookie,"userName");
	  let formData=new FormData();
	  formData.append("sender", username);
	  formData.append("recipient", values.postEmail);
	  formData.append("title", values.title);
	  formData.append("content", values.content);
	  request(url,formData,'post').then(resp=>{
		  let data=resp.data;
		  console.log(data);
	  })
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Button 
		variant="outlined" 
		onClick={handleClickOpen}
		className={classes.buttonStyle}
		>
        写邮件
      </Button>
      <Dialog open={open}  aria-labelledby="form-dialog-title">
        <Formik
           initialValues={{
         	  postEmail: '',
         	  title: '',
         	  content: '',
           }}
           validationSchema={Yup.object().shape({
         	postEmail: Yup.string().email('必须是邮箱').max(50,'最大不超过50个字').required('收件人不能为空'),
         	title: Yup.string().max(100,'主题不能超过100个字').required('邮件主题不能为空'),
         	content: Yup.string().max(1000,'邮件内容不能超过1000个字'),
           })}
		   onSubmit={(values,credentials) => {
			handleClose();
		    submitRquest(values);
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
		}) => (
		  <form onSubmit={handleSubmit}>
		  <DialogTitle id="form-dialog-title">发邮件</DialogTitle>
		  <DialogContent>
			<TextField
			  autoFocus
			  fullWidth
			  margin="normal"
			  id="postEmail"
			  label="收件人："
			  type="email"
			  InputProps={{
					startAdornment: 
					<InputAdornment position="start">
						<EmailIcon/>
					</InputAdornment>,
			  }}
			  name="postEmail"
			  error={Boolean(touched.postEmail && errors.postEmail)}
			  helperText={touched.postEmail && errors.postEmail}
			  onBlur={handleBlur}
			  onChange={handleChange}
			  value={values.postEmail}
			/>
			<TextField
			  autoFocus
			  fullWidth
			  margin="normal"
			  id="title"
			  label="主题："
			  type="text"
			  InputProps={{
					startAdornment: 
					<InputAdornment position="start">
						<TitleIcon/>
					</InputAdornment>,
			  }}
			  name="title"
			  error={Boolean(touched.title && errors.title)}
			  helperText={touched.title && errors.title}
			  onBlur={handleBlur}
			  onChange={handleChange}
			  value={values.title}
			/>
			<TextField
			  autoFocus 
			  fullWidth 
			  multiline
			  margin="normal" 
			  type="text" 
			  variant="outlined"
			  id="content" 
			  name="content" 
			  label="正文"
			  rows={10}
			  error={Boolean(touched.content && errors.content)}
			  helperText={touched.content && errors.content}
			  onBlur={handleBlur}
			  onChange={handleChange}
			  value={values.content}
			/>
		  
       </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            关闭
          </Button>
          <Button 
			  disabled={isSubmitting}
			  type="submit"
			  color="primary"
			  >
            发送
          </Button>
        </DialogActions>
		</form>
		)}
		</Formik>
      </Dialog>
    </div>
  );
}
