import scores from './scores.js';

const displayScores = (container) => {
  container.innerHTML = '';
  scores.forEach((obj, i) => {
    container.innerHTML += `<li class="list-item" dataid=${i}>${obj.name}: ${obj.score}</li>`;
  });
};

export default displayScores;