import Maps from "../containers/Maps";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as companiesAction from "../../actions/companiesActions"
import React, { Component } from "react";

 class DonneesMap extends Component {
    constructor(props) {
        super(props);
        this.props.actions.loadCompanies({lat:45.895637,long:4.43252,range:100});
    }
	render() {
		return (
			<div>
				 <Maps donneesMap={this.props.companies}/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {  
    return {
      actions: bindActionCreators(companiesAction, dispatch)
    };
  }
  
  function mapStateToProps(state){
      return {
          companies: state.companies,
      }
  }
 
  export default connect(mapStateToProps, mapDispatchToProps)(DonneesMap);