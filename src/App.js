import React, { Component } from 'react';
import './App.css';
import { Monsters } from './components/monster.component/Monsters.component';
import { Search } from './components/search.component/Search.component';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({
      monsters: users
    }))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search 
         placeholder='Search Monster'
         handleChange={this.handleChange}
        />
        <Monsters monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;