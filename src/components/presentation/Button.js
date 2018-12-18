import React from 'react';

class Bouton extends React.Component {
    render(){
      return(
            <button type="submit" onClick={this.handleClick.bind(this)}>Synthèse</button>
      )
    }
    handleClick = event =>{
        event.preventDefault();
        this.props.onClick();
    }
}

export default Bouton;