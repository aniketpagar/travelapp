import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  // Construct the image URL using the photo_reference
  const imageUrl = movie.photos?.[0]?.photo_reference || "https://via.placeholder.com/500"; // Fallback image if no photo is available
// const imageUrl = movie.photos?.[0]?.photo_reference || "http://localhost:8080
http://localhost:8080

  return (
    <div className="location-card">
      <div className="location-poster">
        {/* <p imageUrl /> */}
        <img src={imageUrl} alt={movie.name} className="movie-image" />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="location-info">
        <h3 className="location-name">{movie.name}</h3>
        <p className="location-addr">{movie.vicinity}</p>
      </div>
    </div>
  );
}

export default MovieCard;