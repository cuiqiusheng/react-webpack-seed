import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import task from 'Containers/Task/reducer'
import login from 'Containers/Login/reducer'
import proxy from 'Containers/Proxy/reducer'
import log from 'Containers/Log/reducer'
import user from 'Containers/User/reducer'

const createReducer = (asyncReducers) => {
  return combineReducers({
    task,
    login,
    proxy,
    log,
    user,

    routing: routerReducer,
    ...asyncReducers
  })
}

export default createReducer
