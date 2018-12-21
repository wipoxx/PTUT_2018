import React from 'react';

class Bouton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    render(){
      return(
            <button type="submit" onClick={this.handleClick.bind(this)}>{this.props.value}</button>
      )
    }
    handleClick = event =>{
        event.preventDefault();
        this.props.onClick();
    }
}

export default Bouton;