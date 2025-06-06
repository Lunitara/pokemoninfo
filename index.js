const getinfobutton = document.getElementById("getpokinfo")
import TCGdex from '@tcgdex/sdk'
const infoinput = document.getElementById("infoinput")

getinfobutton.addEventListener("click", function () {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Pokemon Name ${i + 1}`;
    myDiv.appendChild(input);
})


