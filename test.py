import requests
import json

url = "http://127.0.0.1:8000/predict"

payload = json.dumps({
  "HighBP": 1,
  "HighChol": 1,
  "CholCheck": 1,
  "BMI": 18,
  "Smoker": 0,
  "Stroke": 0,
  "HeartDiseaseorAttack": 0,
  "PhysActivity": 0,
  "Fruits": 0,
  "Veggies": 0,
  "HvyAlcoholConsump": 0,
  "AnyHealthcare": 1,
  "NoDocbcCost": 0,
  "GenHlth": 4,
  "MentHlth": 0,
  "PhysHlth": 0,
  "DiffWalk": 1,
  "Sex": 0,
  "Age": 11,
  "Education": 2,
  "Income": 4
})
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
