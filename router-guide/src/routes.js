/*
 * @Author: xinyang3
 * @Date: 2021-04-13 16:15
 * @Descripttion: awesome description
 * @LastEditors: xinyang3
 * @LastEditTime: 2021-04-13 17:14
 */

import Home from './components/home.jsx';
import Page1 from "./components/page1.jsx";
import Page2 from "./components/page2.jsx";
import {
  lazy
} from 'react';

// const Page1 = lazy(() => import('./components/page1'));

const routes = [{
  path: '/page1',
  component: Page1
}, {
  path: '/page2',
  component: Page2
}, {
  path: '/home',
  component: Home
}];

export default routes;