import { Component } from 'react';
import { Wrapper, JobWrap, JobHead, LinkEle, LabelEle, CompanyEle, TitleEle, DescriptionEle, SalaryEle, AreaEle, JobBottom } from './JobList.styles'
import './style.css'
import { getJobs } from '../getJob';
class JobElement extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { title, description, label, company, area, url, salary } = this.props;
    return (
      <JobWrap>
        <JobHead>
          <LabelEle>{label}</LabelEle>
          <CompanyEle>Company: {company}</CompanyEle>
        </JobHead>
        <TitleEle>{title}</TitleEle>
        <DescriptionEle>{description.split('.')[0]}</DescriptionEle>
        <SalaryEle>Salary: {salary}$</SalaryEle>
        <JobHead>
          <AreaEle>{area}</AreaEle>
          <LinkEle href={url}>Link</LinkEle>
        </JobHead>
      </JobWrap>
    )
  }
}

class JobList extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  state = {
    jobs: []
  }
  // &what=${req.params.word}
  componentDidMount() {
    const handleJobs = (jobs) => {
      this.setState(() => ({ jobs: jobs.results }))
    }
    getJobs(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a6193f2c&app_key=577a1f0a6bc152d8605cfb5b73d0e4b5`)
      .then((jobs) => handleJobs(jobs))
  }

  render() {
    if (!this.state.jobs) {
      return (
        <div >
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      )
    }
    return (
      <Wrapper>
        {
          !this.props.data.length ?
            this.state.jobs.slice(0, 9).map((job) => (
              <JobElement key={job.id} title={job.title} description={job.description} label={job.category.label} company={job.company.display_name} area={job.location.area} url={job.redirect_url} salary={job.salary_max} />
            )) :
            this.props.data.slice(0, 9).map((job) => (
              <JobElement key={job.id} title={job.title} description={job.description} label={job.category.label} company={job.company.display_name} area={job.location.area} url={job.redirect_url} salary={job.salary_max} />
            ))
        }
      </Wrapper>
    )
  }
}

export default JobList;