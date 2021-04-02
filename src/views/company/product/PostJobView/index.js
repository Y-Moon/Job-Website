import React, { useState } from 'react';
import Page from 'src/components/Page';
//本地引入
import Slider from './silder';
import SelectView from './select';
import BenefitsView from './benefits';
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
	return(
		<Page
			className={classes.root}
			title="发布招聘信息"
		>
		<Container
		   className={classes.container}
		>
		  <Card 
		    className={classes.card}
		  >
			<CardHeader
			className={classes.header}
			  title="岗位介绍"
			/>
			<Divider variant="middle"/>
			<CardContent
			  className={classes.content}
			>
				<Box textAlign='center'>
					<TextField id="standard-basic" label="岗位" />
				</Box>
				<br/>
				<TextField
				   className={classes.textField1}
				   id="outlined-multiline-static"
			       label="职能介绍"
				   fullWidth
				   multiline
				   rows={6}
				   defaultValue=""
				   variant="outlined"
				  />
				  <br/>
				  <TextField
				    className={classes.textField1}
				    id="outlined-multiline-static"
				    label="岗位要求"
				    fullWidth
				    multiline
				    rows={6}
				    defaultValue=""
				    variant="outlined"
				  />
				  <Slider
				    max={10}
				    label="年"
				  />
				  
				  </CardContent>
				</Card>
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
					
					<SelectView/>
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
					<BenefitsView/>
				  </CardContent>
				</Card>
				<Box mt={5} textAlign='center'>
					<Button variant="outlined" color="primary" startIcon={<KeyboardArrowUpIcon />}>
						提交
					</Button>
				</Box>
		</Container>
		</Page>
	);
};
export default PostJobView;