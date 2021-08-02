// ouverture du menu reponsif
document.getElementById("openNav").addEventListener("click", openNav);
function openNav(){
    document.getElementById("myNav").style.height= "100%";
    this.style.display = "none";
    this.parentElement.parentElement.previousElementSibling.style.display = "none";
}

// fermerture du menu responsif
document.getElementById("closebtn").addEventListener("click", closeNav);
function closeNav(){
    document.getElementById("myNav").style.height= "0%";
    this.parentElement.parentElement.nextElementSibling.style.display = "initial";
    this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.style.display = "initial";
}