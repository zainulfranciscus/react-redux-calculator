import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveCalculationAction} from '../redux/actions/action';
import CalculatorForm from './form';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const calculationSummary = () => {
    return (
        <p>Here is a summary of your calculations</p>
    )
};

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Link to='/summary'>Home</Link>
                <hr/>
                <Route path='/' component={CalculatorContainer}/>
                <Route path='/summary' component={calculationSummary}/>
            </div>
        </Router>)
};


export class Calculator extends Component {
    calculate(values) {
        const firstNumber = parseInt(values.firstNumber);
        const secondNumber = parseInt(values.secondNumber);
        document.getElementById('result').innerHTML = firstNumber + secondNumber;
        this.props.saveCalculation(firstNumber, secondNumber);
    }

    render() {
        let listOfCalculations;
        if (this.props.listOfNumbersEntered.calculator.length > 0 && this.props.listOfNumbersEntered.calculator.map) {
            listOfCalculations = this.props.listOfNumbersEntered.calculator.map(function (numbers, index) {
                const firstNumber = numbers.firstNumber;
                const secondNumber = numbers.secondNumber;
                const isCalculating = numbers.isCalculating;

                return (
                    <div>
                        {!isCalculating && (
                            <p key={index}>{firstNumber} + {secondNumber} = {firstNumber + secondNumber}</p>
                        )}

                        {isCalculating && (
                            <p key={index + '-' + firstNumber + '-' + 'second-number'} className='please-wait'>Wait
                                while I retrieve calculation history</p>
                        )}
                    </div>
                );
            });
        }

        return (
            <div>
                <CalculatorForm onSubmit={this.calculate.bind(this)}/>
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