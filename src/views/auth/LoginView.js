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
  Snackbar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import GoogleIcon from 'src/icons/Google';
import MuiAlert from '@material-ui/lab/Alert';
import Page from 'src/components/Page';
import { Code } from '_react-feather@2.0.9@react-feather';

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
  const [state, setState] = React.useState({ "data": "", "code": "", "open": false });
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClick = (data, code) => {
    let param = { "data": data, "code": code, "open": true }
    setState(param);
  };

  const handleClose = (event, reason) => {
    setState({ "data": "", "code": "info", "open": false });
  };
  const verifyAC = (data) => {
    console.log(data);
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:8010/login/verify', { params: data }).then(resp => {
      // console.log(resp.data);
      let resultMessage = resp.data;
      // console.log(resultMessage)
      let message = resultMessage.message;
      console.log(resultMessage);
      let url = "/";
      let result = "success";
      if(resultMessage.state==1){
        result = "success";
        switch(data.status){
          case 'user':{
            url = "/findJob";
            break;
          }
          case 'company':{
            url= '/company';
            break;
          }
          case 'admin':{
            url= '/admin';
            break;
          }
          default:{
            url= '/';
            break;
          }
        }
      }else{
        result = "error";
      }
      // console.log(message);
      handleClick(message, result);
      setTimeout(() => navigate(url, { replace: true }), 1000);
    }, error => {
      handleClick("请求失败！！", "error");
    }
    )
    console.log(document.cookie);
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
              password: '123456',
              status: 'user'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('必须是一个邮箱').max(255).required('需要使用邮箱登录'),
              password: Yup.string().max(255).required('需要输入密码')
            })}
            onSubmit={(values, credentials) => {
              setTimeout(() => {
                credentials.setSubmitting(false);
              }, 100);
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
                    align="center"
                    color="textPrimary"
                    variant="h2"
                  >
                    登录
                  </Typography>
                </Box>
                <Typography
                    align="left"
                    color="textSecondary"
                    variant="body1"
                  >
                    选择登录身份
                  </Typography>
                <FormControl component="fieldset">
                  <RadioGroup 
                    row aria-label="position" 
                    name="status" 
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.status}
                    >
                    <FormControlLabel
                      value="user"
                      control={<Radio color="primary" />}
                      label="用户"
                    />
                    <FormControlLabel
                      value="company"
                      control={<Radio color="primary" />}
                      label="企业"
                    />
                    <FormControlLabel 
                      value="admin" 
                      control={<Radio color="primary" />} 
                      label="管理员" 
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  fullWidth
                  label="邮箱"
                  margin="normal"
                  type="email"
                  variant="outlined"
                  name="email"
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="密码"
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
                        open={state.open}
                        autoHideDuration={1000}
                        onClose={handleClose}
                      >
                        <Alert onClose={handleClose} severity={state.code}>
                          {state.data}
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
                    to="/userRegister"
                    variant="h6"
                  >
                    用户注册
                  </Link>
				  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				  <Link
                component={RouterLink}
                to="/companyRegister"
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
