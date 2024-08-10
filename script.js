document.getElementById('diabetesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('overlay').style.display = 'flex';

    logSelectedValues();
});

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

function logSelectedValues() {

    let form = document.getElementById('diabetesForm');
    let formData = new FormData(form);
    let data = {};
    formData.forEach((value, key) => {
        if (isNumeric(value)) {
            data[key] = parseInt(value, 10);
        } else {
            data[key] = value;
        }
    });

    console.log(data)
    

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data)
    
    // const raw = JSON.stringify({
    //   "HighBP": 1,
    //   "HighChol": 1,
    //   "CholCheck": 1,
    //   "BMI": 18,
    //   "Smoker": 0,
    //   "Stroke": 0,
    //   "HeartDiseaseorAttack": 0,
    //   "PhysActivity": 0,
    //   "Fruits": 0,
    //   "Veggies": 0,
    //   "HvyAlcoholConsump": 0,
    //   "AnyHealthcare": 1,
    //   "NoDocbcCost": 0,
    //   "GenHlth": 4,
    //   "MentHlth": 0,
    //   "PhysHlth": 0,
    //   "DiffWalk": 1,
    //   "Sex": 0,
    //   "Age": 11,
    //   "Education": 2,
    //   "Income": 4
    // });

    console.log(raw);
    
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("https://dolphin-app-3a4jj.ondigitalocean.app/predict", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

