import { Component } from 'react';
import { Wrapper, JobWrap, JobHead, LinkEle, LabelEle, CompanyEle, TitleEle, DescriptionEle, SalaryEle, AreaEle, JobBottom } from './JobList.styles'
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
  state = {
    jobs: []
  }
  // &what=${req.params.word}
  componentDidMount() {
    const handleJobs = (jobs) => {
      this.setState(() => ({ jobs: jobs.results }))
    }
    fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9c69a205&app_key=d5388f917e9d70eaed6055398a2930ae	`)
      .then((res) => res.json())
      .then((jobs) => handleJobs(jobs))
  }

  render() {
    if (!this.state.jobs) {
      return <h3>Loading...</h3>
    }
    return (
      <Wrapper>
        {
          this.state.jobs.slice(0, 9).map((job) => (
          <JobElement key={job.id} title={job.title} description={job.description} label={job.category.label} company={job.company.display_name} area={job.location.area} url={job.redirect_url} salary={job.salary_max}  />
          ))
        }
      </Wrapper>
    )
  }
}

export default JobList;