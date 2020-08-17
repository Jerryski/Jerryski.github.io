let nimi = prompt("Anna nimesi");
console.log(nimi);

//Kohta A
console.log("kohta A");
let vuosi = prompt("Minä vuonna ECMAScript-2015 pecifikaatio julkistettiin?");// pyytää käyttjältä arvon muutujalle vuosi

if(vuosi < 2015) {
    console.log("Annoit vuoden " + vuosi);
    console.log("Vastaus on liian aikainen. . .");
}
else if(vuosi > 2015) {
    console.log("Annoit vuoden " + vuosi);
    console.log("Vastaus on Liian myöhään");
}
else console.log("Juuri niin, vuosi on totta kai " + vuosi)

console.log("Kohta B")

let ika = prompt("Anna ikäsi");
if(ika >= 14 && ika <= 90) console.log("Ikä on välillä 14 - 90");
if(ika <= 14 || ika >= 90) console.log("Ikä ei ole välillä 14 - 90");

let luku1 = 0;
let luku2 = "0";
let luku3 = -1;
let luku4 = 1;
let luku5 = 100;

/*jos $luku1 on nolla, tulosta "nolla" */
if(luku1 === 0) console.log("Nolla");
/*jos $luku2 on nolla, tulosta "nolla"*/
if(luku2 === 0) console.log("Nolla");
/*jos $luku2 on pienempi kuin $luku 4, tulosta "luku 2 on pienempi", muuten tulosta "luku 2 ei ole pienempi"*/
if(luku2 < luku4) console.log("Luku 2 on pienempi");
else console.log("luku 2 ei ole pienempi");
/*jos $luku4 on $luku1:n ja $luku5:n välissä, tulosta "välissä"*/
if(luku4 > luku1 && luku4 < luku5) console.log("Välissä");
else if (luku4 < luku1 || luku4 > luku5) console.log("Reunassa");
else console.log("ok, kysyinkö?");
/*jos $luku4 on pienempi kuin $luku1 tai suurempi kuin $luku5, tulosta "reunassa", muuten tulosta "ok"*/
/*if(luku1 == 0) console.log("nolla");*/


