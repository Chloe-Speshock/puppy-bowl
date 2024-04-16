import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../API";

export default function NewPlayerForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await addPlayer({ name, position });

      navigate("/");
    } catch (error) {
      console.error("Error adding player:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Position:
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Player"}
        </button>
      </form>
    </div>
  );
}
