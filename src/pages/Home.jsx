import { useState, useEffect } from "react";
import { searchLocation, getPopularMovies } from "../services/api";
import "../css/home.css";

import backgroundImage from "../assets/public/background.jpeg"; // Import the image
import MovieCard from "../components/MovieCard";

function Home() {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format

  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState(today); // Default to today's date
  const [returnDate, setReturnDate] = useState(today); // Default to today's date
  const [returnDateBkp, setReturnDateBkp] = useState(today); // Backup for return date
  const [tripType, setTripType] = useState("round-trip"); // Default trip type is "Round Trip"
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        // const popularMovies = await getPopularMovies();
        // setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!fromLocation.trim() || !toLocation.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchLocation(toLocation); // Search for the "to" location
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search location...");
    } finally {
      setLoading(false);
    }
  };

  // Reset returnDate if "One Way" is selected
  useEffect(() => {
    if (tripType === "one-way") {
      setReturnDate(""); // Set returnDate to blank when "One Way" is selected
    }
  }, [tripType]);

  // Reset returnDate if "round-trip" is selected
  useEffect(() => {
    if (tripType === "round-trip") {
      setReturnDate(returnDateBkp); // Restore returnDate from backup
    }
  }, [tripType]);

  // Handle departure date change
  const handleDepartureDateChange = (e) => {
    const selectedDepartureDate = e.target.value;
    setDepartureDate(selectedDepartureDate);

    // If departure date is greater than return date, reset return date
    if (selectedDepartureDate > returnDate) {
      setReturnDate(selectedDepartureDate); // Set return date to the new departure date
      setReturnDateBkp(selectedDepartureDate); // Update backup as well
    }
  };

  // Handle return date change
  const handleReturnDateChange = (e) => {
    const selectedReturnDate = e.target.value;
    setReturnDate(selectedReturnDate);
    setReturnDateBkp(selectedReturnDate); // Update backup
  };

  // Get minimum allowed date for return date
  const minReturnDate = tripType === "round-trip" ? departureDate : today;

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "cover", // Ensure the image covers the entire container
        backgroundPosition: "center", // Center the image
        minHeight: "100vh", // Ensure the container takes at least the full viewport height
        padding: "20px", // Add some padding
      }}
    >
      <form onSubmit={handleSearch} className="search-form">
        {/* Trip Type (One Way / Round Trip) */}
        <div className="trip-type">
          <label>
            <input
              type="radio"
              name="trip-type"
              value="round-trip"
              checked={tripType === "round-trip"}
              onChange={(e) => setTripType(e.target.value)}
            />
            Round Trip
          </label>
          <label>
            <input
              type="radio"
              name="trip-type"
              value="one-way"
              checked={tripType === "one-way"}
              onChange={(e) => setTripType(e.target.value)}
            />
            One Way
          </label>
        </div>

        {/* From Location Input */}
        <input
          type="text"
          placeholder="From Location"
          className="search-input"
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
          required
        />

        {/* To Location Input */}
        <input
          type="text"
          placeholder="To Location"
          className="search-input"
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
          required
        />

        {/* Departure Date Input */}
        <input
          type="date"
          className="search-input"
          value={departureDate}
          onChange={handleDepartureDateChange} // Updated handler
          required
        />

        {/* Return Date Input */}
        <input
          type="date"
          className="search-input"
          value={returnDate}
          onChange={handleReturnDateChange}
          min={minReturnDate} // Set the minimum return date to be the same as departure date (for round trips)
          disabled={tripType === "one-way"} // Disable return date if trip is one-way
          placeholder={tripType === "one-way" ? "Not Applicable" : ""}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie, index) => (
            <div key={index}>
              <MovieCard movie={movie} />
              <p className="movie-location">{movie.vicinity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;