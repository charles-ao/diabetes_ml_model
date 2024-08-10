import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    Age: "",
    BMI: "",
    Smoker: "",
    Sex: "",
    HighBP: "",
    HighChol: "",
    Stroke: "",
    HeartDiseaseorAttack: "",
    PhysActivity: "",
    CholCheck: "",
    Fruits: "",
    Veggies: "",
    GenHlth: "",
    DiffWalk: "",
    MentHlth: "",
    PhysHlth: "",
    HvyAlcoholConsump: "",
    Education: "",
    Income: "",
    NoDocbcCost: "",
    AnyHealthcare: ""
  });
  
  const [responseText, setResponseText] = useState("");
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://dolphin-app-3a4jj.ondigitalocean.app/predict', formData)
      .then((response) => {
        setResponseText(response.data);
        console.log(response.data);
        setOverlayVisible(true);
      })
      .catch((error) => {
        setResponseText("An error occurred. Please try again.");
        console.log(error);
        setOverlayVisible(true);
      });
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Diabetes Checker</h1>
          <form onSubmit={handleSubmit} id="diabetesForm">
            {/* Render input fields using a map to make this dynamic */}
            {Object.keys(formData).map((key) => (
              <div key={key} className="form-row">
                <div className="col-md-6 mb-3">
                  <label>{key}</label>
                  {key === "Age" || key === "Smoker" || key === "Sex" || key === "HighBP" || key === "HighChol" || key === "Stroke" ||
                    key === "HeartDiseaseorAttack" || key === "PhysActivity" || key === "CholCheck" || key === "Fruits" || key === "Veggies" ||
                    key === "GenHlth" || key === "DiffWalk" || key === "HvyAlcoholConsump" || key === "Education" || key === "Income" ||
                    key === "NoDocbcCost" || key === "AnyHealthcare" ? (
                    <select
                      className="form-control"
                      name={key}
                      onChange={handleChange}
                      value={formData[key]}
                      required
                    >
                      {/* Options should be dynamically generated based on the key */}
                      <option value="">Select</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                      {/* Add more options based on the key */}
                    </select>
                  ) : (
                    <input
                      type="number"
                      className="form-control"
                      name={key}
                      onChange={handleChange}
                      value={formData[key]}
                      required
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {overlayVisible && (
        <div id="overlay" className="overlay">
          <div className="overlay-content">
            <span className="close-btn" onClick={closeOverlay}>&times;</span>
            <p id="responseText">{responseText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
