import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Container,
	Divider,
	Typography,
	Box
	} from '@material-ui/core';
export default function CustomizedTables() {
  const classes = makeStyles();
  return (
    <Container component={Paper} >
	  <Divider  />
	  <Box textAlign="left" width="300px" m={1}>
		  <Typography variant="h4" align="left">
					企业服务
		  </Typography>
		  <Typography variant="h4"  align="left">
					企业服务
		  </Typography>
	  </Box>
	  <Box textAlign="left" width="300px" m={1}>
		  <Typography variant="h4" align="center">
					企业服务
		  </Typography>
		  <Typography variant="h4" align="center">
					企业服务
		  </Typography>
	  </Box>
	  <Box textAlign="left" width="300px" m={1}>
		  <Typography variant="h4" align="right">
					企业服务
		  </Typography>
		  <Typography variant="h4" align="right">
					企业服务
		  </Typography>
	  </Box>
    </Container>
  );
}