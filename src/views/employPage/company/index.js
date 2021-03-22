import React,{ useState,useRef} from 'react';
import axios from 'axios';
import Page from 'src/components/Page';
import {
  makeStyles,
  Typography,
  Box
} from '@material-ui/core';
import PageCard from './card';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
   backgroundColor: theme.palette.background.white,
   padding:theme.spacing(8),
   minHeight: '100%',
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
    color: '#FFF',
  },
  topStyle:{
	  width:'1000px'
  }
}));

const CompanyView = () => {
  let childRef=useRef();
  const classes = useStyles();
  const [state,setState] = useState([]);
  let paramKeys = ['dd', 'rz', 'gm', 'ly'];
  let params = {};
  console.log("父组件");
  paramKeys.forEach(i => params[i] = 1);
  let lastIdMap = {};
  let initJson=[];
  Object.assign(lastIdMap, params);
  let headData = [
    {
      title: '公司地点：', // dd
      items: ['全国', '北京', '上海', '深圳', '广州', '杭州', '成都', '南京', '武汉', '西安', '厦门', '长沙', '苏州', '天津']
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
  let setParams = (param) => {
    // if (param) {
    let k = param['k'];
    params[k] = param['v'];
    // }
    // let res = '';
    // paramKeys.forEach(i => res += `${i}=${params[i]}&`);
    // return res.slice(0, -1);
  };
  const handleClick = (e) => {
    let target = e.target;
    let data = target.getAttribute('data');
    if (target.tagName !== 'A' || !data) return;
    data = data.split('-');
    let k = data[0];
    let id = data[1];
	// console.log(childRef);
    let siblings = target.parentNode.children;
    siblings[lastIdMap[k]].classList.remove(classes.tabItemActive);
    target.classList.add(classes.tabItemActive);
    lastIdMap[k] = id;
    setParams({ k, v: id });
    // console.log(params);
    axios.get('http://localhost:8010/employPage/company/cardList',{params}).then(r => {
		let cardJson=r.data;
		childRef.current.handleJson(cardJson);
		// console.log(state);
    },e=>{
		console.log(e);
	});
  };
  return (
    <Page
      className={classes.root}
      title='company list'
      onClick={handleClick.bind(this)}
    >
	<Box className={classes.topStyle}>
      {headData.map((i, idx) => (
        <div key={idx} className={classes.tabItemContainer}>
          <b>{i.title}&nbsp;</b>
          {i.items.map((i, idx2) => <a
            className={[classes.tabItem, idx2 === 0 ? classes.tabItemActive : null].join(' ')}
            data={paramKeys[idx] + '-' + (idx2 + 1)}
            key={idx2}>{i}</a>)}
        </div>
      ))}
    </Box>
	  <Box mt={5}>
		<PageCard  cardList={initJson} ref={childRef}/>
	  </Box>
    </Page>);
};
export default CompanyView;
