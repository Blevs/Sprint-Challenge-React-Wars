import React, { Component } from 'react';
import './styles/App.scss';
import { Characters } from "./components/Characters";
import { Pagination } from "./components/Pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
        starwarsChars: [],
        planets: {}
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results,
                        prevChars: data.previous,
                        nextChars: data.next });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  setStateAPI = (stateKey, URL) => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(prevState => {
          return {[stateKey]: {...prevState[stateKey], [URL]: data}};
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getStateAPI = (stateKey, URL) => {
    if (this.state[stateKey].hasOwnProperty(URL)) {
      return this.state[stateKey][URL];
    } else {
      this.setState(prevState => {
        return (prevState.hasOwnProperty(URL)
                ? prevState
                : {[stateKey]: {...prevState[stateKey], [URL]: false}});
      });
      this.setStateAPI(stateKey, URL);
      return this.state[stateKey][URL];
    }
  };

  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters characters={this.state.starwarsChars}
                    getStateAPI={this.getStateAPI} />
        <Pagination handleNavigation={this.getCharacters}
                    prev={this.state.prevChars}
                    next={this.state.nextChars} />
      </div>
    );
  }
}

export default App;
