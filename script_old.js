document.getElementById('diabetesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('overlay').style.display = 'flex';

    logSelectedValues();
});

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

async function logSelectedValues() {
    // let form = document.getElementById('diabetesForm');
    // let formData = new FormData(form);
    // let data = {};
    // formData.forEach((value, key) => {
    //     if (isNumeric(value)) {
    //         data[key] = parseInt(value, 10);
    //     } else {
    //         data[key] = value;
    //     }
    // });

    // console.log(data)
    // let valuesData = Object.values(data);
    // console.log(valuesData)
    

    // //  Call API (assuming a POST request)
    // fetch('https://dolphin-app-3a4jj.ondigitalocean.app/predict', {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     body: JSON.stringify(valuesData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Display response in overlay
    //     document.getElementById('responseText').innerText = data.message;
    //     document.getElementById('overlay').style.display = 'flex';
    // })
    // .catch(error => console.error('Error:', error));


    // console.log("Selected values:");
    // for (let key in data) {
    //     console.log(`${key}: ${data[key]}`);
    // }

    const data = {
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
    };

    console.log(data);
    
    
    // fetch('http://127.0.0.1:8000/predict', {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
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
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        mode: "no-cors",
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/predict", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
  .catch((error) => console.error(error));
    
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

// function logSelectedValues() {
//     let form = document.getElementById('diabetesForm');
//     let formData = new FormData(form);
//     let data = {};
//     formData.forEach((value, key) => data[key] = value);

//     console.log(data);
//     // for (let key in data) {
//     //     console.log(`${key}: ${data[key]}`);
//     // }
// }

// document.getElementById('diabetesForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Collecting form data
//     let formData = new FormData(event.target);
//     let data = {};
//     formData.forEach((value, key) => data[key] = value);

//     // Call API (assuming a POST request)
//     fetch('YOUR_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Display response in overlay
//         document.getElementById('responseText').innerText = data.message;
//         document.getElementById('overlay').style.display = 'flex';
//     })
//     .catch(error => console.error('Error:', error));
// });

// function closeOverlay() {
//     document.getElementById('overlay').style.display = 'none';
// }
