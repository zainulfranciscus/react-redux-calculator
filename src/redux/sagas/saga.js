import {put, takeLatest, all, select} from 'redux-saga/effects';
import {
    NAME_OF_ACTION_WHEN_CALCULATING_NUMBERS,
    CALCULATION_IS_DONE,
    CLICK_CALCULATE_BUTTON
} from '../types/types';

function* doCalculation() {
    const state = yield select();
    const waitingForAPromise = new Promise(resolve => setTimeout(resolve,1500));
    let isPromiseCompleted = yield waitingForAPromise.then(() => {return true});

    const calculator = state.calculator;
    const mostRecentCalculation = calculator[calculator.length-1];
    yield put({type: CALCULATION_IS_DONE, firstNumber:mostRecentCalculation.firstNumber,secondNumber:mostRecentCalculation.secondNumber, isCalculating: !isPromiseCompleted});
}

function* watchAction() {
    yield takeLatest(CLICK_CALCULATE_BUTTON, doCalculation);
}

export default function* rootSaga() {
    yield all([
        watchAction()
    ]);
}