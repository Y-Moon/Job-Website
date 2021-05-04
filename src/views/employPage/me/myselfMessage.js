import React from 'react'
import {
	Avatar,
	makeStyles,
	Box,
	Container,
	 } from '@material-ui/core';
//本地引入
import request from 'src/components/Request'
import getCookie from 'src/components/CookieUntils'

const useStyles = makeStyles((theme) => ({
	root:{
		paddingLeft :50,
		width:"100%",
		marginLeft:"10vh",
	},
	title: {
	  fontSize: 12,
	  color: '#BEBEBE',
	  margin: '10px 0',
	  textAlign: 'center'
	},
	portrait: {
		margin:"0 auto 30px auto",
	    width: theme.spacing(10),
	    height: theme.spacing(10),
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
		<Container className={classes.root}>
			  <Avatar className={classes.portrait}>?</Avatar>
			  <Box fontSize='h5.fontSize' textAlign="center" m={1}>
				  {user!=null&&user.nickName!=""?user.nickName:'未设置昵称'}
			  </Box>
			  <Box fontSize='h5.fontSize' textAlign="center" m={1}>
				 {user!=null&&user.introduce!=""?user.introduce:'未设置简介'}
			  </Box>
			  <Box fontSize='h5.fontSize' textAlign="center" m={1}>
				  {user!=null&&user.jobIntroduce!=""?user.jobIntroduce:'未设置职业介绍'}
			  </Box>
			  <br/>
			  <p className={classes.title}>此信息用于站内言职社区功能，不会同步修改简历</p>
			  <br/>
		</Container>
	)
}
export default MyselfView;
