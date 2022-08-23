import displayScores from './modules/displayScores.js';
import './styles.css';

const container = document.querySelector('.scores-container');
window.addEventListener('DOMContentLoaded', displayScores(container));