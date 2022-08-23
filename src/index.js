import displayScores from './modules/displayScores.js';
import readFormData from './modules/form.js';
import load from './modules/localStorage.js';
import './styles.css';

const container = document.querySelector('.scores-container');

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  document.location.reload();
});

const scores = load();
displayScores(scores, container);

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  readFormData(container, scores);
});