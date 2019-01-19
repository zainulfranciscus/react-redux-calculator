import {put, call, takeEvery, all, select} from 'redux-saga/effects';
import {getFormValues} from 'redux-form';
import {
    CALCULATION_IS_DONE,
    CLICK_CALCULATE_BUTTON
} from '../types/types';

function* doCalculation() {

    const latestCalculation = yield select(getFormValues('calculator'));

    //------------
    const waitingForAPromise = new Promise(resolve => setTimeout(resolve,2500));
    let isPromiseCompleted = yield waitingForAPromise.then(() =>  true);
    //-------------

    const {firstNumber, secondNumber} = latestCalculation;
    const total = parseInt(firstNumber) + parseInt(secondNumber);

    yield put({type: CALCULATION_IS_DONE, payload: {
            firstNumber,
            secondNumber,
            total,
            isCalculating: !isPromiseCompleted
        }});
}

function* watchAction() {
    yield takeEvery(CLICK_CALCULATE_BUTTON, doCalculation);
}

export default function* rootSaga() {
    yield all([
        watchAction()
    ]);
}