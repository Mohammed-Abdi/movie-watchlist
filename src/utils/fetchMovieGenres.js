const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchTvGenres() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US
`
  );
  const data = await res.json();
  return data.genres;
}
