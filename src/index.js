import { getScores } from './modules/api.js';
import readFormData from './modules/form.js';
import './styles.css';

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  readFormData();
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  getScores();
});

getScores();