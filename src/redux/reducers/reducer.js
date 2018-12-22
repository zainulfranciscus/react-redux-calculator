import {
    CALCULATION_IS_DONE,
    CLICK_CALCULATE_BUTTON
} from '../types/types';

export default function reducer(state = [], action) {
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
            number = {firstNumber: action.firstNumber, secondNumber: action.secondNumber, isCalculating: action.isCalculating};
            numbers.push(action);
            return numbers;
        default:
            return numbers;
    }
}