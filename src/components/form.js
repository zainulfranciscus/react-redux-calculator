import React from 'react';
import {Field, reduxForm} from 'redux-form';

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => (
    <span>
        <input {...input} placeholder={label} type={type}/>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </span>
);

let CalculatorForm = props => {
    const {handleSubmit} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field name="firstNumber" component={renderField} type="text"/>
                <button type="submit">+</button>
                <Field name="secondNumber" component={renderField} type="text"/>
                =
                <Field name="result" component="label" type="label"/>
                <label id="result">0</label>
            </form>
        </div>
    )
};

const validate = values => {
    const errors = {};

    Object.entries(values).forEach((value) => {
        if(isNaN(value[1])){
            errors[value[0]] = 'must be a number';
        }
    });

    return errors;
};

export default reduxForm({
    form: 'calculator',
    validate
})(CalculatorForm);