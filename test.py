# valuesData = {
#     "HighBP": 1,
#     "HighChol": 1,
#     "CholCheck": 1,
#     "BMI": 18,
#     "Smoker": 0,
#     "Stroke": 0,
#     "HeartDiseaseorAttack": 0,
#     "PhysActivity": 0,
#     "Fruits": 0,
#     "Veggies": 0,
#     "HvyAlcoholConsump": 0,
#     "AnyHealthcare": 1,
#     "NoDocbcCost": 0,
#     "GenHlth": 4,
#     "MentHlth": 0,
#     "PhysHlth": 0,
#     "DiffWalk": 1,
#     "Sex": 0,
#     "Age": 11,
#     "Education": 2,
#     "Income": 4
# }

# valuesList = [
#     1,  # HighBP
#     1,  # HighChol
#     1,  # CholCheck
#     18, # BMI
#     0,  # Smoker
#     0,  # Stroke
#     0,  # HeartDiseaseorAttack
#     0,  # PhysActivity
#     0,  # Fruits
#     0,  # Veggies
#     0,  # HvyAlcoholConsump
#     1,  # AnyHealthcare
#     0,  # NoDocbcCost
#     4,  # GenHlth
#     0,  # MentHlth
#     0,  # PhysHlth
#     1,  # DiffWalk
#     0,  # Sex
#     11, # Age
#     2,  # Education
#     4   # Income
# ]

import requests

# The list of values
valuesList = [
    1,  # HighBP
    1,  # HighChol
    1,  # CholCheck
    18, # BMI
    0,  # Smoker
    0,  # Stroke
    0,  # HeartDiseaseorAttack
    0,  # PhysActivity
    0,  # Fruits
    0,  # Veggies
    0,  # HvyAlcoholConsump
    1,  # AnyHealthcare
    0,  # NoDocbcCost
    4,  # GenHlth
    0,  # MentHlth
    0,  # PhysHlth
    1,  # DiffWalk
    0,  # Sex
    11, # Age
    2,  # Education
    4   # Income
]

# API endpoint
url = "https://dolphin-app-3a4jj.ondigitalocean.app/predict"

# Data to send in the request
data = {"data": valuesList}

# Sending the request to the API
response = requests.post(url, json=data)

# Checking if the request was successful
if response.status_code == 200:
    # Getting the response data
    result = response.json()
    print("Response from API:", result)
else:
    print("Failed to get response from API. Status code:", response.status_code)
