import {
	makeStyles,
	Card,
	CardHeader,
	CardContent,
	Divider,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  textField:{
	  width:130,
	  marginRight:theme.spacing(2),
  },
  content:{
  	  textAlign:'left',
  	  paddingTop:'20px',
  	  
  },
  card:{
  	  marginTop:'20px',
  	  marginBottom: '20px',
  	  padding:"20px",
  },
  header:{
  	  textAlign:"center",
  },
}));
 const CardView=(props)=>{
	 const classes = useStyles();
	 return(
		<Card className={classes.card} >
		  <CardHeader
		    className={classes.header}
		    title={props.title}
		  />
		  <Divider variant="middle"/>
		  <CardContent className={classes.content} >
			{props.content}
		  </CardContent>
		</Card>
	 )
 }
 export default CardView;