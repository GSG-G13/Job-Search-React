import { Component } from 'react';
import './style.css'
class JobElement extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { title, description, label, company, area, url, salary } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <p>{description.split('.')[0]}</p>
        <span>{label}</span>
        <span>{company}</span>
        <span>{area}</span>
        <a href={url}>Link</a>
        <span>{salary}</span>
      </div>
    )
  }
}

class JobList extends Component {
  state = {
    jobs: null
  }
  // &what=${req.params.word}
  componentDidMount() {
    const handleJobs = (jobs) => {
      this.setState(() => ({ jobs: jobs.results }))
    }
    fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=99d1457c&app_key=3f231e4166d93072210889237c3b5f61`)
      .then((res) => res.json())
      .then(handleJobs)

  }

  render() {
    if (!this.state.jobs) {
      return (
        <div className="load">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      )
    }
    return (
      this.state.jobs.map((job) => (
        <JobElement key={job.id} title={job.title} description={job.description} label={job.category.label} company={job.company.display_name} area={job.location.area} url={job.redirect_url} salary={job.salary_max} />
      ))
    )
  }
}

export default JobList;