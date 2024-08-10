# # app.py
# from flask import Flask, request, jsonify
# import joblib

# app = Flask(__name__)
# model = joblib.load('diabetes_model.pkl')

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.json
#     prediction = model.predict([data['input']])
#     return jsonify({'prediction': prediction.tolist()})

# if __name__ == '__main__':
#     app.run()



from fastapi import FastAPI
import joblib
import numpy as np

# Initialize the FastAPI app
app = FastAPI()

# Load the trained model and scaler
model = joblib.load('diabetes_model_v0.1.pkl')
scaler = joblib.load('scaler.pkl')

# Define a prediction endpoint
@app.post("/predict")
def predict_diabetes(data: dict):
    # Extract the data and convert to a list
    valuesList = list(data.values())
    
    # Convert to 2D array for model input
    input_data = np.array(valuesList).reshape(1, -1)
    
    # Scale the input
    # input_data_scaled = scaler.transform(input_data)
    
    # Make a prediction
    prediction = model.predict(input_data)
    
    # Return the prediction result
    return {"prediction": int(prediction[0])}
