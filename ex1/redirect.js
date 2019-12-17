const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam);
element = []

async function getResponse() {
    try {
      let url = "https://n161.tech/api/dummyapi/user/" + myParam
      let response = await fetch(url)

      if (response.ok) {
        let json = await response.json();
        console.log(json);
        let img = document.getElementById("image");
        let name = document.getElementById("name");
        let details = document.getElementById("details");
        img.src = json.image
        name.textContent = json.firstName + " " + json.lastName;
        details.textContent = json.email
      }
    } catch (error) {
      console.log("Eroare");
    }
  }

  getResponse().then(() => {
    
  });
  console.log(element);
  