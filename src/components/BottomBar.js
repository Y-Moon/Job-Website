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
    position: 'absolute',
    bottom: '0rpx'
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
  title: {
    fontSize: 12,
    color: '#BEBEBE',
    margin: '10px 0',
    textAlign: 'center'
  },
  footerTitle: {
    marginTop: '20px'
  }
}));
export default function CustomizedTables() {
  const classes = useStyles();
  return (
    <Container component={Paper} className='clearFix'>
      <Divider />
      <p className={classes.title}>此信息用于站内言职社区功能，不会同步修改简历</p>
      <div className={classes.footerBox}>
        <b>企业服务</b>
        <p className={classes.footerTitle}>企业服务</p>
        <p>企业服务</p>
        <p>企业服务</p>
      </div>
      <div className={classes.footerBox}>
        <b>企业服务</b>
        <p className={classes.footerTitle}>企业服务</p>
        <p>企业服务</p>
        <p>企业服务</p>
      </div>
      <div className={classes.footerBox}>
        <b>企业服务</b>
        <p className={classes.footerTitle}>企业服务</p>
        <p>企业服务</p>
        <p>企业服务</p>
      </div>
      {/*<Box className={classes.boxStyle}  >*/}
      {/*  <Typography variant="h4" align="left">*/}
      {/*			企业服务*/}
      {/*  </Typography>*/}
      {/*  <br/>*/}
      {/*  <Typography variant="h4"  align="left">*/}
      {/*			企业服务*/}
      {/*  </Typography>*/}
      {/*</Box>*/}
      {/*<Box className={classes.boxStyle}   >*/}
      {/*  <Typography variant="h4" align="center">*/}
      {/*			企业服务*/}
      {/*  </Typography>*/}
      {/*  <br/>*/}
      {/*  <Typography variant="h4" align="center">*/}
      {/*			企业服务*/}
      {/*  </Typography>*/}
      {/*</Box>*/}
      {/*<Box className={classes.boxStyle}>*/}
      {/*  <Typography variant="h4" align="right">*/}
      {/*			企业服务*/}
      {/*  </Typography>*/}
      {/*  <br/>*/}
      {/*  <Typography variant="h4" align="right">*/}
      {/*			企业服务*/}
      {/*  </Typography>*/}
      {/*</Box>*/}
    </Container>
  );
}
