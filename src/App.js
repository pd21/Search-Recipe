import React, { Component } from 'react';
import Form from "./components/Form";
import Data from "./components/Data";

import './App.css';

const API_KEY = "82531d88fbdabaad63dcf0a57be4bac7" ;

class App extends Component {
  state = {
    recipe_data : []
  }
  getRecipe = async (e)=>{
     e.preventDefault();
     const name_food = e.target.elements.recipename.value;
     const api_call= await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${name_food }&count=5`);
     const data = await api_call.json();
     this.setState({
       recipe_data : data.recipes
     })
    
  }
  render() {
    return (
      <div className="App">
        <Form getRecipe={this.getRecipe}/>
        <Data recipe_data={this.state.recipe_data}/>
      </div>
    );
  }
}

export default App;
