/*
 * @Author: xinyang3
 * @Date: 2021-04-15 11:32
 * @Descripttion: awesome description
 * @LastEditors: xinyang3
 * @LastEditTime: 2021-04-22 18:29
 */
import {
  createStore,
  applyMiddleware
} from 'redux';
// import counterReducer from '../features/counter/counterSlice';

import rootReducer from '../reducer';

import {
  print1,
  print2,
  print3,
  loggerMiddleware
} from '../exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(print1, loggerMiddleware, print2, print3)

export const store = createStore(rootReducer, middlewareEnhancer);