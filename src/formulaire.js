import React, { Component } from "react";
class formulaire extends Component {
    state = {
        name: "Votre Nom",
        favoritePet: "",
        rememberMe: false,
        title: "MR."
        
      };
    
      handleChange = event => {
        this.setState({ name: event.target.value });
      };
    
      handleChangeFavoritePet = event => {
        this.setState({ favoritePet: event.target.value });
      };
    
      handleCheck = event => {
        this.setState({ rememberMe: event.target.checked });
      };
    
      handleSelect = event => {
        this.setState({ title: event.target.value });
      };
    
      handleSubmit = () => {
        console.log(this.state);
      };


      
    
      render() {
        return (
            
          <div>
              <div>
              <label> Bonjour , veuillez remplir le formulaire</label>
              </div>
            <input value={this.state.name} onChange={this.handleChange} />
           
            <input
              type="checkbox"
              checked={this.state.rememberMe}
              onChange={this.handleCheck}
            />
            <div>
            <textarea
              value={this.state.favoritePet}
              onChange={this.handleChangeFavoritePet}
            />
            </div>
            <div>
              <select value={this.state.title} onChange={this.handleSelect}>
                <option>Mr.</option>
                <option>Miss.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
            </div>
            <div>
            <input type="file" />

            </div>
            <button onClick={this.handleSubmit}>submit</button>
          </div>
        );
      }
    }
export default formulaire;