import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
	company_pic:{
		float:"left",
		width:"50px",
		height:"50px",
		marginRight:theme.spacing(2)
	},
	card_stype:{
		width:'350px',
		padding:30,
	},
	fontSmall: {
		fontSize: 13,
	},
  hr_style:{
		marginTop:theme.spacing(1),
		marginBottom:theme.spacing(1)
	},
	chip_style:{
		marginRight:theme.spacing(1.5),
		marginTop:theme.spacing(1)
	},
	typography_title:{
		float:"left",
		width:"100px",
	},
	typography_money:{
		textAlign:"right",
		color:"red"
	},
	a_company:{
		textDecoration:"none",
		color:"#4b4b4b"
	}
	}))
export default function PageCard(props) {
  const classes = useStyles();
  const { jobName, salary,experience,education,jobKey,pic,website,cName, benefits,...other } = props;
  function CardOne() {
    return (
    <Card className={classes.card_stype}>
			<Typography className={classes.typography_title} noWrap >
				{jobName}
			</Typography >
			 <Typography  className={classes.typography_money}>
			 	{salary}
			 </Typography >
			  <Typography  className={classes.fontSmall} color="textSecondary" gutterBottom>
				{experience}/{education}
			  </Typography>
			  <div >
			      <Chip className={classes.chip_style} label="java" size="small" variant="outlined" />
			      <Chip className={classes.chip_style} label="spring" size="small" variant="outlined" />
			      <Chip className={classes.chip_style} label="linux" size="small" variant="outlined" />
			      <Chip className={classes.chip_style} label="mysql" size="small" variant="outlined" />
			      <Chip className={classes.chip_style} label="tcp" size="small" variant="outlined" />
			  </div>
			  <Divider className={classes.hr_style} />
		  	<Avatar className={classes.company_pic}>A</Avatar>
			 <Typography gutterBottom>
				 <a href={website} className={classes.a_company}>
					{cName}
				</a>	
			 </Typography >
			 <Typography className={classes.fontSmall} color="textSecondary" noWrap >
			 	{benefits}
			 </Typography >
    </Card >
    );
  }
  return (
    <div >
	  <CardOne/>
    </div>
  );
}
