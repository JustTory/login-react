import { createStore } from 'redux'
import authReducer from './reducers/authReducer'

const initStore = {
    user: null
}

const store = createStore(authReducer, initStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
