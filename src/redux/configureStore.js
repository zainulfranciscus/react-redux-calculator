import {createBrowserHistory} from 'history';
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import rootReducer from './reducers/reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./sagas/saga";

const sagaMiddleware = createSagaMiddleWare();
const history = createBrowserHistory();
const middleware = [sagaMiddleware,routerMiddleware(history)];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));


const store = createStore(
    rootReducer(history),
    {},
    enhancer
);
sagaMiddleware.run(rootSaga);
export default store;
