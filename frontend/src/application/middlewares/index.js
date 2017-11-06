import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from './promise'

const middlewares = [
    applyMiddleware(promiseMiddleware),
    applyMiddleware(thunkMiddleware)
]

export default middlewares
