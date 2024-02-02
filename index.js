let joke = document.querySelector("#joke")
let button = document.querySelector("button")

function fetchData(){
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then((reponse)=>reponse.json())
    .then((data)=>{
        console.log(data);
        if(data.type==="single"){
           return joke.textContent = data.joke
        }else{
           return joke.textContent = data.setup + data.delivery
        }
    })
}
window.addEventListener("load",()=>{
    fetchData()
})

button.addEventListener("click",()=>{
    fetchData()
})