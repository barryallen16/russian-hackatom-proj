from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the CatBoost model
model_path = "catboost_model.joblib"  # Replace with your model's path
model = joblib.load(model_path)


@app.route('/predict', methods=['POST'])
def predict():
    # Get the JSON data from the request
    data = request.json
    if not all(key in data for key in ("day_energy", "night_energy", "population")):
        return jsonify({"error": "Missing required fields"}), 400

    # Extract features
    day_energy = float(data['day_energy'])
    night_energy = float(data['night_energy'])
    population = float(data['population'])

    # Prepare input for the model
    input_data = np.array([[day_energy, night_energy, population]])

    # Make prediction
    prediction = model.predict(input_data)
    result = prediction[0] * 100  # Scale as needed

    # Return the result
    return jsonify({"prediction": round(result, 2)})


if __name__ == '__main__':
    app.run(debug=True)
