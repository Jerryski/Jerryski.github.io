let luku0 = -43;
let luku1 = 55;

if(luku0 < luku1) {
    console.log("Luku " + luku1 + " on suurempi");
}
else if(luku0 == luku1) {
    console.log("Luvut ovat yhtäsuuret");
}


console.log("Kohta C");

let luku2 = -34;
let luku3 = 55;
let luku4 = 21;

if(luku2 < luku3 <luku3) {
    console.log(luku3 + " on isoin luku!");
}

console.log("Kohta D");

let t1 = 56000;
let k1 = 61000;
let t2 = 54000;
let k2 = 50000;

if(t1 < k1) console.log("Voittoa")
else if(t2 > k2) console.log("Häviötä")
console.log("Kohta E")

let vastaus = prompt("Oletko kissa- vai koira ihminen? Kirjoita koira tai kissa")

if(vastaus == "koira") console.log("Koirien kanssa onkin mukava ulkoilla ja harrastaa")
else if(vastaus == "kissa") console.log("Kissoja onkin mukava silitellä ja kuunnella niiden kehräystä");

console.log("Kohta F")

let numerot = prompt("Anna ensimmäinen luku")
let numerot2 = prompt("Anna toinen luku")
let laskutoimitus = prompt("Anna laskutoimitus mitä haluat käyttää? +,-,/, tai *");
numerot = Number(numerot)
numerot2 = Number(numerot2)
if(laskutoimitus =="+"){
    console.log(numerot+numerot2);
}

else if(laskutoimitus =="/"){
    console.log(numerot/numerot2);
}

else if(laskutoimitus =="-"){
    console.log(numerot-numerot2);
}
else if(laskutoimitus =="*"){
    console.log(numerot*numerot2);
}
