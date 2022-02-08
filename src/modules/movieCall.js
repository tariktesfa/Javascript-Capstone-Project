const moviesCall = async (offset, limit=20) => {
    const movieData = await fetch('https://api.tvmaze.com/shows?page=1');
    const allData = await movieData.json();
    return allData;
}
export default moviesCall;