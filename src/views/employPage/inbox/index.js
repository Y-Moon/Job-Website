import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	Container,
	FormControl,
	FormControlLabel,
	Switch,
	Box
	} from '@material-ui/core';

import Page from 'src/components/Page';
//本地引入
import InBoxTable from './inboxtable';
import ReplyDialog from './replyDialog';
import request from 'src/components/Request'
import getCookie from 'src/components/CookieUntils'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
	maxWidth: '95%',
	minHeight: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
	flexBasis: '60%',
	flexShrink: 0,
  },
  content:{
	  flexBasis: '90%',
	  flexShrink: 0,
  },
  TopButton:{
	  margin:15,
  },
  switchStyle:{
	  marginTop:'15px',
	  marginLeft:'20px',
  }
}));

 function InboxView() {
  const classes = useStyles();
  const delUrl='http://localhost:8010/public/delEmail';
  const getUrl='http://localhost:8010/public/getEmail';
  let username=getCookie(document.cookie,'userName');
  const [state,setState]=React.useState({state:0,inboxState:0});
  const [checkedBox,setCheckedBox]=React.useState([]);
  let mailMessages=checkedBox.slice();
  global.mailState=new Array(mailMessages.length).fill(0);
  function handleDel(){
	  let delId=[];
	  for(let index=0;index<mailState.length;){
		  if(mailState[index]==1){
			let removeMail=mailMessages.splice(index,1);
			mailState.splice(index,1);
			console.log(removeMail);
			delId.push(removeMail[0].id)
		  }else{
			  ++index;
		  }
	  }
	  console.log(mailMessages);
	  console.log(delId);
	  mailState=new Array(mailMessages.length).fill(0);
	  let formData=new FormData();
	  formData.append('ids',delId);
	  setCheckedBox(mailMessages);
	  request(delUrl,formData,'post');
  }
  function handleSwitch(){
	let inboxStateSlice={...state,inboxState:(state.inboxState+1)%2};
	console.log(inboxStateSlice);
	setState(inboxStateSlice);
	handleRequest(inboxStateSlice.inboxState);
	console.log(state);
	
  }
  function handleRequest(state){
	let params={"username":username,"state":state};
	request(getUrl,params,'get').then(resp=>{
		console.log(resp.data);
		let data=resp.data;
		setCheckedBox(data);
	})
  }
  function handleChange(e){
	  let id=Number(e.target.id);
	  // console.log(id);
	  mailState[id]=(mailState[id]+1)%2;
	  console.log(mailState);
  }
  React.useEffect(()=>{
	  if(state.state==0){
		//   console.log(inboxState);
		  setState({...state,state:1});
		  let param={"username": username,"state":0}
		  request(getUrl,param,'get').then(resp=>{
			  setCheckedBox(resp.data);
			  console.log(resp.data);
		  })
	  }
  })
  return (
    <Page title="inbox" className={classes.root}>
		<Container>
			<Button 
				variant="outlined" 
				onClick={handleDel} 
				className={classes.TopButton}
			>
				删除
			</Button>
			<ReplyDialog />
			<FormControl>
				<FormControlLabel
					value="switch"
					control={<Switch color="primary" />}
					label={state.inboxState==0?"发件箱":"收件箱"}
					labelPlacement="end"
					className={classes.switchStyle}
					onClick={handleSwitch}
				/>
			</FormControl>
			<InBoxTable 
				tabValue={mailMessages} 
				onChange={handleChange} 
			/>
		</Container>
    </Page>
  );
}
export default InboxView;