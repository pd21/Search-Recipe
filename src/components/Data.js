import React from "react";
import "../style/Form.css";

class Data extends React.Component {
    render(){
        return(
          <div class="row center-cols">
              <div class="col s12 m3">
                <div class="card">
                  {this.props.recipe_data.map ((recipe)=>{
                    return(
                        <div key={recipe.recipe_id}>
                          <div class="card-image"> 
                            <img src={recipe.image_url} alt={recipe.title}/>  
                          </div> 
                          <div class="card-content"> 
                            <p>{recipe.title}</p>
                          </div>
                          <div class="card-action">
                            <a href="#">This is a link</a>
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
