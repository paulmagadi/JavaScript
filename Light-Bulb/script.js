// Get references to the buttons and the image element
var bulbOnButton = document.getElementById('bt-on');
var bulbOffButton = document.getElementById('bt-off');
var lightBulb = document.getElementById('bulb');

// Event listener for the "Light On" button
bulbOnButton.addEventListener('click', function() {
    lightBulb.src = 'bulb-on.gif';
});

// Event listener for the "Light Off" button
bulbOffButton.addEventListener('click', function() {
    lightBulb.src = 'bulb-off.gif';
});
