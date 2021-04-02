import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';

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
  let data=[{"id":-1,"name":"","state":"","school":"","phone":"","date":""}];
  const [candidate,setCandidate] = useState(data);
  const requestDate=(params)=>{
	  axios.get("http://127.0.0.1:8010/company/candidateList",{params:params}).then(resp=>{
			  setCandidate(resp.data);
	  },error=>{
	  		  console.log(error);
	  });
  }
  React.useEffect(()=>{
	  console.log("effect is run...");
	  if(candidate[0].id==-1){
		requestDate();
	  }
  }
  );
  return (
    <Page
      className={classes.root}
      title="广场"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Results customers={candidate} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
