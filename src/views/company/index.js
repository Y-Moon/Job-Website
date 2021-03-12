import React from 'react';
import axios from 'axios';
import Page from 'src/components/Page';
import {
  makeStyles,
  Typography
} from '@material-ui/core';
import CardList from '../hot/cardLayout';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2)
  },
  tabItemContainer: {
    height: '40px',
    lineHeight: '40px'
  },
  tabItem: {
    padding: '0 10px',
    color: 'black',
    cursor: 'pointer'
  },
  tabItemActive: {
    background: 'RGB(63,81,181)',
    color: '#FFF',
    padding: '4px 8px'
  }
}));
const CompanyView = () => {
  const classes = useStyles();
  let paramKeys = ['dd', 'rz', 'gm', 'ly'];
  let params = {};
  paramKeys.forEach(i => params[i] = 1);
  let lastIdMap = {};
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
  let handleClick = (e) => {
    let target = e.target;
    let data = target.getAttribute('data');
    if (target.tagName !== 'A' || !data) return;
    data = data.split('-');
    let k = data[0];
    let id = data[1];
    let siblings = target.parentNode.children;
    siblings[lastIdMap[k]].classList.remove(classes.tabItemActive);
    target.classList.add(classes.tabItemActive);
    lastIdMap[k] = id;
    setParams({ k, v: id });
    console.log(params);
    // axios.get('url',{params}).then(r => {
    //
    // });
  };
  return (
    <Page
      className={classes.root}
      title='company list'
      onClick={handleClick.bind(this)}
    >
      {headData.map((i, idx) => (
        <div key={idx} className={classes.tabItemContainer}>
          <b>{i.title}&nbsp;</b>
          {i.items.map((i, idx2) => <a
            className={[classes.tabItem, idx2 === 0 ? classes.tabItemActive : null].join(' ')}
            data={paramKeys[idx] + '-' + (idx2 + 1)}
            key={idx2}>{i}</a>)}
        </div>
      ))}
      <CardList />
    </Page>);
};
export default CompanyView;
