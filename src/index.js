import { getResponse, addScore, getScores } from './modules/api.js';
import displayScores from './modules/displayScores.js';
import readFormData from './modules/form.js';
import load from './modules/localStorage.js';
import './styles.css';

// const scores = load();
// displayScores(scores, container);

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  readFormData();
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  const scores = getScores();
  console.log(scores.json());
});

getScores();