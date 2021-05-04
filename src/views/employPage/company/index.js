import React, { useState, useRef } from 'react';
import Page from 'src/components/Page';
import request from 'src/components/Request';
import {
  makeStyles,
  Box
} from '@material-ui/core';
import PageCard from './card';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(8),
    minHeight: '100%'
  },
  tabItemContainer: {
    height: '40px',
    lineHeight: '40px'
  },
  tabItem: {
    padding: '5px 10px',
    margin: '2px',
    color: 'black',
    cursor: 'pointer'
  },
  tabItemActive: {
    background: 'RGB(63,81,181)',
    color: '#FFF'
  },
  topStyle: {
    width: '1000px'
  }
}));

const CompanyView = () => {
  const classes = useStyles();
  const [cardData, setCardData] = useState();
  const [topbar, setTopbar] = useState();
  const companyKey=["dd","rz","gm","ly"];
  let url='http://localhost:8010/employPage/companyList';
  let headData = [
    {
      title: '公司地点：', // dd
      items: ['全国', '北京', '上海', '深圳', '广州', '杭州', '成都', '南京', '武汉', '西安', '厦门', '长沙', '苏州', '天津','其他']
    }, {
      title: '融资阶段：', // rz
      items: ['不限', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '上市公司', '不需要融资']
    }, {
      title: '公司规模：', // gm
      items: ['不限', '少于15人', '15-50人', '50-150人', '150-500人', '500-2000人', '2000人以上']
    }, {
      title: '行业领域：', // ly
      items: ['不限', '移动互联网', '电商', '金融', '企业服务', '教育', '文娱|内容', '游戏', '消费生活', '硬件']
    }
  ];
  React.useEffect(()=>{
    if(cardData==null){
      request(url,{'dd': 1,'rz':1,'gm':1,'ly':1},'get').then(resp=>{
        // console.log(resp.data);
        setCardData(resp.data);
        if(topbar==null){
          let elements={'dd':document.getElementById('dd,1')
                        ,'rz':document.getElementById('rz,1')
                        ,'gm':document.getElementById('gm,1')
                        ,'ly':document.getElementById('ly,1')}
          setTopbar({"elements":elements,"topState":{'dd':1,'rz':1,'gm':1,'ly':1}});
          // console.log(elements);
        }
      })
    }
  });
  const handleClick = (e) => {
    const focus=e.target;
    let data=focus.getAttribute('data');
    data=data.split(',');
    topbar.elements[data[0]].classList.remove(classes.tabItemActive);
    focus.classList.add(classes.tabItemActive);
    setTopbar({"elements":{...topbar.elements,[data[0]]:focus},
                "topState":{...topbar.topState,[data[0]]:Number(data[1])}
              });
    // console.log(topbar.topState);
    request(url,topbar.topState,'get').then(resp=>{
      console.log(resp.data);
    });
  };
  return (
    <Page
      className={classes.root}
      title='company list'
    >
      <Box className={classes.topStyle}>
        {headData.map((i, idx) => (
          <div key={idx} className={classes.tabItemContainer} >
            <b>{i.title}&nbsp;</b>
            {i.items.map((i, idx2) => 
              <a
                onClick={handleClick}
                className={[classes.tabItem, idx2 === 0 ? classes.tabItemActive : null].join(' ')}
                key={idx2}
                data={[companyKey[idx],idx2+1]}
                id={[companyKey[idx],idx2+1]}
                >
                  {i}
              </a>)}
          </div>
        ))}
      </Box>
      <Box mt={5}>
        <PageCard cardMessage={cardData} />
      </Box>
    </Page>);
};
export default CompanyView;