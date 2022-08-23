const load = () => {
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  return scores;
};

export default load;