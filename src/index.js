import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {CalculatorContainer} from './components/Calculator';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducers/reducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './redux/sagas/saga';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(reducer,{}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <CalculatorContainer />
    </Provider>,
    document.getElementById('app')
);