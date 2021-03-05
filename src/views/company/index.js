import React from 'react';	
import Page from 'src/components/Page';
import {
  makeStyles,
  Typography,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
const CompanyView= () => {
	const classes=useStyles();
	return (
		<Page
		  className={classes.root}
		  title="company list"
		>
		</Page>)
}
export default CompanyView;
