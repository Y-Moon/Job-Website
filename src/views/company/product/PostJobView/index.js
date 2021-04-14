import React, { useState } from 'react';
import axios from 'axios';
import Page from 'src/components/Page';
//本地引入
import Slider from './silder';
import SelectView from './select';
import BenefitsView from './benefits';
import DialogView from './dialog';
import JobIntroduceView from './jobIntroduce';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
//material组件
import {
	makeStyles,
	Button,
	TextField,
	Box,
	Container,
	Typography,
	Card,
	CardHeader,
	CardContent,
	Divider,
	
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
  textField1:{
	  marginTop:15,
  }
}));
const  PostJobView=()=>{
	const classes = useStyles();
	let test=React.useRef();
	let url='http://127.0.0.1:8010/company/addCard';
	let experience=[0,0];
	let category="1-1";
	let jobKey=["","","","",""];
	let benefits=["","","","",""];
	let salary="0-0";
	const handleSubmit=()=>{
		console.log("提交");
		let jobName=document.getElementById("jobName").value;
		let introduce=document.getElementById("introduce").value;
		let jobCondition=document.getElementById("jobCondition").value;
		let formdata=new FormData();
		jobKey=arrayToString(jobKey);
		benefits=arrayToString(benefits);
		// console.log(jobName);
		// console.log(introduce);
		// console.log(jobCondition);
		// console.log(experience);
		// console.log(category);
		// console.log(jobKey);
		// console.log(benefits);
		// console.log(salary);
		formdata.append('jobName',jobName);
		formdata.append('introduce',introduce);
		formdata.append('jobCondition',jobCondition);
		formdata.append('experience',experience);
		formdata.append('category',category);
		formdata.append('jobKey',jobKey);
		formdata.append('benefits',benefits);
		formdata.append('salary',salary);
		postSubmit(formdata);
	}
	const arrayToString=(array)=>{
		let str="";
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
	const postSubmit=(formdata)=>{
		if(formdata.get("jobName")!=null){
			axios.post(url,formdata).then(resp=>{
				let data=resp.data;
				console.log(data);
			},error=>{
				console.log(error);
			})
		}
		
	}
	const handleCategory=(c,j)=>{
		if(c!=null){
			console.log(c);
			category=c;
		}
		if(j!=null){
			console.log(j);
			jobKey=j;
		}
	}
	const handleBenefit=(benefitKey,s)=>{
		if(benefitKey!=null){
			console.log(benefitKey);
			benefits=benefitKey;
		}
		if(s!=null){
			console.log(s);
			salary=s;
		}
	}
	const handleSilder=(silder)=>{
		experience=silder;
	}
	return(
		<Page
			className={classes.root}
			title="发布招聘信息"
			>
		<DialogView refs={test}/>
		
		<Container
		   className={classes.container}
			>
				<Slider
				  max={10}
				  label="年"
				  getvalue={handleSilder}
				/>
				<JobIntroduceView />
				<Card
				  className={classes.card}
				>
				  <CardHeader
				    className={classes.header}
				    title="岗位版块"
				  />
				  <Divider variant="middle"/>
				  <CardContent
					className={classes.content}
				    >
					<SelectView getValue={handleCategory}/>
			      </CardContent>
				</Card>
				<Card
				  className={classes.card}
				  >
				  <CardHeader
				    className={classes.header}
				    title="福利待遇"
				  />
				  <Divider variant="middle"/>
				  <CardContent
					className={classes.content}
				  >
					<BenefitsView getValue={handleBenefit}/>
				  </CardContent>
				</Card>
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