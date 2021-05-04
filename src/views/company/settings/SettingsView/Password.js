import React, { useState } from 'react';
import PropTypes from 'prop-types';
import request from 'src/components/Request';
import getCookie from 'src/components/CookieUntils';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {}
}));
const Password = ({ className, ...rest }) => {
  const cookies=getCookie(document.cookie,"userName");
  const classes = useStyles();
  const [values, setValues] = useState({
	"username": cookies,
    "oldPassword": '',
    "newPassword": '',
	"confirmPassword": '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  function modifyPassword(){
	  let state=false;
	  if(values.newPassword==values.confirmPassword){
		let formdata=new FormData();
		formdata.append("username",values.username);
		formdata.append("oldPassword",values.oldPassword);
		formdata.append("newPassword",values.newPassword);
		request("http://localhost:8010/company/setPassword",formdata,"post").then(resp=>{
			console.log(resp.data);
		})
	  }
	  state=true;
  }

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          title="密码管理"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Old password"
            margin="normal"
            name="oldPassword"
            onChange={handleChange}
            type="password"
            value={values.oldPassword}
            variant="outlined"
          />
		  <TextField
		    fullWidth
		    label="New password"
		    margin="normal"
		    name="newPassword"
		    onChange={handleChange}
		    type="password"
		    value={values.newPassword}
		    variant="outlined"
		  />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirmPassword"
            onChange={handleChange}
            type="password"
            value={values.confirmPassword}
            variant="outlined"
          />
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
			onClick={modifyPassword}
          >
            更新
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
