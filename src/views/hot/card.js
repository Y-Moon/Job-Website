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
		height: '100%'
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
export default function PageCard() {
  const classes = useStyles();

  function CardOne() {
    return (
    <Card className={classes.card_stype}>
		<CardContent>
			<Typography className={classes.typography_title} noWrap >
				安卓开发工程师
			</Typography >
			 <Typography  className={classes.typography_money}>
			 	50k-100k
			 </Typography >
			  <Typography  className={classes.fontSmall} color="textSecondary" gutterBottom>
				经验1-3年 / 本科
			  </Typography>
			  <div >
			      <Chip className={classes.chip_style} label="java" size="small" variant="outline" />
			      <Chip className={classes.chip_style} label="spring" size="small" variant="outline" />
			      <Chip className={classes.chip_style} label="linux" size="small" variant="outline" />
			      <Chip className={classes.chip_style} label="mysql" size="small" variant="outline" />
			      <Chip className={classes.chip_style} label="mysql" size="small" variant="outline" />
			  </div>
			  <Divider className={classes.hr_style} />
		  	<Avatar className={classes.company_pic}>H</Avatar>
			 <Typography gutterBottom>
			 <a href="https://www.baidu.com" className={classes.a_company}>
				博库网
			</a>	
			 </Typography >
			 <Typography className={classes.fontSmall} color="textSecondary" noWrap >
			 	福利多多福利多多福利多福利多多福利多多福利多福利多多福利多多福利多福利多多福利多多福利多
			 </Typography >
		</CardContent>
    </Card >
    );
  }
  return (
    <div >
	  <CardOne/>
    </div>
  );
}
