import {CLICK_CALCULATE_BUTTON} from '../types/types';

export function saveCalculationAction(firstNumber, secondNumber) {
    return {
        firstNumber: firstNumber,
        secondNumber: secondNumber,
        type: CLICK_CALCULATE_BUTTON
    }
};