import React, { useState, useEffect } from 'react';
import StarshipCard from "../comps/StarshipCard"
import { getAllStarships } from "../services/sw-api"
import './index.css'

function App() {
const [starships, setStarships] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  async function fetchStarships() {
    try {
      const data = await getAllStarships();
      setStarships(data.results);
    } catch (error) {
      console.error("Error fetching starships:", error);
    } finally {
      setIsLoading(false);
    }
  }

  fetchStarships();
}, []);

    return (
      
      <div>
        <div className="title">STAR WARS STARSHIPS</div>
        {isLoading ? 
          (
            <p className="loadingMessage">Loading starships...</p>
          ) : 
          (
            starships.length > 0 ? 
              (
                <div className="StarshipCard-container">
                  {starships.map((starship) => (
                    <StarshipCard key={starship.url} name={starship.name} />
                  ))}
                </div>
              ) : 
              (
                <p>No starships found.</p>
              )
          )
        }
      </div>
    );
};


export default App
