const API_KEY = "1fa64d62a25ed6785b2082da5951293b";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchLocation = async (query) => {
  const response = await fetch(
    `http://localhost:8080/get-places?location=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Error fetching data from the backend");
  }

  const data = await response.json();
  return data.results; // Ensure this returns an array of objects with `photos` and `photo_reference`
};