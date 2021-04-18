document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((obj) => fetchImgs(obj));
  //console.log("HHH")
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((obj) => fetchBreed(obj));

//   const liCollection = document.getElementsByTagName("li");
//   for (li of liCollection) {
//       console.log(li);
    
//   }
});

function fetchImgs(obj) {
  obj.message.forEach((imgURL) => {
    const img = document.createElement("img");
    img.src = imgURL;
    document.getElementById("dog-image-container").appendChild(img);
  });
}

function fetchBreed(obj) {
  Object.keys(obj.message).forEach((key) => {
    const li = document.createElement("li");
    li.innerHTML = key;
    li.addEventListener("click", () => {
        li.style.color = "blue";
      });
    document.getElementById("dog-breeds").appendChild(li);
  });
  //document.getElementById("breed-dropdown").setAttribute("onchange", filterBreed);
  document.getElementById("breed-dropdown").addEventListener("change", filterBreed);
}

function filterBreed(){
    console.log("HHHH")
    const letter = document.getElementById("breed-dropdown").value;
    document.querySelectorAll("li").forEach((li)=>{
        (li.innerHTML[0] != letter) ? (li.style.display = "none") : (li.style.display = "block");
    })
}
