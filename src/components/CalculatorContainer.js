import {saveCalculationAction} from "../redux/actions/action";
import {push} from "connected-react-router";
import connect from "react-redux/es/connect/connect";
import {Calculator} from "./Calculator";

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => {
            dispatch(saveCalculationAction());
        },
        goToSummaryPage: () => {
            dispatch(push('/summary'));
        }
    }
};


export const CalculatorContainer = connect((state)=>state, mapDispatchToProps, null)(Calculator);