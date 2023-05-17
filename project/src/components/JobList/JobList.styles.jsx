import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 85%;
  margin: 3rem 100px;
`;

export const JobWrap = styled.div`
  padding: 1rem;
  width: 27%;
  display: flex;
  flex-direction: column;
  border: 3px solid rgb(4,112,220);
  min-height: 250px;
  height: fit-content;
  min-width: 330px;
  justify-content:space-between;
  border-radius: 10px;
  margin-top: 2rem;
`;

export const JobHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`
export const JobBottom = styled(JobHead)``

export const LabelEle = styled.span`
  top: 1rem;
  left: 1rem;
  font-size: 14px;
  color: #000;
  font-weight: bold;
`

export const CompanyEle = styled(LabelEle)``

export const TitleEle = styled.span`
  display: block;
  color: rgb(4,112,220);
  font-size: 1.2rem;
  margin-top: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`

export const DescriptionEle = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  display: block;
`
export const SalaryEle = styled(TitleEle)`
  font-size: 14px;
`
export const AreaEle = styled(LabelEle)``

export const LinkEle = styled.a`
  display: block;
  padding: 0.7rem 1.5rem;
  background-color: #009AE5;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
`