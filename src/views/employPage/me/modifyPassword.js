import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
	TextField,
	Box,
	Divider,
	Button,
	makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root:{
		paddingLeft :50,
	},
}));
const ModifyPasswordView=()=>{
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box textAlign="left" m={1} className={classes.threeTab}>
						  登录邮箱:2692946134@qq.com
			</Box>
			  <Divider/>
			  <Box textAlign="left" m={1} className={classes.threeTab}>
				 <TextField
				   id="standard-password-input"
				   label="OldPassword"
				   type="password"
				   autoComplete="current-password"
				 />
			  </Box>
			  <Box textAlign="left" m={1} className={classes.threeTab}>
				<TextField
					id="standard-password-input"
					label="NewPassword"
					type="password"
					autoComplete="current-password"
				  />
			  </Box>
			<Box textAlign="left" m={1} className={classes.threeTab}>
				<Button variant="outlined" color="primary" startIcon={<KeyboardArrowUpIcon  />}>
					 提交
				</Button>
			</Box>
		</Box>
	);
}
export default ModifyPasswordView;