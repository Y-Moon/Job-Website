import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Container,
  Divider,
  Typography,
  Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
	height:'2000px',
    position: 'relative',
	display: 'block',
    bottom: 0,
  },
  boxStyle: {
    display: 'flex',
    argin: theme.spacing(5),
    width: '300px'

  },
  footerBox: {
    width: '33%',
    float: 'left',
    textAlign: 'center'
  },
  
  footerTitle: {
    marginBottom: '20px',
  },
  BottomText: {
	  padding:theme.spacing(3),
  },
  boxsize:{
	  height:"23vh",
  }
}));
export default function CustomizedTables() {
  const classes = useStyles();
  return (
  <Container className={classes.boxsize}>
     <Divider  />
     <Container className={classes.BottomText}>
      <Box className={classes.footerBox}>
        <Box fontWeight="fontWeightBold" className={classes.footerTitle}>企业服务</Box>
        <Box m={1}>招聘抢人宝典</Box>
        <Box m={1}>公司搜索</Box>
        <Box m={1}>企业服务</Box>
      </Box>
      <Box className={classes.footerBox}>
        <Box fontWeight="fontWeightBold" className={classes.footerTitle}>用户帮助</Box>
        <Box m={1}>用户协议</Box>
        <Box m={1}>隐私政策</Box>
        <Box m={1}>在线提问</Box>
      </Box>
      <Box className={classes.footerBox} >
        <Box fontWeight="fontWeightBold" className={classes.footerTitle}>联系方式</Box>
		<Box m={1}>服务热线:110</Box>
		<Box m={1}>企业服务热线:120</Box>
		<Box m={1}>联系我们</Box>
      </Box>
    </Container>
    </Container>
  );
}
