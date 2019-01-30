import React, { Component } from "react";
import {bindActionCreators} from "redux";
import * as companieActions from "../../actions/companiesActions"
import {connect} from "react-redux"

class Test extends Component {
    constructor(props) {
        super(props);
        this.props.actions.loadCompanies({long:4.43252,lat:45.895637,range:100});
    }

    render() {
        return (
            <div ></div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(companieActions, dispatch)
    };
}
function mapStateToProps(state){
    return {
        companies: state.companies,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);
