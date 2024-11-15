import React, { useState } from "react";
import axios from "axios";

const EnergyPrediction = () => {
  const [dayEnergy, setDayEnergy] = useState("");
  const [nightEnergy, setNightEnergy] = useState("");
  const [population, setPopulation] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        day_energy: parseFloat(dayEnergy),
        night_energy: parseFloat(nightEnergy),
        population: parseFloat(population),
      });
      setPrediction(response.data.prediction);
      setError(null);
    } catch (err) {
      setError("Failed to fetch prediction. Please check your inputs.");
      setPrediction(null);
    }
  };

  return (
    <div >
      <h1 className="font-display m-4 text-white ">
        Next Day Energy Generation Model
      </h1>
      <label className="font-display m-4 text-white">
        Energy consumption in day (MW):
        <input className="text-black"
          type="number"
          value={dayEnergy}
          onChange={(e) => setDayEnergy(e.target.value)}
        />
      </label>
      <br />
      <label className="font-display m-4 text-white">
        Energy consumption in night (MW):
        <input className="text-black"
          type="number"
          value={nightEnergy}
          onChange={(e) => setNightEnergy(e.target.value)}
        />
      </label>
      <br />
      <label className="font-display m-4 text-white">
        Population of the Area:
        <input className="text-black"
          type="number"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
        />
      </label>
      <br />
      <button
        onClick={handlePredict}
        className="font-display m-4 text-white bg-black0e p-4 rounded-md"
      >
        Predict
      </button>
      <br />
      {prediction !== null && (
        <p className="font-display m-4 text-white ">
          Prediction: {prediction} (GW)
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EnergyPrediction;
