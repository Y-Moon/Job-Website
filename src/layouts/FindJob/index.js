import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink as RouterLink,Outlet } from 'react-router-dom';
import BottomBar from '../../components/BottomBar'
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
	Box
} from '@material-ui/core';
import{
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	Menu as MenuIcon,
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
	href: '/findJob/inbox',
	title: '收件箱'
  },
  {
  	href: '/findJob/hot',
  	title: '简历下载'
  },
  {
  	href: '/findJob/my',
  	title: '我'
  },
	];
const iconsUp=[<HomeIcon />,<SchoolIcon />,<BusinessIcon />];
const iconsDown=[<MailIcon />,<InboxIcon />,<FaceIcon />];
export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            WM 招聘网
          </Typography>
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
				key={index}>
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
