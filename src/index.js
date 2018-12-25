import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {AppRouter} from './components/Calculator';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reducer from './redux/reducers/reducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './redux/sagas/saga';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const sagaMiddleware = createSagaMiddleWare();
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
const rootReducer = combineReducers({
    calculator: reducer,
    form: formReducer
});

const store = createStore(rootReducer, {}, enhancer);
sagaMiddleware.run(rootSaga);

render((
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    ), document.getElementById('app')
);