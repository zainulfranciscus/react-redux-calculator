import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import { withRouter } from 'react-router-dom';

export class CalculationSummary extends Component {
    render() {

        const listOfNumbers = this.props.listOfNumbersEntered.calculator;

        if(!listOfNumbers || (listOfNumbers.length === 0 || !listOfNumbers.map)) {
            return null;
        }

        return listOfNumbers.map(function (numbers, index) {
            const firstNumber = numbers.firstNumber;
            const secondNumber = numbers.secondNumber;
            const isCalculating = numbers.isCalculating;

            return (
                <div>
                    {!isCalculating && (
                        <p key={index}>{firstNumber} + {secondNumber} = {firstNumber + secondNumber}</p>
                    )}

                    {isCalculating && (
                        <p key={index + '-' + firstNumber + '-' + secondNumber} className='please-wait'>Wait
                            while I retrieve calculation history</p>
                    )}
                </div>
            );
        });

    }
}



const mapStateToProps = state => {
    return {
        listOfNumbersEntered: state
    };
};

const CalculationSummaryContainer = withRouter(connect(mapStateToProps)(CalculationSummary));

export default CalculationSummaryContainer;