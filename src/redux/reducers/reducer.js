import {
    CALCULATION_IS_DONE,
    CLICK_CALCULATE_BUTTON,
    OPEN_SUMMARY_PAGE
} from '../types/types';
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {connectRouter} from "connected-react-router";

const reducer = function reducer(state = [], action) {
    let numbers = [];
    numbers = numbers.concat(state);

    switch (action.type) {
        case OPEN_SUMMARY_PAGE:
            return state;
        case CLICK_CALCULATE_BUTTON:
            numbers.push(action.payload);
            return numbers;
        case CALCULATION_IS_DONE:
        default:
            return numbers;
    }
};

export default (history) => combineReducers({
    calculator: reducer,
    form: formReducer,
    router: connectRouter(history)
});