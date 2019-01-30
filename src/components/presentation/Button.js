import React from 'react';

class Bouton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:'OK'
        }
    }
    render(){
      return(
            <button type="submit" onClick={this.handleClick.bind(this)}>OK</button>
      )
    }
    handleClick = event =>{
        event.preventDefault();
        this.props.onClick();
    }
}

export default Bouton;