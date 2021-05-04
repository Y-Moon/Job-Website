import React from 'react';
import axios from 'axios';
import {
	makeStyles,
	Box,
	Container,
	Button,
	Chip
	}from '@material-ui/core';
//本地引入
import Page from './Page';
import request from './Request';
import getCookie from './CookieUntils';
const useStyles = makeStyles((theme)=>({
	root:{
		minHeight: '100%',
		marginBottom:'200px',
	},
	top:{
		background:"#f7f7f7",
		height:"250px",
		width:"100vw",
		padding:"25px",
		marginBottom:20,
	},
	button:{
		display:'absolute',
	},
	chip:{
		marginRight:'5px',
	},
	
}))
const Content=(props)=>{
	return(
		<Container>
			<Box 
				fontSize='h4.fontSize'
				mt={4}
				fontWeight="fontWeightBold"
				>
				{props.title}
			</Box>
			<Box
				fontSize='h5.fontSize'
				mt={3}
				>
				{props.content}
			</Box>
		</Container>
	)
}
const initData={
	'companyId':'-1',
	'companyName':'公司',
	'jobName':'岗位',
	'salary':'0-0k',
	'address': '杭州',
	'education': '本科',
	'experience':'1-3年',
	'jobKey':'关键字1-关键字2-关键字3',
	'benefits':'节日福利-五险一金-加班补助-员工旅游',
	'introduce':'此处是介绍...',
	'condition':'此处是任职要求',
}
const JobView=(props)=>{
	let classes=useStyles();
	let param=window.location.search;
	param=param.split('=')[1];
	console.log(param);
	let [state,setState]=React.useState(0);
	let [data,setData]=React.useState(initData);
	let username=getCookie(document.cookie,'userName');
	let idJson={'id':param};
	let url='http://localhost:8010/employPage/jobAll';
	let clickurl='http://localhost:8010/employPage/submit';
	let seeurl='http://localhost:8010/employPage/see';
	const initRequest=()=>{
		axios.get(url,{params:idJson}).then(resp=>{
			console.log(resp.data);
			if(resp.data!=null){
				setData(resp.data);
			}
		},error=>{
			console.log(error);
		})
	}
	const handleClick=()=>{
		// let submitData={'username':username,'id':param};
		let submitData=new FormData();
		submitData.append("username",username);
		submitData.append("id",param);
		submitData.append("companyId",data.companyId);
		submitData.append("jobName",data.jobName);
		axios.post(clickurl,submitData).then(resp=>{
			let respdata=resp.data;
			console.log(respdata);
			if(respdata==1){
				console.log("成功");
				window.history.go(-1);
			}
			if(respdata==0){
				console.log("失败")
			}
			if(respdata==2){
				console.log("重复")
			}
		},error=>{
			console.log(error);
		})
	}
	React.useEffect(()=>{
		if(state==0||state==null){
			request(seeurl,idJson,'get').then(resp=>{
				let data=resp.data;
				console.log(data);
			})
			setState(1);
			initRequest();
		}
	})
	return(
		<Page className={classes.root}>
			<Container  className={classes.top}>
				<Box  
					fontSize="h1.fontSize" lineHeight={2}
					ml={3}
					>
					{data.jobName}
				</Box>
				<Box 
					fontSize="h5.fontSize" lineHeight={2}
					ml={3}
					>
					{data.companyName}
				</Box>
				
				<Box 
					fontSize="h3.fontSize" lineHeight={2}
					ml={3}
					>
					{data.salary+"/"+data.address+"/"+data.experience+"/"+data.experience}
				</Box>
				<Box mt={2} ml={3}>
					{
						data.jobKey.split('-').map((c,i)=>(
							<Chip
							  key={i}
							  variant='outlined'
							  label={c}
							  className={classes.chip}
							  />
						))
					}
				</Box>
			</Container>
			<Container>
				<Box ml={3}>
					<Button
						variant="contained" 
						color="primary"
						size='large'
						onClick={handleClick}
						className={classes.button}
						>
						投递简历
					</Button>
				</Box>
				<Content title='职位诱惑:' content={data.benefits}/>
				<Content title='职位描述:' content={data.introduce}/>
				<Content title='任职要求:' content={data.jobCondition}/>
				<Content title='工作地址:' content={data.address}/>
			</Container>
		</Page>
	)
}
export default JobView; 