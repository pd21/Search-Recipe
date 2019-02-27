import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
import "../style/Form.css";

class Form extends Component{
  render(){
      return(
          <form onSubmit={this.props.getRecipe}>
             <div className="container center-align" id="main_div">
             <input type="text" name="recipename"/>
             <br />
             <Button waves='light'> Submit</Button>
             </div>
          </form>
      )
  }
}

export default Form;
