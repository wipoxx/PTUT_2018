import React from 'react';
import Button from '../presentation/Button';

class ListeDeroulante extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:"",
        }
    }
    render(){
        return(
            <form className='monForm' name="Activites">
                <select name="ListeActivites" onChange={this.handleChange}>
                    <option value="">Choisir une activité</option>
                    {this.props.typeActivite.map(function(monActivite){
                        return <option value={monActivite.activite}>{monActivite.activite}</option>
                        })
                    }
                </select>
                
                <Button onClick={this.handleClick}/>
            </form>
        )
    }
    handleChange = value =>{
        this.setState({value});
    }
    handleClick = () =>{
        this.props.onSubmit(this.state.value);
    }
}

export default ListeDeroulante;