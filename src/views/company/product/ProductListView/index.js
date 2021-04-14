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
  const [state,setState] = useState(0);
  const [cards,setCards] = useState([]);
  let username=document.cookie;
  username=username.split("=")[1];
  const [index,setIndex] = useState({"start":0,"end":6});
  let urlinit='http://127.0.0.1:8010/company/cardList';
  let urldel='http://127.0.0.1:8010/company/delCard';
  const requestDate=(params)=>{
  	  axios.get(urlinit,{params:params}).then(resp=>{
  			  console.log(resp.data);
			  setCards(resp.data);
  	  },error=>{
  	  		  console.log(error);
  	  });
  }
  React.useEffect(()=>{
	  if(state==0||state==null){
		setState(1);
		let data={"username":username}
	    requestDate(data);
	  }
  });
  const handleChange=(event,page)=>{
	  console.log(page);
	  let end=page*6;
	  setIndex({"start":end-6,"end":end})
  };
  const delRequst=(id)=>{
	  let formdata=new FormData();
	  formdata.append("id",id);
	  axios.put(urldel,formdata).then(resp=>{
		  let result=resp.data;
		  console.log(result);
		  if(result==0){
			  console.log("失败");
		  }else if(result==1){
			  console.log("成功");
		  }
	  },error=>{
		  console.log(error);
	  })
  }
  const deleteCard=(id)=>{
	  let cardsSlice=cards.slice(0,cards.length);
	  for (let i = 0; i < cardsSlice.length; i++) { 
	      if(cardsSlice[i].id==id){
			  cardsSlice.splice(i,1);
			  delRequst(id);
			  break;
		  }
	   }
	  setCards(cardsSlice);
	  console.log(cards);
  }
  return (
    <Page
      className={classes.root}
      title="招聘信息管理"
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
				  delcard={deleteCard}
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
