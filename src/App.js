import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import GifList from './components/GifList';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import './App.scss';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=12&api_key=GOZE8rjMtj9BZMPcNOgBr8n7Jl23mCIf&limit`)
    .then(response => {
      this.setState({
        gifs: response.data.data,
        loading: false
      })
    })
    .catch(error => {
      console.log('error is not fetching data', error);
    })
  }

  render() {
    console.log(this.state.gifs)
    return (
      <div className="app">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#">Git Search</Navbar.Brand>
        
          <Nav className="ml-auto">
            <SearchForm onSearch={this.performSearch}/> 
          </Nav>
        </Navbar>
        <div className="body">
          {
            (this.state.loading) ? <p className="loading">Loading ...</p> : <GifList data={this.state.gifs} />
          }
        </div>
      </div>
  
    )
  }
}
