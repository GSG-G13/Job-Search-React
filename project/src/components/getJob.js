export const getJobs = (url) => {
  return fetch(url).then((data) => data.json());
}
