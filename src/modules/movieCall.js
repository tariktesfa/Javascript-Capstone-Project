const moviesCall = async () => {
  const movieData = await fetch('https://api.tvmaze.com/shows');
  const allData = await movieData.json();
  return allData;
};

export default moviesCall;
