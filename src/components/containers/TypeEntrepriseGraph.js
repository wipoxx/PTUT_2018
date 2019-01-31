import React, { Component } from "react";
import DoughnutWrapped from "./DoughnutWrapped";
import {connect} from "react-redux"

class TypeEntrepriseGraph extends Component {
    render() {
        let data=[];
        let labels=[];
        this.props.companiesStats.activities.map(value => {
                labels.push(value._id);
                data.push(value.count);
            }
        )
        return (
            <div >
                <DoughnutWrapped isToggleOn={false} titre="Type d'entreprise" data={data} labels={labels}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        companiesStats: state.companiesStats,
    }
}

export default connect(mapStateToProps)(TypeEntrepriseGraph);
