import {
	makeStyles,
	TextField,
	Box,
	Container,
	Typography,
	Card,
	CardHeader,
	CardContent,
	Divider,
} from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
		textField:{
		   marginTop:20,
		},
}));
const JobIntroduceView=()=>{
	const classes=useStyles();
	return(
		<Card
		  className={classes.card}
		>
		  <CardHeader
		    title="岗位介绍"
		  />
			<Divider variant="middle"/>
			<CardContent
			  className={classes.content}
			>
				<Box 
				  textAlign='center'
				  mb={3}
				>
					<TextField 
					  id="jobName" 
					  label="岗位(必)"
					/>
				</Box>
				
				<TextField
				   className={classes.textField}
				   id="introduce"
				   label="职能介绍"
				   fullWidth
				   multiline
				   rows={6}
				   defaultValue=""
				   variant="outlined"
				/>
				<TextField
					className={classes.textField}
					id="jobCondition"
					label="岗位要求"
					fullWidth
					multiline
					rows={6}
					defaultValue=""
					variant="outlined"
				/>
			</CardContent>
		</Card>
	)
}
export default JobIntroduceView;