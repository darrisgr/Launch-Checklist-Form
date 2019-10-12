// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function () {
   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoWeight = document.querySelector("input[name=cargoWeight]");
      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevel.value === "" || cargoWeight.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevel.value) || isNaN(cargoWeight.value)) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
      else if (fuelLevel.value <= 10000 || cargoWeight.value >= 10000) {
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch.`;
         fuelStatus.innerHTML = "Fuel level high enough for launch";
         cargoStatus.innerHTML = "Cargo weight low enough for launch";
         
         if (fuelLevel.value <= 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
         }
         else if (cargoWeight.value >= 10000) {
            cargoStatus.innerHTML = "Cargo weight too high for launch";
         };
         event.preventDefault();
      }
      else {
         faultyItems.style.visibility = "hidden";
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle Is Ready for Launch";
         event.preventDefault();
      };
   });
});