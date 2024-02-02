let joke = document.querySelector("joke")
let button = document.querySelector("button")

function fetchData(){
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then((reponse)=>reponse.json())
    .then((data)=>{
        console.log(data);
        return data
    })
}

button.addEventListener("click",()=>{
    fetchData()
})