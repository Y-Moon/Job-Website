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
     <Divider fixed />
     <Container className={classes.BottomText}>
      <Box className={classes.footerBox}>
        <Box fontWeight="fontWeightBold" className={classes.footerTitle}>企业服务</Box>
        <Box >企业服务</Box>
        <Box>企业服务</Box>
        <Box>企业服务</Box>
      </Box>
      <Box className={classes.footerBox}>
        <Box fontWeight="fontWeightBold" className={classes.footerTitle}>企业服务</Box>
        <Box >企业服务</Box>
        <Box>企业服务</Box>
        <Box>企业服务</Box>
      </Box>
      <Box className={classes.footerBox} >
        <Box fontWeight="fontWeightBold" className={classes.footerTitle}>企业服务</Box>
        <Box>企业服务</Box>
        <Box>企业服务</Box>
        <Box>企业服务</Box>
      </Box>
    </Container>
    </Container>
  );
}
