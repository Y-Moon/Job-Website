import React from 'react';
import PropTypes from 'prop-types';
import {
	makeStyles,
	Divider,
	Typography,
	Tabs,
	Tab,
	Box,
	Button
	 } from '@material-ui/core';
import Page from 'src/components/Page';

import MyselfView from './myselfMessage';
import ModifyPasswordView from './modifyPassword';
import BindingView from './binding';
import PrivacyView from './privacy';
import MyIntroduction from './myIntroduction';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Page
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
	  title="me"
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Page>
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
	minHeight: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
	height:"200px",
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
  typography: {
      fontSize: 12,
	  color:"#BEBEBE",
    },
	title: {
	  fontSize: 12,
	  color: '#BEBEBE',
	  margin: '10px 0',
	  textAlign: 'center'
	},
}));

const MYView =()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <Page className={classes.root}>
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
    <TabPanel value={value} index={0} >
        <MyselfView/>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <BindingView/>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <PrivacyView/>
    </TabPanel>
    <TabPanel value={value} index={3} >
		<ModifyPasswordView/>
    </TabPanel>

    <TabPanel value={value} index={4}>
      <MyIntroduction/>
    </TabPanel>
  </div>
  
  </Page>
  );
}
export default MYView;