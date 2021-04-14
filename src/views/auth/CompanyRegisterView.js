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
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const uploadFile=React.useRef();
  let url='http://localhost:8010/register/companyRole/create';
  const sendForm=(values)=>{
	  let formdata=new FormData();
	  formdata.append("companyName",values.companyName);
	  formdata.append("phone",values.phone);
	  formdata.append("address",values.address);
	  formdata.append("email",values.email);
	  formdata.append("password",values.password);
	  // let ss={"companyName":values.companyName,"phone":values.phone,"address":values.address,
	  // "email":values.email,"password":values.password,"upload":values.upload,"policy":values.policy};
	  // formdata.append("registerCompany",ss);
	  formdata.append("upload",uploadFile.current.files[0]);
	  console.log(formdata);
	  axios.post(url,formdata).then(resp=>{
	  						  console.log(resp.data);
	  					  },error=>{
	  						  console.log(error);
	  					  });
  }
  return (
    <Page
      className={classes.root}
      title="companyRegister"
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
              companyName: '123',
              corporation: '123',
              phone: '1234',
              address: '123',
              email: '110@163.com',
              password: '123123123',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                companyName: Yup.string().max(255).required('企业名字必须填'),
                corporation: Yup.string().max(255).required('法人代表名必填'),
                phone: Yup.string().min(4,"座机号不能小于4位").max(11,"手机号不能超过11位").required('联系方式必填'),
                address: Yup.string().max(255).required('地址必填'),
                email: Yup.string().email('必须是一个邮箱').max(255).required('邮箱必填'),
                password: Yup.string().min(8,"密码长度必须大于8位,不能太短").max(255).required('密码必填'),
                policy: Yup.boolean().oneOf([true], '必须阅读服务条款')
              })
            }
            onSubmit={(values,credentials) => {
				console.log(values);
				setTimeout(() => {
				     credentials.setSubmitting(false);
				   }, 100);
				sendForm(values);
              // navigate('/app/dashboard', { replace: true });
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
                    创建企业账户
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
                  error={Boolean(touched.companyName && errors.companyName)}
                  fullWidth
                  helperText={touched.companyName && errors.companyName}
                  label="企业名"
                  margin="normal"
                  name="companyName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.companyName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.corporation && errors.corporation)}
                  fullWidth
                  helperText={touched.corporation && errors.corporation}
                  label="法人"
                  margin="normal"
                  name="corporation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.corporation}
                  variant="outlined"
                />
				<TextField
				  error={Boolean(touched.phone && errors.phone)}
				  fullWidth
				  helperText={touched.phone && errors.phone}
				  label="企业联系方式"
				  margin="normal"
				  name="phone"
				  onBlur={handleBlur}
				  onChange={handleChange}
				  value={values.phone}
				  variant="outlined"
				/>
				<TextField
				  error={Boolean(touched.address && errors.address)}
				  fullWidth
				  helperText={touched.address && errors.address}
				  label="企业地址"
				  margin="normal"
				  name="address"
				  onBlur={handleBlur}
				  onChange={handleChange}
				  value={values.address}
				  variant="outlined"
				/>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="邮箱"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
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
				<Box my={2}>
				  <Button
				    fullWidth
				    color="primary"
				    size="large"
				    type="submit"
				    variant="outlined"
					component="label"
				  >
				    上传企业资质证书
					<input ref={uploadFile}
					  name="upload" 
					  type="file" 
					  hidden/>
				  </Button>
				</Box>
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
                    &nbsp;
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="/companyRegister"
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
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
