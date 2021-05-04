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
const UserBlankView=()=>{
	const classes=useStyles();
	return(
		<Page className={classes.root} title="用户黑名单">
			<Container maxWidth={false}>
			  <Box mt={3}>
			    <PublicTable  />
			  </Box>
			</Container>
		</Page>
	)
}
export default UserBlankView;