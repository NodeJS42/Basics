function band(vocals, drums, guitar) {
	this.vocals = vocals;
	this.drums = drums;
	this["lead guitar"] = guitar;
};

console.log(band.toString());

var metallica = new band("James Hetfield", "Lars Ulrich", "Kirk Hammett");
console.log("creating a Metallica band :\n");
console.log(metallica);

band.prototype.nationality = "";
console.log("\nadding Nationality to the band prototype");
console.log(band.prototype);

console.log("\nadding methods to the band prototype does not affect existing objects.\n calling metallica.prototype:");

console.log(metallica.prototype);

var acdc = new band("Brian Johnson", "Chris Slade", "Angus Young");

acdc["rythm guitar"] = "Stevie Young";
acdc["bass guitar"] =  "Cliff Williams";
acdc.nationality = "Australian"

console.log("\ncreating an AC/DC  band :\n");
console.log(acdc);

var copieur = acdc;
acdc.year = 1973;
console.log("\nFrench copieur band will be updated as acdc is:\n");
console.log(copieur);
