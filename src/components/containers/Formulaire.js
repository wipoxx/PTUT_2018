import React from 'react';
import CheckBox from "../presentation/CheckBox";
import Button from "../presentation/Button";
import Label from "../presentation/Label";

class Formulaire extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    render(){
        return(
            <form>
               <Label>Hello</Label>
               <CheckBox/>
               <Button onClick={this.handleClick}/>
            </form>
        )
    }

    handleClick = () =>{
        this.props.onSubmit(this.state.value);
    }
}

export default Formulaire;
