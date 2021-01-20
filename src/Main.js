import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import formulaire from "./formulaire";
import MapContainer from "./maps";
import galerie from "./galerie";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Stuff</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/formulaire">Formulaire</NavLink>
            </li>
            <li>
              <NavLink to="/maps">Maps</NavLink>
            </li>
            <li>
              <NavLink to="/galerie">Galerie</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/formulaire" component={formulaire} />
            <Route path="/contact" component={Contact} />
            <Route path="/maps" component={MapContainer} />
            <Route path="/galerie" component={galerie} />.


          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;