var params = new URLSearchParams(window.location.search);
var chosenCar = params.get("car");
var carSelect = document.getElementById("car");

if (chosenCar && carSelect) {
    carSelect.value = chosenCar;
}
