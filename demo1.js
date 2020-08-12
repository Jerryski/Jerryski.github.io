console.log("Kohta A")
let admin;
let nimi;
nimi = "Juha";
admin = nimi;
console.log(admin);

console.log("Kohta B")
let planeetta;
let guest;


console.log("Kohta C")


let sade;
let piiri;
let ala;
let halkaisija = 3;

sade = halkaisija/2;
piiri = 2 * Math.PI * sade;
ala = Math.PI * sade * sade;

console.log("Ympyrän sade on " + sade + ", piiri on " + piiri + " ja pinta-ala on " + ala)


console.log("Kohta D")

let matka = 370; 
let matkanhinta;
let bensanhinta = 1.56;
let kulutus = 5.5;

matkanhinta = kulutus * matka/100 * bensanhinta;
/* bensaa kuluu 5.5 * 370/100 ja se maksaa kulutus * hinta */

console.log("Matka maksaa " + matkanhinta + "euroa");
