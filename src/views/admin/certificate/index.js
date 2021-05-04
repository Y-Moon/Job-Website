import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import PublicTable from './publicTable';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  let url='http://127.0.0.1:8010/company/candidateList';
  let data=[{"id":-1,"name":"","state":"","school":"","phone":"","date":""}];
  const [candidate,setCandidate] = useState(data);
  const requestDate=(params)=>{
	  axios.get(url,{params:params}).then(resp=>{
			  setCandidate(resp.data);
	  },error=>{
	  		  console.log(error);
	  });
  }
  return (
    <Page
      className={classes.root}
      title="企业资质证书审查"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <PublicTable  />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
