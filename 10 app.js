var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Blue",
    convertible: false,
    passengers: 2,
    mileage: 56780,

    started: false,

    start: function () {
        this.started = true;
    },

    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            alert("Zoom-zoom !");
        } else {
            alert("You need to start the engine first.");
        }
    }
};
fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();
