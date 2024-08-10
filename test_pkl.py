import pickle
from xgboost import XGBClassifier

# Load the model from the PKL file
with open('diabetes_model.pkl', 'rb') as file:
    model = pickle.load(file)

print(model)

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


# Make predictions
predictions = model.predict(valuesList)

print(predictions)
