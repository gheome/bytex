const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
const detailsDiv = document.getElementById("details")
element = []

async function getResponse() {
  try {
    let url = "https://n161.tech/api/dummyapi/user/" + myParam
    let response = await fetch(url)

    if (response.ok) {
      let json = await response.json();
      let img = document.getElementById("image");
      let name = document.getElementById("name");
      name.textContent = json.firstName + " " + json.lastName;
      details.textContent = json.email

      for (let key in json) {
        if (json.hasOwnProperty(key)) {
          if (key == "image") {
            img.src = json.image;
            continue;
          }
          if (typeof (json[key]) === "object") {
            console.log("Am gasit un obiect");
            for (let newObj in json[key]) {
              let keyData = document.createElement("p")
              keyData.textContent = newObj + " -> " + json[key][newObj];
              detailsDiv.appendChild(keyData)
            }
            continue;
          }
            let keyData = document.createElement("p")
            keyData.textContent = key + " -> " + json[key];
            detailsDiv.appendChild(keyData)
        }
      }
    }
  } catch (error) {
    console.log("Eroare " + error);
  }
}

getResponse()