import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
  Snackbar
} from '@material-ui/core';
import GoogleIcon from 'src/icons/Google';
import MuiAlert from '@material-ui/lab/Alert';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState("");
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClick = (data,code) => {
	let param={"data":data,"code":code}
    setOpen(param);
  };

  const handleClose = (event, reason) => {
    setOpen("");
  };
  const verifyAC = (data) => {
	  // console.log(data);
	  axios.get('http://localhost:8010/login/verify',{params:data}).then(resp=>{
		  console.log(resp.data);
		  let code=resp.data;
		  if(code==1){
			handleClick("用户身份登陆成功！","success");
			setTimeout(()=>navigate('/findJob', { replace: true }),1000);
		  }else if(code==2){
			  handleClick("企业身份登陆成功！","success");
			  setTimeout(()=>navigate('/company', { replace: true }),1000);
		  }else{
			  handleClick("登陆失败，账号密码错误！！","warning");
			  setTimeout(()=>navigate('/', { replace: true }),1000);
			  ;
		  }
		  
	  },error=>{
		  handleClick("请求失败！！","error");
		  navigate('/', { replace: true });
		  console.log(error);
	  }
	  )
  }
  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '123@163.com',
              password: '123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('必须是一个邮箱').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(values) => {
			  verifyAC(values);
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
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    登录
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    将根据账号权限不同跳转不同界面
                  </Typography>
                </Box>
                <Box
                  mt={3}
                  mb={1}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    用邮箱登录
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={12}
                  >
				  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      登录
                    </Button>
					<Snackbar 
						open={open} 
						autoHideDuration={3000} 
						onClose={handleClose}
						>
					        <Alert onClose={handleClose} severity={open.code}>
					          {open.data}
					        </Alert>
				    </Snackbar>
					</Box>
                  </Grid>
                  
                </Grid>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                 没有账号?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                  >
                    用户注册
                  </Link>
				  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				  <Link
				    component={RouterLink}
				    to="/register"
				    variant="h6"
				  >
				   企业注册
				  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
