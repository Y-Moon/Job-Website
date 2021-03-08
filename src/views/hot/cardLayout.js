import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
	Grid,
	Paper,
	Tabs,
	Tab,
	Typography,
	Box,
	} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import MyCard from './card.js';
const useStyles = makeStyles((theme) => ({
  root:{
	  paddingLeft: '0',
  },
  paginationStyle:{
	  margin:theme.spacing(5),
	  display:"flex",
	  justifyContent:"center",
  },
  TabPanelStyle:{
	  margin:"0px",
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
export default function NestedGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
  
    <Container maxWidth={false} className={classes.root}>
	<Paper square elevation='0'>
		<Tabs
		  value={value}
		  onChange={handleChange}
		  indicatorColor="primary"
		  textColor="primary"
		>
		  <Tab label="热门职位" {...a11yProps(0)}/>
		  <Tab label="最新职位" {...a11yProps(1)}/>
		</Tabs>
	</Paper>
	<Divider/>
	<Typography >
		<Box m={5}>
		</Box>
	</Typography>
	<TabPanel value={value} index={0} className={classes.TabPanelStyle}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <MyCard />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <MyCard />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <MyCard />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <MyCard />
        </Grid>
		<Grid
		  item
		  lg={4}
		  sm={6}
		  xl={4}
		  xs={12}
		>
		  <MyCard />
		</Grid>
      </Grid>
    </TabPanel>
	
	 <Pagination count={10} className={classes.paginationStyle}>
	 </Pagination>
    </Container>
  );
}