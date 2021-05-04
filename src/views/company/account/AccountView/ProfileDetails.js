import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import request from 'src/components/Request';
import getCookie from 'src/components/CookieUntils';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { replace } from 'formik';

  const useStyles = makeStyles(() => ({
    root: {
  	  
    },
  }));
  let username=getCookie(document.cookie,'userName');
const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate=useNavigate();
  const [state, setState] = useState(0);
  const [values, setValues] = useState({
    companyName: '',
    country: '',
    phone: '',
    personName: '',
	introduce: '',
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  function handleClick(){
  	let url='http://localhost:8010/company/setCompanyRole';
  	request(url,values,"post").then(resp=>{
  		console.log(resp.data);
    });
    window.history.go(0);
  }
  React.useEffect(()=>{
	 if(state===null||state==0){
		setState(1);
		setValues({
		  ...values,
		  username: username,
		})
	  }
  })
  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="这里可以修改企业的基本信息"
          title="企业信息卡"
        />
        <Divider />
        <CardContent>
          <Grid spacing={3} container >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="公司名"
                name="companyName"
                onChange={handleChange}
                value={values.companyName}
                variant="outlined"
              />
            </Grid>
			<Grid
			  item
			  md={6}
			  xs={12}
			>
			  <TextField
			    fullWidth
			    label="国家"
			    name="country"
			    onChange={handleChange}
			    value={values.country}
			    variant="outlined"
			  />
			</Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="责任人名"
                name="personName"
                onChange={handleChange}
                value={values.personName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="责任人手机号码"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
			<TextField
			  fullWidth
			  label="企业介绍"
			  name="introduce"
			  onChange={handleChange}
			  multiline
			  rows={5}
			  variant="outlined"
			/>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
			onClick={handleClick}
          >
            保存更改
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
