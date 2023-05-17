import './App.css'
import JobList from "./components/JobList/JobList";

import Navbar from './components/Navbar'
import Search from './components/Search';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <JobList />
    </div>
  );
}

export default App;
