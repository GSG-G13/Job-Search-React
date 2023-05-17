import './App.css'
import JobList from "./components/JobList/JobList";

import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <JobList />
    </div>
  );
}

export default App;
