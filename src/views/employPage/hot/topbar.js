import React from 'React';
import axios from 'axios';
import { 
	makeStyles,
	Box,
	Tabs,
	Tab
 } from '@material-ui/core';
let value=0;
const TopBar=(props)=>{
	const [state,setState]=React.useState([]);
	//bar变化function
	const handleChange=(event,newState)=>{
		value=newState;
		let req=newState+"-1";
		reqHandle(req);
		props.topbarUpdate(state);
		// console.log(state);
	}
	const reqHandle=(req)=>{
		axios.get('http://localhost:8010/employPage/hot/cardList',{params:{"hot":req}}).then(resp=>{
			setState(resp.data);
			console.log(state)
		},error=>{
			console.log(error);
		});
	}
	React.useEffect(()=>{
		if(state.length===0||state==null){
			reqHandle("0-1");
		}
	}
	)
	return (
	<Box>
		<Tabs 
		value={value}
		indicatorColor="primary"
		textColor="primary"
		onChange={handleChange}
				>
			<Tab label='热门招聘' value={0}></Tab>
			<Tab label='最新招聘' value={1}></Tab>
		</Tabs>
	</Box>
	);
};
export default TopBar;