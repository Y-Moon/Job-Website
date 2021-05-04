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
  MenuItem,
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
  },
  selectBox: {
    minWidth:'130px',
    width: 'auto',
    marginRight: '30px'
  }
}));

const RegisterView = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dd=['北京','上海','深圳','广州','杭州','成都','南京','武汉','厦门','长沙','苏州','天津','其他'];
  const rz=['未融资','天使轮','A轮','B轮','C轮','D轮及以上','上市公司','不需要融资'];
  const gm=['少于15人', '15-50人', '50-150人', '150-500人', '500-2000人', '2000人以上'];
  const ly=['移动互联网', '电商', '金融', '企业服务', '教育', '文娱|内容', '游戏', '消费生活', '硬件'];
  let url='http://localhost:8010/register/companyRole/create';
  const sendForm=(values)=>{
	  let formdata=new FormData();
	  formdata.append("companyName",values.companyName);
	  formdata.append("name",values.corporation);
	  formdata.append("phone",values.phone);
	  formdata.append("address",values.address);
	  formdata.append("userName",values.email);
	  formdata.append("password",values.password);
	  formdata.append("companyCode",values.companyCode);
	  formdata.append("dd",values.dd);
	  formdata.append("rz",values.rz);
	  formdata.append("gm",values.gm);
	  formdata.append("ly",values.ly);
	  // let ss={"companyName":values.companyName,"phone":values.phone,"address":values.address,
	  // "email":values.email,"password":values.password,"upload":values.upload,"policy":values.policy};
	  // formdata.append("registerCompany",ss);
	  console.log(formdata);
	  axios.post(url,formdata).then(resp=>{
                  console.log(resp.data);
                  navigate('/', { replace: true });
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
              companyName: 'xxx股份有限公司',
              corporation: '张三',
              phone: '15327768830',
              address: '江西-南昌',
              email: '110@163.com',
              password: '',
              companyCode: '',
              dd:'',
              rz:'',
              gm:'',
              ly:'',
              policy: false,
            }}
            validationSchema={
              Yup.object().shape({
                companyName: Yup.string().max(255).required('企业名字必须填'),
                corporation: Yup.string().max(255).required('法人代表名必填'),
                phone: Yup.string().min(4,"座机号不能小于4位").max(11,"手机号不能超过11位").required('联系方式必填'),
                address: Yup.string().max(255).required('地址必填'),
                email: Yup.string().email('必须是一个邮箱').max(255).required('邮箱必填'),
                password: Yup.string().min(8,"密码长度必须大于8位,不能太短").max(255).required('密码必填'),
                companyCode: Yup.string().min(4,"机构码长度必须大于4位").max(255).required('机构码作为认证必填'),
                dd: Yup.string().required('需要选择公司地点'),
                rz: Yup.string().required('需要选择融资情况'),
                gm: Yup.string().required('需要选择公司规模'),
                ly: Yup.string().required('需要选择行业领域'),
                policy: Yup.boolean().oneOf([true], '必须阅读服务条款'),
              })
            }
            onSubmit={(values,credentials) => {
                console.log(values);
                setTimeout(() => {
                    credentials.setSubmitting(false);
                  }, 100);
                sendForm(values);
              
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
                <TextField
                  fullWidth
                  error={Boolean(touched.companyCode && errors.companyCode)}
                  helperText={touched.companyCode && errors.companyCode}
                  label="机构代码证编号"
                  margin="normal"
                  name="companyCode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.companyCode}
                  variant="outlined">
                </TextField>
                <TextField
                  select
                  error={Boolean(touched.dd && errors.dd)}
                  helperText={touched.dd && errors.dd}
                  className={classes.selectBox}
                  id="dd"
                  label="公司地点"
                  margin="normal"
                  name='dd'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.dd}
                  variant="outlined"
                >
                  {dd.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  error={Boolean(touched.rz && errors.rz)}
                  helperText={touched.rz && errors.rz}
                  className={classes.selectBox}
                  id="rz"
                  label="融资阶段"
                  margin="normal"
                  name='rz'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.rz}
                  variant="outlined"
                >
                  {rz.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  error={Boolean(touched.gm && errors.gm)}
                  helperText={touched.gm && errors.gm}
                  className={classes.selectBox}
                  id="gm"
                  label="公司规模"
                  margin="normal"
                  name='gm'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gm}
                  variant="outlined"
                >
                  {gm.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  error={Boolean(touched.ly && errors.ly)}
                  helperText={touched.ly && errors.ly}
                  className={classes.selectBox}
                  id="ly"
                  label="行业领域"
                  margin="normal"
                  name='ly'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ly}
                  variant="outlined"
                >
                  {ly.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
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
                    注册
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
