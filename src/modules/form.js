import displayScores from './displayScores.js';

const form = document.querySelector('.score-form');

const readFormData = (container, scores) => {
  const obj = {
    name: form[0].value,
    score: form[1].value,
  };
  form[0].value = '';
  form[1].value = '';
  scores.push(obj);
  localStorage.setItem('scores', JSON.stringify(scores));
  displayScores(scores, container);
};

export default readFormData;