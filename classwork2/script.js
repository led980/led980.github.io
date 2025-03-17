let bio = document.getElementById("bio")
let number = document.getElementById("number")
bio.addEventListener("input", event =>{
    let val = event.target.value;
    console.log(val, val.length);
    number.textContent = 100-val.length;
})