import { Component } from 'react';
import './App.css'
import JobList from "./components/JobList/JobList";

import Navbar from './components/Navbar'
import Search from './components/Search';
import { getJobs } from './components/getJob';

class App extends Component {
  state = {
    data: [],
    name: ''
  }

  handelName = (e) => {
    this.setState({ name: e.target.value })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      getJobs(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a6193f2c&app_key=577a1f0a6bc152d8605cfb5b73d0e4b5&what=${this.state.name}`)
        .then((data) => this.setState({ data: data.results }))
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='search-div'>
          <input type='text' placeholder='Enter Job Name' value={this.state.name} onChange={this.handelName} className='input' />
        </div>
        <JobList data={this.state.data} />
      </div>
    );
  }
}

export default App;
