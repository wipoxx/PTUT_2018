import React, { Component } from "react";
import DoughnutWrapped from "../layouts/MapLayout";
import {connect} from "react-redux"

class TypeEntrepriseGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            labels:[]
        }
    }

    componentDidMount() {
        this.update();

    }

    render() {
        return (
            <div >
                <DoughnutWrapped isToggleOn={false} titre="Type d'entreprise" data={this.state.data} labels={this.state.labels}/>
            </div>
        );
    }

    update(){
        let data=[];
        let labels=[];
        this.props.activities.map(value => {
            labels.push(value._id);
            data.push(value.count);
            }
        );
        this.setState({data,labels});
    }
}

function mapStateToProps(state){
    return {
        activities: state.companiesStats.activities,
    }
}

export default connect(mapStateToProps)(TypeEntrepriseGraph);
