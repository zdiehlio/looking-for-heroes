import React, { Component } from 'react';
import './App.css';
import Menu from '@material-ui/icons/Menu'
import Wow from './assets/logo-wow.png'
import { IconButton, ToolBar, AppBar } from '@material-ui/core';
import Expansion from './components/Expansion'


class App extends Component {

  state = {
    expanded: null,
  }

  handleChange = panel => (event, expanded) => {
    this.setState({ expanded: expanded ? panel : false })
  }
  render() {
    const { expanded } = this.state
    return (
      <div className="App">
        <AppBar position="static" >
          <ToolBar>
            <IconButton>
              <Menu />  
            </IconButton>
            <h3>Looking for Heroes</h3>
          </ToolBar>
        </AppBar>
        <div class="expansion-container">
          <Expansion handleChange={this.handleChange} imgSrc={Wow} imgAlt='World of Warcraft Logo' openPanel={expanded} game='World of Wacraft' panel='panel1' title='Find a Team'/>
          <Expansion handleChange={this.handleChange} imgSrc={Wow} imgAlt='World of Warcraft Logo' openPanel={expanded} game='World of Wacraft' panel='panel2' title='Find a Player'/>
        </div>
      </div>
    );
  }
}

export default App;
