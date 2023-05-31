var output = document.getElementById("OOP");

var car = car || {};

car.make = "Ford";
car.model = "Mustang";
car.color = "Blue";

car.display = function() {
    output.innerHTML += "<p> Your car is a " + this.color + " " + this.make + " " + this.model + ".</p>";
};

car.display();