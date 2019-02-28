import React from "react";
import "../style/Form.css";
import {Button, Icon} from 'react-materialize';

class Data extends React.Component {
    render(){
        return(
          <div class="row center-cols" id="card_body">
              <div class="col s10">
                <div >
                  {this.props.recipe_data.map ((recipe)=>{
                    return(
                        <div class="card"  id="main" key={recipe.recipe_id}>
                          <div class="card-image"> 
                            <img src={recipe.image_url} alt={recipe.title}/>  
                          </div> 
                          <div class="card-content"> 
                            <p>
                            {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0,25)}...`}                     
                            </p>
                          </div>
                          <div class="card-action">
                           <Button waves='light' > View Recipe</Button>
                          </div>
                        </div>
                    )
                  }) }
                  </div>
              </div>
          </div>
        );
    }
}

export default Data;
