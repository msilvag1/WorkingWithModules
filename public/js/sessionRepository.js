const sessionURL = 'sessions.json';

const sessionList = [];

const getSessions = () => new Promise((resolve, reject) => {
  const oReq = new XMLHttpRequest();
  oReq.onload = (e) => {
    sessionList.push(...e.target.response);
    resolve(sessionList);
  };
  oReq.open('GET', sessionURL, true);
  oReq.responseType = 'json';
  oReq.send();
});

export { sessionTemplate } from './template.js'

export {
  getSessions as default,
  sessionURL,
};