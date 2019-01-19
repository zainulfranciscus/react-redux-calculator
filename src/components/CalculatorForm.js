import React from 'react';
import {Field, reduxForm} from 'redux-form';

const renderField = ({
                         input,
                         label,
                         type,
                         onChange,
                         meta: {touched, error, warning}
                     }) => (
    <span>
        <input {...input} placeholder={label} type={type}/>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </span>
);

class CalculatorForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstNumber:0,
            secondNumber:0
        }
    }
    render(){
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="firstNumber" component={renderField} onChange={e => this.state.firstNumber = e.target.value} type="text"/>
                    <button type="submit">+</button>
                    <Field name="secondNumber" component={renderField} onChange={e => this.state.secondNumber = e.target.value} type="text"/>
                    =
                    <Field name="result" component="label" type="label"/>
                    <label id="result">{parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber)}</label>
                </form>
            </div>
        )
    }
}

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