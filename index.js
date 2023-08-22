document.querySelector("button").addEventListener("click", ()=> {
    document.querySelector("input").style.borderColor="hsl(354, 100%, 66%)";
    document.querySelector("input").setAttribute("placeholder", "example@email.com");
    document.querySelector("p.error-msg").classList.toggle("invisible");
});