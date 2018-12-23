import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveCalculationAction} from "../redux/actions/action";

export class Calculator extends Component {
    calculate() {
        const firstNumber = parseInt(document.getElementById('number-1').value);
        const secondNumber = parseInt(document.getElementById('number-2').value);
        document.getElementById('result').innerHTML = firstNumber + secondNumber;
        this.props.saveCalculation(firstNumber, secondNumber);
    }

    render() {
        let listOfCalculations;
        if (this.props.listOfNumbersEntered.map) {
            listOfCalculations = this.props.listOfNumbersEntered.map(function (numbers, index) {
                const firstNumber = numbers.firstNumber;
                const secondNumber = numbers.secondNumber;
                const isCalculating = numbers.isCalculating;

                console.log(numbers);

                return (
                    <div>
                        {!isCalculating && (
                            <p key={index}>{firstNumber} + {secondNumber} = {firstNumber + secondNumber}</p>
                        )}

                        {isCalculating && (
                            <p key={index + '-' + firstNumber + '-' + 'second-number'} className='please-wait'>Wait while I retrieve calculation history</p>
                        )}
                    </div>
                );
            });
        }

        return (
            <div>
                <div className="form-group">
                    <input type="text" id="number-1"/>
                    +
                    <input type="text" id="number-2"/>
                    =
                    <label id="result">0</label>
                </div>
                <button onClick={this.calculate.bind(this)}>Calculate</button>
                <div>
                    <p><b>Calculation Done So far</b></p>
                    {listOfCalculations}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveCalculation: (firstNumber, secondNumber) => {
            dispatch(saveCalculationAction(firstNumber, secondNumber));
        }
    }
};

const mapStateToProps = state => {
    return {
        listOfNumbersEntered: state
    };
};

export const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);