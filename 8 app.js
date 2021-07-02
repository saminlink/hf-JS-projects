var products = ["cho", "icy", "cake", "bubblegum"];

var hasBubbleGum = [false, false, false, true];

for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " has bubble gum");
    }
}
