import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import FindJobLayout from 'src/layouts/FindJob';
import DashboardView from 'src/views/company/reports/DashboardView';
import AccountView from 'src/views/company/account/AccountView';
import CustomerListView from 'src/views/company/customer/CustomerListView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/company/product/ProductListView';
import PostJobView from 'src/views/company/product/PostJobView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/company/settings/SettingsView';
import HotView from 'src/views/employPage/hot';
import CompanyView from 'src/views/employPage/company';
import MyMessageView from 'src/views/employPage/me';
import InboxView from 'src/views/employPage/inbox';
import SchoolView from 'src/views/employPage/school';
import Download from 'src/layouts/FindJob/download';

const routes = [
  {
    path: 'company',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'postjob', element: <PostJobView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '/', element: <Navigate to="/company/customers" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'findJob',
    element: <FindJobLayout />,
    children: [
      { path: 'hot', element: <HotView /> },
      { path: 'companyList', element: <CompanyView /> },
      { path: 'my', element: <MyMessageView /> },
      { path: 'inbox', element: <InboxView /> },
      { path: 'school', element: <SchoolView /> },
      { path: 'download', element: <Download /> },
      { path: '/', element: <Navigate to="/findJob/hot" /> },
	  // { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
