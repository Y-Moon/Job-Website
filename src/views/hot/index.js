import React from 'react';
import {
  Container,
  makeStyles,
  Divider,
  Typography,
  Box
} from '@material-ui/core';
import Page from 'src/components/Page';
import CardList from './cardLayout.js';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const HotView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title='Hot Job'
    >
      <Container maxWidth='lg'>
        <Typography component='div'>
          <Box textAlign='center' fontSize='h1.fontSize' m={2}>
            这里是轮播图
          </Box>
        </Typography>
        <CardList />
      </Container>
    </Page>
  );
};

export default HotView;
