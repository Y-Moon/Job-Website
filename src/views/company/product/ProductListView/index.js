import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [cards,setCards] = useState([]);
  const [index,setIndex] = useState({"start":0,"end":6});
  const requestDate=(params)=>{
  	  axios.get("http://127.0.0.1:8010/company/cardList",{params:params}).then(resp=>{
  			  console.log(resp.data);
			  setCards(resp.data);
  	  },error=>{
  	  		  console.log(error);
  	  });
  }
  React.useEffect(()=>{
	  if(cards.length==0||cards==null)
	  requestDate();
  });
  const handleChange=(event,page)=>{
	  console.log(page);
	  let end=page*6;
	  setIndex({"start":end-6,"end":end})
  };
  return (
    <Page
      className={classes.root}
      title="发布招聘信息"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {cards.slice(index.start,index.end).map((card) => (
              <Grid
                item
                key={card.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  product={card}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={Math.ceil(cards.length/6)}
            size="small"
			onChange={handleChange}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
