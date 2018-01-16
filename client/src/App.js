import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    question: '',
    answer: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({question: res.card.question});
        this.setState({answer: res.card.answer});
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.question}
          {this.state.answer}
        </p>
      </div>
    );
  }
}

export default App;
