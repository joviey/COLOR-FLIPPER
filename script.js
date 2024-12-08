const color = ["red", "green", "rgba(133, 122, 200)", "#fif5f8", "white", "blue", "pink", "orange"];
const btn = document.getElementById("btn")
const colors = document.getElementById("color")

btn.addEventListener("click", function(){
    let randNumber = getRandomNumber()
    console.log(randNumber)
    document.body.style.backgroundColor = color[randNumber];
    colors.textContent = color[randNumber];
})


function getRandomNumber(){
    return Math.floor(Math.random()*color.length)
}