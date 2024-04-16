import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers, fetchSinglePlayer } from "../API";
import { Link } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  console.log(players);
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllPlayers() {
      try {
        const response = await fetchAllPlayers();
        console.log(response.data.players);
        setPlayers(response.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPlayers();
  }, []);

  const handlePlayerClick = async (playerId) => {
    try {
      const playerData = await fetchSinglePlayer(playerId);
      navigate(`/players/${playerId}`, { state: { player: playerData } });
    } catch (error) {
      console.error("error fetching player data:", error);
    }
  };
  return (
    <>
      <h1>Puppy Bowl</h1>
      <div>
        {players.map((player) => (
          <div key={player.id}>
            <button onClick={() => handlePlayerClick(player.id)}>
              {player.name}
            </button>
          </div>
        ))}
        ;
      </div>
    </>
  );
}
