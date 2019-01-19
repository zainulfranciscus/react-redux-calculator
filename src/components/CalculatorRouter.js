import {ConnectedRouter} from "connected-react-router";
import {Route} from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import {CalculatorContainer} from "./CalculatorContainer";
import {calculationSummary} from "./Calculator";

export const AppRouter = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Route path='/' exact component={CalculatorContainer}/>
                <Route path='/summary' render={calculationSummary}/>
            </div>
        </ConnectedRouter>)
};

AppRouter.propTypes = {
    history: PropTypes.object,
};