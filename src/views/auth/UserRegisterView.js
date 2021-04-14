import React from 'react';
import axios from 'axios';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Page from 'src/components/Page';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [state, setState] = React.useState({"data":"","code":"info","open":false});
  let url='http://localhost:8010/register/userRole/create';
  
  const handleClick = (data,code) => {
  	let param={"data":data,"code":code,"open":true}
    setState(param);
  };
  const handleClose = (event, reason) => {
	  setState({"data":"","code":"info","open":false});
  };
  
  const verifyAC = (data) => {
  	  // console.log(data);
  	  axios.get(url,{params:data}).then(resp=>{
  		  console.log(resp.data);
  		  let data=resp.data;
		  if(data=="1"){
			  console.log("注册成功！");
			  handleClick("注册成功！！","success");
			  setTimeout(()=>navigate('/', { replace: true }),1000);
		  }else{
			  handleClick(data,"warning");
			  setTimeout(()=>navigate('/userRegister', { replace: true }),1000);
			  location.reload();
		  }
  	  },error=>{
  		  handleClick("请求失败！！","error");
  		  setTimeout(()=>navigate('/userRegister', { replace: true }),1000);
  		  console.log(error);
		  location.reload();
  	  })
  }
  return (
    <Page
      className={classes.root}
      title="userRegister"
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
              name: '',
              email: '',
              password: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                name: Yup.string().max(255).required('名字必须填！！'),
                email: Yup.string().email('必须是合法邮箱！！').max(255).required('必须填写邮件！！'),
                password: Yup.string().max(255).required('必须填写密码！！'),
                policy: Yup.boolean().oneOf([true], '请仔细阅读服务条款')
              })
            }
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
                    创建一个普通账户
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    使用邮箱进行注册
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant="outlined"
                />
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
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    我已阅读
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      服务条款
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
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
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  是否有一个账户?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    登录
                  </Link>
                </Typography>
				<Snackbar
					open={state.open}
					autoHideDuration={1000} 
					onClose={handleClose}
					>
				        <Alert onClose={handleClose} severity={state.code}>
				          {state.data}
				        </Alert>
				</Snackbar>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
