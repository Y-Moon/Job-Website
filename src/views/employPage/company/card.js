import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
	Card,
	CardContent,
	Divider,
	ButtonGroup,
	Button,
	TabPanel,
	Grid
	} from '@material-ui/core';
import companyData from "./companyData";
const useStyles = makeStyles((theme) => ({
	root:{
		
	},
	card_stype:{
		width:350,
		height:300,
	},
	pic:{
		display:"block",
		margin:"10px auto",
		width:"150px",
		height:"150px",
		border:" 1px solid",
	},
	button:{
		width:100,
	}
	}))
	
const PageCard= () =>{
  const classes = useStyles();
  CardOne.PropTypes={
    pic: PropTypes.String,
    cname: PropTypes.String,
    introduce: PropTypes.String,
	comments: PropTypes.INT,
	job: PropTypes.INT,
	handle: PropTypes.String,
  }
  function CardOne(props) {
	const { pic, cname, introduce,comments,job,handle, ...other } = props;
    return (
    <Card className={classes.card_stype}>
		<CardContent>
			<img src={pic} alt="company_picture" className={classes.pic}/>
			<Typography align="center" >
				{cname}
			</Typography>
			<Typography align="center" gutterBottom>
				{introduce}
			</Typography>
			<Divider/>
			        <Button className={classes.button}>
						{comments}
						<br/>
						面试评价
					</Button>
			        <Button  className={classes.button}>
						{job}
						<br/>
						在招职位
					</Button>
			        <Button  className={classes.button}>
						{handle}
						<br/>
						简历处理率
					</Button>
		</CardContent>
    </Card >
    );
  }
  return(
  <div className={classes.root}>
	  <Grid
	    container
	    spacing={2}
	  >
	  {
	    companyData.map((companyObj,index)=>(
		  <Grid
			item
		  >
			<CardOne 
			pic={companyObj.pic} 
			cname={companyObj.name}
			introduce={companyObj.introduce}
			comments={companyObj.comments}
			job={companyObj.job}
			handle={companyObj.handle}
			/>
		  </Grid>
	    ))
	  }
	  </Grid>
  </div>
  );
}
export default  PageCard;
