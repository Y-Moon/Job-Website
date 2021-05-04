import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import getCookie from 'src/components/CookieUntils';
import request from 'src/components/Request';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: '杭州',
  country: '中国',
  name: '阿里巴巴',
  timezone: 'UTC+8'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));
const Profile = ({ className, ...rest }) => {
  const classes = useStyles();
  const [state,setState]=React.useState(0);
  const [companyEntity,setCompanyEntity]=React.useState({
	"companyName":"",
	"address":"",
	"date":"",
	"picture":""
  });
  const picButton=React.useRef();
  let username=getCookie(document.cookie,"userName");
  function handleSubmitPic(e){
	  console.log(e.target.files[0]);
	  let file=e.target.files[0];
	  let name=file.name
	  if(file!=null||"undefined" == typeof file){
		  if(name!=null||"undefined" == typeof name){
			  console.log(name);
			  let extName=name.substring(name.lastIndexOf(".")+1,name.length).toLowerCase();
			  console.log(extName);
			  if(extName=='jpg'||extName=='png'){
				  let url="http://localhost:8010/company/setPic"
				  let formData=new FormData();
				  formData.append("companyName",username);
				  formData.append("file",file);
				  request(url,formData,"post").then(resp=>{
					  console.log(resp.data);
				  })
			  }
		  }
	  }
  }
  
  React.useEffect(()=>{
	  if(state===null||state==0){
		  setState(1);
		  console.log(username);
		  let url="http://localhost:8010/company/getCompanyRole";
		  request(url,{"username":username},"get").then(resp=>{
			  console.log(resp.data);
			  setCompanyEntity(resp.data);
		  })
	  }
  })
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={"http://localhost:8010/images/company/"+companyEntity.picture}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {companyEntity.companyName}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {companyEntity.address}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${companyEntity.date}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
		  component="label"
        >
			上传照片
		 <input type="file" name="name" onChange={handleSubmitPic} hidden/>
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
