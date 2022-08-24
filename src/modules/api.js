// Game ID = 0RdmO6P1iNabIgZlUyF4

import displayScores from "./displayScores";

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
  console.log(response);
  const data = await response.json();
  console.log(data);
};

const addScore = async (obj) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0RdmO6P1iNabIgZlUyF4/scores/', {
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
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0RdmO6P1iNabIgZlUyF4/scores/', {
    method: 'GET',
  });
  const data = await response.json();
  console.log(data.result);
  displayScores(data.result, container);
};

export { getResponse, addScore, getScores };