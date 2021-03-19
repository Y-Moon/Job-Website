import {
	Avatar,
	makeStyles,
	Box,
	 } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	root:{
		width:100%
	},
	title: {
	  fontSize: 12,
	  color: '#BEBEBE',
	  margin: '10px 0',
	  textAlign: 'center'
	},
	portrait: {
		  margin:"0 auto 30px auto",
	    width: theme.spacing(10),
	    height: theme.spacing(10),
	},
}));
const MyselfView=()=>{
	const classes = useStyles();
	return (
	<Box className={classes.root}>
		<Avatar className={classes.portrait}>H</Avatar>
		  <Box textAlign="center" m={1}>
				  姓名
		  </Box>
		  <Box textAlign="center" m={1}>
			  本人很懒,简介什么都没有(个人简介)
		  </Box>
		  <Box textAlign="center" m={1}>
			  本人很懒,简介什么都没有(职业介绍)
		  </Box>
		  <br/>
		  <p className={classes.title}>此信息用于站内言职社区功能，不会同步修改简历</p>
		  <br/>
	</Box>
	)
}
export default MyselfView;
