import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const Asteroids = () => {
  const { state, getAsteroidsData } = useContext(DataContext);

  useEffect(() => {
    getAsteroidsData();
  }, []);

  if (!state.asteroidsData)
    return <div className="loading">Loading asteroid data...</div>;

  const asteroidEntries = Object.values(
    state.asteroidsData.near_earth_objects
  ).flat();

  return (
    <div className="asteroids">
      <h2>Yakın Geçiş Yapacak Asteroitler</h2>
      <ul>
        {asteroidEntries.map((asteroid) => (
          <li key={asteroid.id}>
            <h3>{asteroid.name}</h3>
            <p>
              Yaklaşma Tarihi:{" "}
              {asteroid.close_approach_data[0].close_approach_date}
            </p>
            <p>
              Çap:{" "}
              {asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
                2
              )}
              km -{" "}
              {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
                2
              )}
              km
            </p>
            <p>
              Hız:{" "}
              {
                asteroid.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              }{" "}
              km/s
            </p>
            <p>
              Is Potentially Hazardous ? :{" "}
              {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Asteroids;
