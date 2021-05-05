import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import Box from '@material-ui/core/Box';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function InBoxTable(props) {
  const classes = useStyles();
  // console.log(props.tabValue);
  return (
    <div className={classes.root} onChange={props.onChange}>
	  {props.tabValue.length==0?null:props.tabValue.map((emailValue,index)=>(
		<Accordion key={emailValue.id}>
		  <AccordionSummary
		    expandIcon={<ExpandMoreIcon />}
		    aria-label="Expand"
		    aria-controls="additional-actions1-content"
		    id="additional-actions1-header"
		  >
		    <FormControlLabel
		      aria-label="Acknowledge"
		      onClick={(event) => event.stopPropagation()}
		      onFocus={(event) => event.stopPropagation()}
		      control={<Checkbox id={index+""} />}
		      label={emailValue.recipientName==null||emailValue.recipientName==''?
			  		emailValue.recipient+":":emailValue.recipientName+":"}
		    />
			<Box component="span" mt={1.5} ml={5}>
				{emailValue.title}
			</Box>
		  </AccordionSummary>
		  <AccordionDetails>
		    <Typography color="textSecondary">
		      &nbsp;&nbsp;&nbsp;&nbsp;{emailValue.content}
		    </Typography>
		  </AccordionDetails>
		</Accordion>
	  ))}
    </div>
  );
}