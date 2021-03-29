import React,{forwardRef, useImperativeHandle, useState } from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {},
  card_stype: {
    width: 350,
    height: 300
  },
  pic: {
    display: 'block',
    margin: '10px auto',
    width: '150px',
    height: '150px',
    border: ' 1px solid'
  },
  button: {
    width: 100
  }
}));

function PageCard(props, cardRef) {
  const classes = useStyles();
  let [state, setstate] = useState([]);
  // console.log("子组件刷新");
  useImperativeHandle(cardRef, () => ({
    handleJson: (cardList) => {
      console.log('测试测试');
      setstate(cardList);
    }
  }));
  console.log(state);

  function CardOne(props) {
<<<<<<< HEAD
	const { pic, cname, introduce,comments,job,handle,test, ...other } = props;
	console.log(pic);
	console.log(props);
	
=======
    const { pic, cname, introduce, comments, job, handle, test, ...other } = props;
    console.log(pic);
    console.log(props);

>>>>>>> 425e610a4cf15dd8d6b0f319d887613fddae966d
    return (
      <Card className={classes.card_stype}>
        <CardContent>
          <img src={pic} alt='company_picture' className={classes.pic} />
          <Typography align='center'>
            {cname}
          </Typography>
          <Typography align='center' gutterBottom>
            {introduce}
          </Typography>
          <Divider />
          <Button className={classes.button}>
            {comments}
            <br />
            面试评价
          </Button>
          <Button className={classes.button}>
            {job}
            <br />
            在招职位
          </Button>
          <Button className={classes.button}>
            {handle}
            <br />
            简历处理率
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={classes.root} ref={cardRef}>
      <Grid
        container
        spacing={2}
      >
        {
          state.map((companyObj, index) => (
            <Grid
              item
              key={index}
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

export default forwardRef(PageCard);
// export default  PageCard;
