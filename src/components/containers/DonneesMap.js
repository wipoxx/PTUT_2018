import Maps from "../containers/Maps";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as companiesAction from "../../actions/companiesActions"
import React, { Component } from "react";

 class DonneesMap extends Component {
    constructor(props) {
        super(props);

    }
	render() {
		return (
			<div>
				 <Maps donneesMap={this.props.companies}/>
			</div>
		)
	}
}
  
  function mapStateToProps(state){
      return {
          companies: state.companies,
      }
  }
 
  export default connect(mapStateToProps)(DonneesMap);