import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router";

export class CalculationSummary extends Component {

    isListEmpty(list){
        return !list || (list.length === 0 || !list.map);
    }
    render() {

        const listOfNumbers = !this.isListEmpty(this.props.listOfNumbersEntered.calculator) ? this.props.listOfNumbersEntered.calculator: this.props.history.location.state;

        if(this.isListEmpty(listOfNumbers)) {
            return null;
        }

        return listOfNumbers.map(function (numbers, index) {
            const {firstNumber, secondNumber, isCalculating} = numbers;

            return (
                <div>
                    {!isCalculating && (
                        <p key={index}>{firstNumber} + {secondNumber} = {parseInt(firstNumber) + parseInt(secondNumber)}</p>
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

const CalculationSummaryContainer = withRouter(connect(mapStateToProps,null,null, {forwardRef: true})(CalculationSummary));

export default CalculationSummaryContainer;