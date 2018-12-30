import {put, takeEvery, all, select} from 'redux-saga/effects';
import {
    CALCULATION_IS_DONE,
    CLICK_CALCULATE_BUTTON
} from '../types/types';

function* doCalculation() {
    const latestCalculation = yield select(state => state.calculator[state.calculator.length -1]);
    const waitingForAPromise = new Promise(resolve => setTimeout(resolve,5000));
    let isPromiseCompleted = yield waitingForAPromise.then(() =>  true);
    latestCalculation.isCalculating = !isPromiseCompleted;
    yield put({type: CALCULATION_IS_DONE});
}

function* watchAction() {
    yield takeEvery(CLICK_CALCULATE_BUTTON, doCalculation);
}

export default function* rootSaga() {
    yield all([
        watchAction()
    ]);
}