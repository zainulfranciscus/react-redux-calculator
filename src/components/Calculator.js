import React, {Component} from 'react';
import CalculatorForm from './CalculatorForm';
import CalculationSummaryContainer from './CalculationSummaryContainer';

export const calculationSummary = () => {
    return (
        <div>
            <p>Here is a summary of your calculations</p>
            <CalculationSummaryContainer/>
        </div>
    )
};

export class Calculator extends Component {
    render() {
        return (
            <div>
                <CalculatorForm onSubmit={this.props.onSubmit}/>
                <div>
                    <p><b>Calculation Done So far</b></p>
                    <CalculationSummaryContainer />
                    <button onClick={this.props.goToSummaryPage}>Done</button>
                </div>
            </div>
        );
    }
}