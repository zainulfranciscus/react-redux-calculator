import React, {Component} from 'react';


export class CalculationSummary extends Component {

    render() {

        const listOfNumbers = this.props.listOfNumbersEntered;
        const isCalculating = this.props.isCalculating;

        return (
            <React.Fragment>
            {isCalculating && (
                <p className='please-wait'>Wait
                    while I retrieve calculation history</p>
            )}
            {
                listOfNumbers.map(function (numbers, index) {
                console.log(numbers);
                const {firstNumber, secondNumber, total} = numbers;

                return (
                    <React.Fragment key={index}>
                        {!isCalculating && (
                            <p>{firstNumber} + {secondNumber} = {total}</p>
                        )}


                    </React.Fragment>
                );
                })
            }
            </React.Fragment>
        );

    }
}

