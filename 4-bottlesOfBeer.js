//Code prints complete lyrics to 99 bottles of beer

var beers = 99
while (beers > 2) {
        console.log(beers + " bottles of beer on the wall");
        console.log(beers + " bottles of beer");
        console.log("Take one down and pass it around...");
        beers = beers -1;
        if (beers > 2) {
        console.log(beers + " bottles of beer on the wall");

    }
    if (beers == 2) {
        console.log(beers + " more bottles of beer on the wall");
        console.log(beers + " more bottles of beer on the wall");
        console.log(beers + " bottles of beer")
        console.log("Take one down and pass it around");
        beers = beers -1;
    }
    if (beers == 1) {
        console.log(beers + " more bottle of beer on the wall");
        console.log(beers + " more bottle of beer on the wall");
        console.log(beers + " one more bottle of beer");
        console.log("Take one down and pass it around");
        beers = beers -1;
        console.log("There's no more bottles of beer on the wall");
    }
    
};
