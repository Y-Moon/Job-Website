import React from 'React';
import axios from 'axios';
import { 
	makeStyles,
	Box,
	Tabs,
	Tab
 } from '@material-ui/core';
const TopBar=(props)=>{
	const [state,setState]=React.useState(0);
	//bar变化function
	return (
	<Box>
		<Tabs 
		value={props.value}
		indicatorColor="primary"
		textColor="primary"
		onChange={props.handleChange}
				>
			<Tab label='热门招聘' value={0}></Tab>
			<Tab label='最新招聘' value={1}></Tab>
		</Tabs>
	</Box>
	);
};
export default TopBar;