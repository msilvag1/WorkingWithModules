"use strict";

import getSessions, { sessionTemplate } from './sessionRepository.js';

const render = (listItems) => {
  const list = document.querySelector('#sessions');
  if (!list) return;
  list.innerHTML = sessionTemplate(listItems);
};

const renderSessions = async () => {
  const sessions = await getSessions()
  console.log('async!');
  render(sessions);
};

renderSessions();