import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveCalculationAction,openSummaryPageAction} from '../redux/actions/action';
import CalculatorForm from './form';
import {Route, Router } from 'react-router-dom';
import CalculationSummaryContainer from './CalculationSummary';
import PropTypes from 'prop-types';

const calculationSummary = () => {
    return (
        <div>
            <p>Here is a summary of your calculations</p>
            <CalculationSummaryContainer/>
        </div>
    )
};

export const AppRouter = ({history}) => {
    return (
        <Router history={history}>
            <div>
                <Route path='/' exact component={CalculatorContainer}/>
                <Route path='/summary' render={calculationSummary}/>
            </div>
        </Router>)
};

AppRouter.propTypes = {
    history: PropTypes.object,
};

export class Calculator extends Component {

    calculate(values) {
        const {firstNumber, secondNumber} =  values;
        //todo: figure out how to pass props of this comonent to the form, so that this code below can be done in the form
        document.getElementById('result').innerHTML = parseInt(firstNumber) + parseInt(secondNumber);
        this.props.saveCalculation(firstNumber, secondNumber);
    }

    render() {
        return (
            <div>
                <CalculatorForm onSubmit={this.calculate.bind(this)}/>
                <div>
                    <p><b>Calculation Done So far</b></p>
                    <CalculationSummaryContainer />
                    <a href="/summary" onClick={()=>this.props.history.push('/summary',this.props.calculator)}>Done</a>
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


export const CalculatorContainer = connect((state)=>state, mapDispatchToProps, null, {forwardRef: true})(Calculator);