import {CLICK_CALCULATE_BUTTON} from '../types/types';

export function saveCalculationAction(firstNumber, secondNumber) {
    return {
        payload: {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            isCalculating: true
        },
        type: CLICK_CALCULATE_BUTTON
    }
}