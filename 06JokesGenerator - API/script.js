//Chuck Noorries joke Get API link https://api.chucknorris.io/jokes/random

let nextJokeBtn = document.querySelector("#jokeBtn");
let newJoke = document.querySelector("#joke")

nextJokeBtn.addEventListener("click", () =>{
  fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => response.json())
  .then((data) => {newJoke.innerHTML = data.value});
})


