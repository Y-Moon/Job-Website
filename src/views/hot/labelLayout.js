import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	top_title:{
		marginRight:theme.spacing(3),
	},
	botton_form:{
		marginBotton:theme.spacing(30),
	},
}));
export default function FormControlLabelPosition() {
	const classes=useStyles();
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row className={classes.botton_form}>
		<h3 className={classes.top_title}>城市:</h3>	
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="北京"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="上海"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="广州"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="杭州"
          labelPlacement="end"
        />
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="深圳"
		  labelPlacement="end"
		/>
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="武汉"
		  labelPlacement="end"
		/>
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="太原"
		  labelPlacement="end"
		/>
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="南昌"
		  labelPlacement="end"
		/>
      </FormGroup>
	  <FormGroup aria-label="position" row>
	  	<h3 className={classes.top_title}>行业领域:</h3>	
	    <FormControlLabel
	      value="end"
	      control={<Checkbox color="primary" />}
	      label="移动互联网"
	      labelPlacement="end"
	    />
	    <FormControlLabel
	      value="end"
	      control={<Checkbox color="primary" />}
	      label="电商"
	      labelPlacement="end"
	    />
	    <FormControlLabel
	      value="end"
	      control={<Checkbox color="primary" />}
	      label="金融"
	      labelPlacement="end"
	    />
	    <FormControlLabel
	      value="end"
	      control={<Checkbox color="primary" />}
	      label="企业服务"
	      labelPlacement="end"
	    />
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="教育"
		  labelPlacement="end"
		/>
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="文娱|内容"
		  labelPlacement="end"
		/>
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="游戏"
		  labelPlacement="end"
		/>
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="硬件"
		  labelPlacement="end"
		/>
	  </FormGroup>
	  <FormGroup aria-label="position" row>
		<h3 className={classes.top_title}>公司规模:</h3>	
	    <FormControlLabel
	      value="end"
	      control={<Checkbox color="primary" />}
	      label="少于15人"
	      labelPlacement="end"
	    />
	    <FormControlLabel
	      value="end"
	      control={<Checkbox color="primary" />}
	      label="15-50人"
	      labelPlacement="end"
	    />
	    <FormControlLabel
	      value="end"
	      control={<Checkbox color="primary" />}
	      label="50-150人"
	      labelPlacement="end"
	    />
	    <FormControlLabel
	      value="end"
	      control={<Checkbox color="primary" />}
	      label="150-500人"
	      labelPlacement="end"
	    />
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="500-2000人"
		  labelPlacement="end"
		/>
		<FormControlLabel
		  value="end"
		  control={<Checkbox color="primary" />}
		  label="大于2000人"
		  labelPlacement="end"
		/>
	  </FormGroup>
    </FormControl>
  );
}