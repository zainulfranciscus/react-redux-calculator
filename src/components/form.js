import React from 'react';
import {Field, reduxForm} from 'redux-form';

let CalculatorForm = props => {
    const {handleSubmit} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field name="firstNumber" component="input" type="text"/>
                <button type="submit">+</button>
                <Field name="secondNumber" component="input" type="text"/>
                =
                <Field name="result" component="label" type="label"/>
                <label id="result">0</label>
            </form>
        </div>
    )
};

CalculatorForm = reduxForm({
    form: 'calculator'
})(CalculatorForm);

export default CalculatorForm;