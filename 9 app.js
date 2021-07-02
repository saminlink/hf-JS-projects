function makeCar() {

    var makes = ["chievy", "gm", "fiat", "hyundai", "maruti"];
    var models = ["500", "taxi", "torpedo", "bel-air", "cadillac"];
    var years = [1956, 1823, 1947, 1970, 1985];
    var colors = ["red", "blue", "yellow", "white", "black"];
    var convertible = [true, false];

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 2);
    var rand6 = Math.floor(Math.random() * 5) + 1;

    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        convertible: convertible[rand5],
        passengers: [rand6],
        mileage: 0
    };
    return car;
}
function displayCar(car) {
    console.log("Your new car is :" + " " + car.year + " " + car.make + " " + car.model);
}
var carToSell = makeCar();
displayCar(carToSell);