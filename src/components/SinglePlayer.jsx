import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { APIURL } from "../API";
import { fetchSinglePlayer } from "../API";

export default function SinglePlayer() {
  const navigate = useNavigate();
  const { playerId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleShowStats = async () => {
    setIsLoading(true);
    try {
      const playerData = await fetchSinglePlayer(playerId);
      navigate(`/players/${playerId}`, { state: { player: playerData } });
    } catch (error) {
      console.error("Error fetching player data:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Single Player Stats</h1>
      {/* Button to show stats */}
      <button onClick={handleShowStats} disabled={isLoading}>
        {isLoading ? "Loading..." : "Show Stats"}
      </button>
    </div>
  );
}
