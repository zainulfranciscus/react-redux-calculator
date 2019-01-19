import connect from "react-redux/es/connect/connect";
import {CalculationSummary} from "./CalculationSummary";

const mapStateToProps = state => {
    return {
        listOfNumbersEntered: state.calculator.numbers,
        isCalculating: state.calculator.isCalculating
    };
};

const CalculationSummaryContainer = connect(mapStateToProps,null)(CalculationSummary);

export default CalculationSummaryContainer;