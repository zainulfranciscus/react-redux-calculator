import {
    CALCULATION_IS_DONE,
    CLICK_CALCULATE_BUTTON
} from '../types/types';
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {connectRouter} from "connected-react-router";

const reducer = function reducer(state = [], action) {
    let numbers = [];
    if(state instanceof Array) {
        numbers = numbers.concat(state);
    }

    switch (action.type) {
        case CLICK_CALCULATE_BUTTON:
            let number = {firstNumber: action.firstNumber, secondNumber: action.secondNumber, isCalculating: true};
            numbers.push(number);
            return numbers;
        case CALCULATION_IS_DONE:
            numbers [numbers.length -1]= {firstNumber: action.firstNumber, secondNumber: action.secondNumber, isCalculating: action.isCalculating};
            return numbers;
        default:
            return numbers;
    }
};

export default (history) => combineReducers({
    calculator: reducer,
    form: formReducer,
    router: connectRouter(history)
});