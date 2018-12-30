import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {AppRouter} from './components/Calculator';
import store from './redux/configureStore';
import {history} from './redux/configureStore';

render((
        <Provider store={store}>
            <AppRouter history={history}/>
        </Provider>
    ), document.getElementById('app')
);