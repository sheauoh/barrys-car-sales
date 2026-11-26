var params = new URLSearchParams(window.location.search);
var chosenCar = params.get("car");
var carSelect = document.getElementById("car");

if (chosenCar && carSelect) {
    carSelect.value = chosenCar;
}

// Did this to show a confimration instead of actually sending the form
var form = document.querySelector("form");
var confirmation = document.getElementById("confirmation");

if (form && confirmation) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        confirmation.textContent = "Thank you, your enquiry has been sent. We aim to respond within two working days.";
        form.reset();
        confirmation.scrollIntoView();
    });
}