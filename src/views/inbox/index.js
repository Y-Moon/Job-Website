import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

 function InboxView() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>阿里集团</Typography>
          <Typography className={classes.secondaryHeading}>关于您的一面通知</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            您通过了我们的面试
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>字节跳动</Typography>
          <Typography className={classes.secondaryHeading}>
            关于您的最终面试通知
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            您通过了面试,请在2021-5-20日到杭州字节跳动分公司报道
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>百度</Typography>
          <Typography className={classes.secondaryHeading}>
            关于二面通知
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            很抱歉不合格,期待你找到称心的公司
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>腾讯</Typography>
		  <Typography className={classes.secondaryHeading}>
		   期待您加入我们公司,在这里给你我们的内推链接
		  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            https://www.baidu.com
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default InboxView;