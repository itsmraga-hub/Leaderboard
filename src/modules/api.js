import displayScores from './displayScores.js';

const getResponse = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(
      {
        name: 'Jibambenacode',
      },
    ),
  });
  const data = await response.json();
  console.log(data);
};

const addScore = async (obj) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nnOBr2eapsi2r4jUDCrl/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  console.log(data);
};

const container = document.querySelector('.scores-container');

const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nnOBr2eapsi2r4jUDCrl/scores/', {
    method: 'GET',
  });
  const data = await response.json();
  displayScores(data.result, container);
};

export { getResponse, addScore, getScores };