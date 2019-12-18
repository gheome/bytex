var menArray = [];
var womenArray = [];
var peopleArray = [];
var womenUl = document.getElementById("women")
var menUl = document.getElementById("men")
var input = document.getElementById("filterInput")
var container = document.getElementsByClassName("container")[0];

async function getResponse() {
  try {
    let response = await fetch("https://n161.tech/api/dummyapi/user?limit=5&page=1")

    if (response.ok) {
      let json = await response.json();
      json.data.filter(element => {
        element.nameTitle === "mr" && menArray.push(element);
        (element.nameTitle === "ms" || element.nameTitle === "mrs") && womenArray.push(element);
        peopleArray.push(element)
      });
      peopleArray.sort((a, b) => a.firstName.localeCompare(b.firstName))  

      // const isMan = element => element.nameTitle === "mr";
      // const isWoman = element => element.nameTitle === "ms" || element.nameTitle === "mrs";
      // const { data } = json;
      // menArray = data.filter(isMan);
      // womenArray = data.filter(isWoman);

      addInArray(peopleArray);
      
    }
  } catch (error) {
    console.log("Nu ai scris ceva bine");
  }
}

getResponse();

addInArray = (array) => {

  // let e = womenUl.lastElementChild;
  // while (e) {
  //   womenUl.removeChild(e);
  //   e = womenUl.lastElementChild;
  // }
  // e = menUl.lastElementChild;
  // while (e) {
  //   menUl.removeChild(e);
  //   e = menUl.lastElementChild;
  // }
  let e = document.getElementsByClassName("container")[0];
  e.innerHTML = "";

  array.forEach(element => {
    let divCard = document.createElement("div")
    let divDetails = document.createElement("div");
    let picture = document.createElement("img");
    let anchorTag = document.createElement("a");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    divCard.className = "card";
    divDetails.className = "details";
    picture.src = element.image;
    h4.textContent = element.firstName + " " + element.lastName;
    p.textContent = "Name title: " + element.nameTitle;
    anchorTag.href = "./redirect.html?id=" + element.id
    container.appendChild(anchorTag);
    anchorTag.appendChild(divCard)
    divCard.appendChild(picture);
    divCard.appendChild(divDetails);
    divDetails.appendChild(h4);
    divDetails.appendChild(p);
  });
  
}

filterNames = () => {

  //let input = document.getElementById("filterInput")
  let newWomenArray = womenArray.filter(element =>
    element.firstName.toLowerCase().includes(input.value.toLowerCase()) ||
    element.lastName.toLowerCase().includes(input.value.toLowerCase())
  )
  let newMenArray = menArray.filter(element =>
    element.firstName.toLowerCase().includes(input.value.toLowerCase()) ||
    element.lastName.toLowerCase().includes(input.value.toLowerCase())
  )
  addInArray(newWomenArray, newMenArray);
}