import React, { useState } from 'react';
import axios from 'axios';
import Page from 'src/components/Page';
//本地引入
import ConditionView from './condition';
import JobCategoryView from './jobCategory';
import BenefitsView from './benefits';
import JobIntroduceView from './jobIntroduce';
import getCookie from 'src/components/CookieUntils';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
//material组件
import {
	makeStyles,
	Button,
	Box,
	Container,
} from '@material-ui/core';

//按钮样式定义
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:"center",
  },
  container:{
	  width:700,
	  padding:"50px",
	  margin:"1px auto"
  },
  card:{
	  marginTop:'20px',
	  marginBottom: '20px',
	  padding:"20px",
  },
  header:{
	  textAlign:"center",
  },
  content:{
	  textAlign:'left',
	  paddingTop:'20px',
	  
  },
}));
let initData={
	jobName:"",
	introduce:"",
	jobCondition:"",
	experience:"0-0年",
	education:"不限",
	isSchool: 0,
	address:"全国各地",
	category:"1-1",
	jobKey:[],
	benefits:[],
	salary:"0k-0k",
}
const  PostJobView=()=>{
	const classes = useStyles();
	const companyName=getCookie(document.cookie,'userName');
	let url='http://127.0.0.1:8010/company/addCard';
	const handleSubmit=()=>{
		
		// let formdata=new FormData();
		initData.jobKey=arrayToString(initData.jobKey);
		initData.benefits=arrayToString(initData.benefits);
		// let keys=Object.keys(initData);
		// console.log(keys);
		// for(let s in keys){
		// 	console.log(keys[s]);
		// 	console.log(initData[keys[s]]);
		// 	formdata.append(keys[s],initData[keys[s]]);
		// }
		console.log(initData);
		postSubmit(initData);
	}
	const arrayToString=(array)=>{
		let str="";

		if(array==null){
			return str;
		}
		for(let i=0;i<array.length;i++){
			if(array[i]!=""){
				if(str==""||str==null){
					str=array[i];
				}else {
					str=str+'-'+array[i];
				}
			}
		}
		return str;
	}
	const postSubmit=(initjson)=>{
		console.log("提交");
		initjson={...initjson,username:companyName}
		console.log(initjson);
		// let postData={"jobEntity":initjson,"username": companyName};
		if(initjson["jobName"]!=null&&initjson["jobName"]!=""){
			axios.post(url,initjson).then(resp=>{
				let data=resp.data;
				if(data==1){
					console.log('添加成功');
					window.history.go(-1);
				}else{
					console.log('添加失败,请重试');
				}
				console.log(data);
			},error=>{
				console.log(error);
			})
		}
		
	}
	const handleIntroduce=(jName,jIntroduce,condition)=>{
		if(jName!=null){
			console.log(jName);
			initData.jobName=jName;
		}
		if(jIntroduce!=null){
			console.log(jIntroduce);
			initData.introduce=jIntroduce;
		}
		if(condition!=null){
			console.log(condition);
			initData.jobCondition=condition;
		}
	}
	const handleCategory=(c,j)=>{
		if(c!=null){
			console.log(c);
			initData.category=c;
		}
		if(j!=null){
			console.log(j);
			initData.jobKey=j;
		}
	}
	const handleBenefit=(benefitKey,s)=>{
		if(benefitKey!=null){
			console.log(benefitKey);
			initData.benefits=benefitKey;
		}
		if(s!=null){
			console.log(s);
			initData.salary=s[0]+'k'+'-'+s[1]+'k';
		}
	}
	const handleCondition=(e,s,exp,add)=>{
		if(e!=null){
			console.log(e);
			initData.education=e;
		}else if(s!=null){
			console.log(s);
			initData.isSchool=s;
		}else if(exp!=null){
			console.log(exp);
			initData.experience=exp[0]+'-'+exp[1]+'年';
		}else if(add!=null){
			console.log(add);
			initData.address=add;
		}
	}
	return(
		<Page
			className={classes.root}
			title="发布招聘信息"
			>
		
		<Container
		   className={classes.container}
			>
				<JobIntroduceView getValue={handleIntroduce} />
				<ConditionView getValue={handleCondition}/>
				<JobCategoryView getValue={handleCategory} />
				<BenefitsView getValue={handleBenefit}/>
				<Box mt={5} textAlign='center'>
					<Button 
					  variant="outlined" 
					  color="primary" 
					  startIcon={<KeyboardArrowUpIcon/>}
					  onClick={handleSubmit}
					  >
						提交
					</Button>
				</Box>
		</Container>
		</Page>
	);
};
export default PostJobView;