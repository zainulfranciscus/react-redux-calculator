import {
    CALCULATION_IS_DONE,
    CLICK_CALCULATE_BUTTON,
    OPEN_SUMMARY_PAGE
} from '../types/types';
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {connectRouter} from "connected-react-router";

const reducer = function reducer(state = {
    isCalculating: false, numbers: []
}, action) {
    switch (action.type) {
        case OPEN_SUMMARY_PAGE:
            return state;
        case CLICK_CALCULATE_BUTTON:
             let anotherState = Object.assign({}, state);
            anotherState.isCalculating = true;
             return anotherState;
        case CALCULATION_IS_DONE:
            let newState = Object.assign({}, state);
            newState.isCalculating = false;
            newState.numbers.push(action.payload);
            return newState;
        default:
            return state;
    }
};

export default (history) => combineReducers({
    calculator: reducer,
    form: formReducer,
    router: connectRouter(history)
});