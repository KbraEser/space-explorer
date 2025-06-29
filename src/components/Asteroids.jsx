import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import "../assets/styles/asteroids.scss";

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
      <h2 className="title">Near Earth Object Web Service(3 days)</h2>
      <ul>
        {asteroidEntries.map((asteroid) => (
          <li key={asteroid.id}>
            <div className="asteroid-info">
              <h3>Name: {asteroid.name}</h3>
              <p>
                <strong> Close Approach Date:</strong>{" "}
                {asteroid.close_approach_data[0].close_approach_date}
              </p>
              <p>
                <strong> Diameter:</strong>{" "}
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
                <strong>Speed:</strong>{" "}
                {parseFloat(
                  asteroid.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                ).toFixed(2)}{" "}
                km/h
              </p>
              <p
                style={{
                  color: asteroid.is_potentially_hazardous_asteroid
                    ? "red"
                    : "#ffeb00",
                }}
              >
                Is Potentially Hazardous ? :{" "}
                {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Asteroids;
