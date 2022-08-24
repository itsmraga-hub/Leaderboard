import { addScore } from './api.js';
// import displayScores from './displayScores.js';

const form = document.querySelector('.score-form');

const readFormData = () => {
  if (form[0].value && form[1].value) {
    const obj = {
      user: form[0].value,
      score: form[1].value,
    };
    form[0].value = '';
    form[1].value = '';
    addScore(obj);
  }
};

export default readFormData;