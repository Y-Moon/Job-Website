import React from 'react';
import PropTypes from 'prop-types';
import {
	makeStyles,
	Avatar,
	Divider,
	Typography,
	Tabs,
	Tab,
	Box,
	TextField,
	Button
	 } from '@material-ui/core';
import Page from 'src/components/Page';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
	margin:theme.spacing(5),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 220,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  portrait: {
	  margin:"0 auto 30px auto",
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  textLayout: {
	  width:"100%",
	  textAlign:"center",
  },
  contentLayout: {
	  width:"100%",
  },
  typography: {
      fontSize: 12,
	  color:"#BEBEBE",
    },
	threeTab:{
		marginLeft:theme.spacing(5),
		marginTop:theme.spacing(2),
	},

}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <Page>
  <div className={classes.root}>
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      className={classes.tabs}
    >
      <Tab label="个人信息" {...a11yProps(0)} />
      <Tab label="账号绑定" {...a11yProps(1)} />
      <Tab label="隐私处理" {...a11yProps(2)} />
      <Tab label="修改密码" {...a11yProps(3)} />
      <Tab label="简历上传" {...a11yProps(4)} />
    </Tabs>
    <TabPanel value={value} index={0} className={classes.contentLayout}>
      <Avatar className={classes.portrait}>H</Avatar>
	  <Box textAlign="center" m={1}>
	          姓名
	  </Box>
	  <Box textAlign="center" m={1}>
		  本人很懒,简介什么都没有(个人简介)
	  </Box>
	  <Box textAlign="center" m={1}>
		  本人很懒,简介什么都没有(职业介绍)
	  </Box>
	  <br/>
	  <Box textAlign="center" m={1}  >
	  {/*<Typography className={classes.typography} >*/}
		{/*  此信息用于站内言职社区功能，不会同步修改简历*/}
	  {/*</Typography>*/}

	  </Box>
    </TabPanel>
    <TabPanel value={value} index={1}>
      待开发中
    </TabPanel>
    <TabPanel value={value} index={2}>
      待开发中
    </TabPanel>
    <TabPanel value={value} index={3} className={classes.contentLayout}>
      <Box textAlign="left" m={1} className={classes.threeTab}>
      		  登录邮箱:2692946134@qq.com
      </Box>
	  <Divider/>
	  <Box textAlign="left" m={1} className={classes.threeTab}>
		 <TextField
		   id="standard-password-input"
		   label="OldPassword"
		   type="password"
		   autoComplete="current-password"
		 />
	  </Box>
	  <Box textAlign="left" m={1} className={classes.threeTab}>
		<TextField
			id="standard-password-input"
			label="NewPassword"
			type="password"
			autoComplete="current-password"
		  />
	  </Box>
	  <Box textAlign="left" m={1} className={classes.threeTab}>
		<Button variant="outlined" color="primary" startIcon={<KeyboardArrowUpIcon  />}>
	         提交
		</Button>
	  </Box>

    </TabPanel>

    <TabPanel value={value} index={4}>
      待开发中
    </TabPanel>
  </div>
  </Page>
  );
}
