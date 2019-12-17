var menArray = [];
var womenArray = [];
var womenUl = document.getElementById("women")
var menUl = document.getElementById("men")
var input = document.getElementById("filterInput")

async function getResponse() {
  try {
    let response = await fetch("https://n161.tech/api/dummyapi/user?limit=5&page=1")

    if (response.ok) {
      let json = await response.json();
      json.data.filter(element => {
        element.nameTitle === "mr" && menArray.push(element);
        (element.nameTitle === "ms" || element.nameTitle === "mrs") && womenArray.push(element)
      });

      // const isMan = element => element.nameTitle === "mr";
      // const isWoman = element => element.nameTitle === "ms" || element.nameTitle === "mrs";
      // const { data } = json;
      // menArray = data.filter(isMan);
      // womenArray = data.filter(isWoman);

      addInArray(womenArray, menArray);
    }
  } catch (error) {
    console.log("Nu ai scris ceva bine");
  }
}

getResponse();

addInArray = (womenArray, menArray) => {

  let e = womenUl.lastElementChild;
  while (e) {
    womenUl.removeChild(e);
    e = womenUl.lastElementChild;
  }
  e = menUl.lastElementChild;
  while (e) {
    menUl.removeChild(e);
    e = menUl.lastElementChild;
  }

  womenArray.forEach(element => {
    let p = document.createElement("li")
    let picture = document.createElement("img")
    picture.src = element.image;
    let text = document.createTextNode(element.firstName + " " + element.lastName)
    p.appendChild(picture)
    p.appendChild(text)
    womenUl.appendChild(p)
  });

  menArray.forEach(element => {
    let p = document.createElement("li")
    let picture = document.createElement("img")
    picture.src = element.image;
    let text = document.createTextNode(element.firstName + " " + element.lastName)
    p.appendChild(picture)
    p.appendChild(text)
    menUl.appendChild(p)
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

console.log(womenUl.childNodes)