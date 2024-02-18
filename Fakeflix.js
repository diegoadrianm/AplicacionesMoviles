

document.getElementById("cuadroTexto").addEventListener("focus", esconderTexto);
document.getElementById("cuadroTexto").addEventListener("focus", esconderTextoAlt);
document.getElementById("cuadroTexto").addEventListener("input", mostrarDiv);

function esconderTexto()
{
    let x = document.getElementById("SearchBarText").style.display;
    if (x === "none") {
        document.getElementById("SearchBarText").style.display = "block";
        document.getElementById("MagnifyingGlass").style.display = "block";
    } else {
        document.getElementById("SearchBarText").style.display = "none";
        document.getElementById("MagnifyingGlass").style.display = "none";
    }
}

function esconderTextoAlt()
{
    let x = document.getElementById("SearchBarTextAlt").style.display;
    if (x === "none") {
        document.getElementById("SearchBarTextAlt").style.display = "block";
        document.getElementById("MagnifyingGlass").style.display = "block";
    } else {
        document.getElementById("SearchBarTextAlt").style.display = "none";
        document.getElementById("MagnifyingGlass").style.display = "block";
    }
}


function mostrarDiv()
{
   let x = document.getElementById("recomendaciones").style.display;
   if (x === "none") {
       document.getElementById("recomendaciones").style.display = "block";
 
   } else {
       document.getElementById("recomendaciones").style.display = "none";
   }
}