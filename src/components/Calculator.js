import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveCalculationAction} from '../redux/actions/action';
import CalculatorForm from './form';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import CalculationSummaryContainer from './CalculationSummary';

const calculationSummary = () => {
    return (
        <div>
            <p>Here is a summary of your calculations</p>
            <CalculationSummaryContainer/>
        </div>
    )
};

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <hr/>
                <Route exact path='/' component={CalculatorContainer}/>
                <Route path='/summary' render={calculationSummary}/>
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

        return (
            <div>
                <CalculatorForm onSubmit={this.calculate.bind(this)}/>
                <div>
                    <p><b>Calculation Done So far</b></p>
                    <CalculationSummaryContainer />
                    <a href="/summary">Done</a>
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


export const CalculatorContainer = connect((state)=>state, mapDispatchToProps)(Calculator);