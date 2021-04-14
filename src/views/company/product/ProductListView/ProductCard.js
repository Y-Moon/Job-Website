import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Fab
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Visibility from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  button:{
	  background:'#FFF',
	  boxShadow:'0 0 0 0 #FFF'
  }
}));

const ProductCard = ({ className, product, delcard,...rest }) => {
  const classes = useStyles();
  const handleDelete=()=>{
	  delcard(product.id);
	  console.log("delete:  "+product.id);
  }
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
	  <Fab 
		size='small'
		variant='round'
	  	className={classes.button}
		onClick={handleDelete}
	  	>
	  	<CloseIcon
			fontSize='small'
			/>
	  </Fab >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Avatar
            alt="Product"
            src={product.media}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.jobName}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {product.introduce}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <Visibility
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
			  浏览
              {product.see}
              次
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
