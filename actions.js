
// Store all participants in an array
var participants = [];

// Get HTML elements
var participantForm = document.getElementById("participantForm");
var participantName = document.getElementById("participantName");
var participantList = document.getElementById("participantList");
var participantCount = document.getElementById("participantCount");
var drawButton = document.getElementById("drawButton");
var resetButton = document.getElementById("resetButton");
var winnerSection = document.getElementById("winnerSection");
var winnerName = document.getElementById("winnerName");

// Register a participant
participantForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get the name and remove extra spaces
    var name = participantName.value.trim();

    // Check if the name is empty
    if (name === "") {
        alert("Please enter a participant's name.");
        return;
    }

    // Add the name to the participants array
    participants.push(name);

    // Update the participant list
    displayParticipants();

    // Clear the input field
    participantName.value = "";

    // Hide the previous winner
    winnerSection.style.display = "none";

});

// Display all participants
function displayParticipants() {

    // Clear the current participant list
    participantList.innerHTML = "";

    // Loop through the participants array
    for (var i = 0; i < participants.length; i++) {

        // Create a new list item
        var listItem = document.createElement("li");

        // Add the participant's name
        listItem.textContent = (i + 1) + ". " + participants[i];

        // Add the item to the participant list
        participantList.appendChild(listItem);
    }

    // Update the participant counter
    participantCount.textContent = participants.length + " registered";

}

// Draw a random winner
drawButton.addEventListener("click", function() {

    // Check if there are participants
    if (participants.length === 0) {
        alert("You need to add participants before drawing a winner!");
        return;
    }

    // Generate a random number
    var randomIndex = Math.floor(Math.random() * participants.length);

    // Select the winner
    var winner = participants[randomIndex];

    // Display the winner's name
    winnerName.textContent = winner;

    // Show the winner announcement
    winnerSection.style.display = "block";

    // Scroll down to the winner announcement
    winnerSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

// Reset the raffle
resetButton.addEventListener("click", function() {

    // Clear all participants from the array
    participants.length = 0;

    // Update the participant list and counter
    displayParticipants();

    // Clear the previous winner's name
    winnerName.textContent = "";

    // Hide the winner announcement
    winnerSection.style.display = "none";

    // Clear the name input
    participantName.value = "";

});
