const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchMoviesBySearch(query) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
      query
    )}&api_key=${apiKey}`
  );
  const data = await res.json();
  return data.results;
}
