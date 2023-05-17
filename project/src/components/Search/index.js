import { Component } from 'react';
import './style.css'

const getJobs = (name) => {
  return fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=99d1457c&app_key=3f231e4166d93072210889237c3b5f61&what=${name}`).then((data) => data.json());
}


class Search extends Component {

  state = {
    name: ''
  }

  handelName = (e) => {
    this.setState({ name: e.target.value })
  }
  componentDidUpdate() {
    getJobs(this.state.name).then((data) => console.log(data))
  }

  render() {
    return (
      <div className='search-div'>
        <input type='text' placeholder='Enter Job Name' value={this.state.name} onChange={this.handelName} className='input' />
      </div>
    )
  }
}

export default Search