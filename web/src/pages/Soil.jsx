import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

import "../styles/Soil.css";

export const Soil = () => {
  const [listOfSoils, setListOfSoils] = useState([]);
  const [error, setError] = useState("");
  const [showList, setShowList] = useState(false);
  const showAllSoils = async () => {
    try {
      const res = await axios.get("http://localhost:10000/api/v1/soil");
      setListOfSoils(res.data);
      setError("");
      setShowList(true);
    } catch (err) {
      setError("Error fetching soils");
    }
  };

  return (
    <div className="soils-list">
      {!showList && <button onClick={showAllSoils}>Show Soils</button>}
      {error && <p className="error">{error}</p>}
      {showList && (
        <div>
          <ol>
            {listOfSoils.map((soil, index) => (
              <li key={index}>{soil.name}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};
