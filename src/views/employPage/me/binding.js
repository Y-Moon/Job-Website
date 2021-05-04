import React from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
//本地引入
import request from 'src/components/Request'
import getCookie from 'src/components/CookieUntils'
import {
	Box,
	Typography,
	Divider,
	makeStyles,
	Button
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
	root:{
		width:'700px',
		paddingLeft :50,
	},
	threeTab:{
		marginLeft:theme.spacing(5),
		marginTop:theme.spacing(2),
	},
}));
const MyselfView=()=>{
	const classes = useStyles();
	let url='http://localhost:8010/employPage/mine/user'
	const [state,setState]=React.useState(0);
	const [user,setUser]=React.useState();
	React.useEffect(()=>{
		if(state!=null&&state==0){
			setState(1);
			let username=getCookie(document.cookie,'userName');
			request(url,{username:username},'get').then(resp=>{
				let data=resp.data;
				console.log(data);
				if(data!=null){
					setUser(data);
				}
			})
		}
	})
	return (
		<Box className={classes.root}>
			<Typography align='center' display='inline'>
				email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</Typography>
			<Typography align='center' display='inline'>
				{user!=null?user.userName:"xxx@163.com"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</Typography>
			<Button>
			  <LockIcon fontSize='small'/>
			</Button>
		</Box>
	);
}
export default MyselfView;
