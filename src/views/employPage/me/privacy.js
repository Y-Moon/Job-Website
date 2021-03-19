import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
	Box,
	Typography,
	makeStyles,
	Checkbox,
	FormControlLabel,
	FormControl,
	RadioGroup,
	Radio
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root:{
		width:"81vh",
		paddingLeft :50,
		marginLeft:"10vh",
	},
	gray_font: {
	  fontSize: 14,
	  color: '#828282',
	},
	redioBox_sty:{
		marginLeft:"400px",
	}
}));
const MyselfView=()=>{
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box  display="inline" >
				隐私设置
			</Box>
			<Box  display="inline">
			<FormControlLabel
			          value="end"
			          control={<Checkbox color="primary" />}
			          label="开启隐藏"
			          labelPlacement="end"
					  className={classes.redioBox_sty}
			        />
			</Box>
			<Typography className={classes.gray_font} >
				隐藏后，您的简历将不会推荐给HR，也无法被搜索到，只有你投递到公司才可以查看你的简历
			</Typography>
			<Box  mt={5} mb={1}>
				匿名展示
			</Box >
			<Typography  className={classes.gray_font} >
				选中匿名展示后，HR无法看到你的真实姓名
			</Typography >
			<FormControl component="fieldset">
			      <RadioGroup aria-label="gender" name="gender1" className={classes.gray_font}>
			        <FormControlLabel value="female" control={<Radio />} label={"乐yue"+"(实名展示)"} />
			        <FormControlLabel value="male" control={<Radio />} label={"乐先生"+"(匿名展示)"} />
			      </RadioGroup>
			    </FormControl>
		</Box>
	);
}
export default MyselfView;