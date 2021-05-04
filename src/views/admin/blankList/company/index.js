import Page from 'src/components/Page';
import PublicTable from './publicTable';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
const CompanyBlankView=()=>{
	const classes=useStyles();
	return(
		<Page className={classes.root} title="企业黑名单">
			<Container maxWidth={false}>
			  <Box mt={3}>
			    <PublicTable  />
			  </Box>
			</Container>
		</Page>
	)
}
export default CompanyBlankView;