import Maps from "../containers/Maps";

 class DonneesMap extends Component {
	render() {
		return (
			<div>
				<Maps />
				
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