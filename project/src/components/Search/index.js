import { Component } from 'react';
import './style.css'
import { getJobs } from '../getJob';
class Search extends Component {

  // state = {
  //   name: ''
  // }

  // handelName = (e) => {
  //   this.setState({ name: e.target.value })
  // }
  // componentDidUpdate(prevState) {
  //   if (prevState !== this.state.name) {
  //     getJobs(this.state.name).then((data) => console.log(data))
  //   }
  // }

  render() {
    return (
      <div className='search-div'>
        <input type='text' placeholder='Enter Job Name' value={this.state.name} onChange={this.handelName} className='input' />
      </div>
    )
  }
}

export default Search