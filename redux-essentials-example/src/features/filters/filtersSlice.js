/*
 * @Author: xinyang3
 * @Date: 2021-04-16 15:54
 * @Descripttion: awesome description
 * @LastEditors: xinyang3
 * @LastEditTime: 2021-04-16 16:07
 */
const initState = {
  status: 'All',
  colors: []
};

function filtersReducer(state = initState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        status: action.payload
      }
    }
    default:
      return state;
  }
}

export default filtersReducer;