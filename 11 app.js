var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};
// view.displayHit("00");
// view.displayMiss("21");
// view.displayHit("06");
// view.displayMiss("51");
// view.displayMessage("Oh Ohh Ohhh! You just hit it.");

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] }
    ],

    fire: function (guess) {

        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            //var locations = ship.locations;          
            var index = ship.locations.indexOf(guess);
            if (ship.hits[index] === "hit") {
                view.displayMessage("Oops, you already hit that location!");
                return true;
            }
            else if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!")
                
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my Battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.")
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ship[i].locations = locations;
        }
        console.log("Ships array: ");
		console.log(this.ships);
    },

    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },

    collision: function (location) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = model.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};

// model.fire(10);
// model.fire(11);
// model.fire(12);


var controller = {
    guesses: 0,

    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battle ships, in " + this.guesses + " guesses");
            }
        }
    }
};

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Opps, please enter a letter and a number on the board.");
    }
    else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Opps, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Opps, that is off the board!");
        } else {
            return row + column;
        }
    }
    return null;
};


// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");

// controller.processGuess("E2");
// controller.processGuess("E3");
// controller.processGuess("E4");

// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");




window.onload = init;

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocations();
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.toUpperCase();
    controller.processGuess(guess);

    guessInput.value = "";
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    e = e || window.event;

    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}



