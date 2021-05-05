import React from 'react'
import {
	Avatar,
	makeStyles,
	Box,
	Container,
	Card,
	TextField,
	Button,
	 } from '@material-ui/core';
//本地引入
import request from 'src/components/Request'
import getCookie from 'src/components/CookieUntils'

const useStyles = makeStyles((theme) => ({
	root:{
		position:'relative',
		paddingLeft :50,
		width:"100%",
		marginLeft:'100px'
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
	formCard:{
		margin:"0 auto 30px auto",
		padding:"30px",
		width:"400px",
	},
	buttonSubmit:{
		marginTop:'15px',
	},
	aStyle:{
		position:'absolute',
		top:'-10px',
		left:'-5px',
	},
	introduceStyle:{
		marginLeft:'30px'
	}
}));
const MyselfView=()=>{
	const classes = useStyles();
	let url='http://localhost:8010/employPage/mine/user'
	const [state,setState]=React.useState(0);
	const [styleState,setStyleState]=React.useState(true);
	const [user,setUser]=React.useState();
	const formRef=React.useRef();
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
	function onSearch(){
		let requestData={};
		let inputs=formRef.current.getElementsByTagName('input');
		console.log(inputs);
		for(let index =0;index< inputs.length-1;++index){
			let str=inputs[index].value.trim();
			if(str!=""&&str!=null){
				let tname=inputs[index].name;
				let tvalue=inputs[index].value;
				requestData={...requestData,[tname]:tvalue}
			}
		}
		console.log(requestData);
	}
	function handleWrite(){
		setStyleState(!styleState);
	}
	return (
		<Container className={classes.root}>
			  <Button className={classes.aStyle} onClick={handleWrite}>
					编辑
			  </Button>
			  <Box display={styleState?'block':'none'} className={classes.introduceStyle}>
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
			  </Box>
			  <Box  display={styleState?'none':'block'}>
				<Card className={classes.formCard} >
					<form ref={formRef}>
						<TextField fullWidth name='nickName' label="姓名" variant="outlined" margin='normal'/>
						<TextField fullWidth name='introduce' label="简介" variant="outlined" margin='normal'/>
						<TextField fullWidth name='jobIntroduce' label="职业介绍" variant="outlined" margin='normal'/>
						<Button 
							fullWidth 
							component="label"
							>
							上传照片
							<input type='file' hidden />
						</Button>
						<Button 
							fullWidth
							size='large' 
							className={classes.buttonSubmit}
							onClick={onSearch}
							>
							提交
						</Button>
					</form>
				</Card>
			  </Box>
			  <br/>
			  <p className={classes.title}>此信息用于站内言职社区功能，不会同步修改简历</p>
			  <br/>
		</Container>
	)
}
export default MyselfView;
