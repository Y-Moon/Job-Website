import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink as RouterLink,Outlet } from 'react-router-dom';
import BottomBar from '../../components/BottomBar'
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
	Button,
	Drawer,
	AppBar,
	Toolbar,
	List,
	CssBaseline,
	Typography,
	Divider,
	ListItem,
	ListItemText,
	IconButton,
	ListItemIcon,
	Container,
	Box,
	Menu,
	MenuItem
} from '@material-ui/core';
import{
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	MoveToInbox as InboxIcon,
	Mail as MailIcon,
	Face as FaceIcon,
	Home as HomeIcon,
	Business as BusinessIcon,
	School as SchoolIcon,
}from '@material-ui/icons';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  accountButton:{
	  marginLeft:'80vw',
  },
  leftBar:{
	  marginLeft:'7px',
  }
  ,
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  },
}));
const itemsUp = [
  {
    href: '/findJob/hot',
    title: '热门首页'
  },
  {
    href: '/findJob/school',
    title: '校园招聘'
  },
  {
    href: '/findJob/companyList',
    title: '公司'
  }
];
const itemsDown=[
  {
  	href: '/findJob/download',
  	title: '简历下载'
  },
  {
	href: '/findJob/inbox',
	title: '收件箱'
  },
  {
  	href: '/findJob/my',
  	title: '我'
  },
];
const iconsUp=[<HomeIcon />,<SchoolIcon />,<BusinessIcon />];
const iconsDown=[<InboxIcon />,<MailIcon />,<FaceIcon />];
export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [acopen, setAcopen] = React.useState(false);
  const download=(blob,filename)=>{
    // // 字符内容转变成blob地址
    // var blob = new Blob([content]);
     // 创建隐藏的可下载链接
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
    setTimeout(function () { //延时释放
      URL.revokeObjectURL(blob); //用URL.revokeObjectURL()来释放这个object URL
    }, 100);
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleAcOpen = (event) => {
	  setAcopen(event.currentTarget);
  };
  const handleAcClose = (event) => {
	  let target = event.target;
	  let data = target.getAttribute('id');
  	  setAcopen(null);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <ChevronRightIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
             招聘网
          </Typography>
		  <div
			className={classes.accountButton}
		  >
			  <IconButton
				color="inherit"
				aria-controls="ac-appbar"
				aria-haspopup="true"
				onClick={handleAcOpen}
			  >
				<AccountCircle/>
			  </IconButton>
				<Menu
				  id="signout-menu"
				  anchorEl={acopen}
				  elevation={0}
				  getContentAnchorEl={null}
				  anchorOrigin={{
				        vertical: 'bottom',
				        horizontal: 'center',
				      }}
				  transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				  }}
				  keepMounted
				  open={Boolean(acopen)}
				  onClose={handleAcClose}
				>
				  <MenuItem 
				  onClick={handleAcClose} 
				  id={1}
				  component={RouterLink}
				  to={'/findJob/my'}
				  >
				  个人中心
				  </MenuItem>
				  <MenuItem 
				  onClick={handleAcClose} 
				  id={2}
				  component={RouterLink}
				  to={'/'}
				  >
				  登出
				  </MenuItem>
				</Menu>
		  </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
			{itemsUp.map((item,index) => (
			  <ListItem button component={RouterLink}
			    to={item.href}
				key={index}
				className={classes.leftBar}
				>
			    <ListItemIcon>
			  	{iconsUp[index]}
			    </ListItemIcon>
			    <ListItemText primary={item.title} />
			  </ListItem>
			))}
        </List>
        <Divider/>
		<List>
			{itemsDown.map((item,index) => (
			  <ListItem button
			  component={RouterLink}
			  to={item.href}
			  key={index}
			  className={classes.leftBar}
			  >
			    <ListItemIcon>
			  	{iconsDown[index]}
			    </ListItemIcon>
			    <ListItemText primary={item.title} />
			  </ListItem>
			))}
		</List>
      </Drawer>

	  <div className={classes.wrapper}>
	    <div className={classes.contentContainer}>
	      <div className={classes.content}>
	        <Outlet />
		    <BottomBar/>
	      </div>
	    </div>
	  </div>
    </div>
  );
}
