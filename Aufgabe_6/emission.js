//Daten
var europe18 = 4209.3;
var europe8 = 4965.7;
var asia18 = 16274.1;
var asia8 = 12954.7;
var africa18 = 1235.5;
var africa8 = 1028;
var australia18 = 2100.5;
var australia8 = 1993;
var northamerica18 = 6035.6;
var northamerica8 = 6600.4;
var southamerica18 = 2100.5;
var southamerica8 = 1993;
//Rechnen
var gesamt = (europe18 + asia18 + africa18 + australia18 + northamerica18 + southamerica18);
var euworld = (europe18 / gesamt) * 100;
var eu188prozent = (europe18 / europe8) * 100;
var eu188zahl = (europe18 - europe8);
var asworld = (asia18 / gesamt) * 100;
var as188prozent = (asia18 / asia8) * 100;
var as188zahl = (asia18 - asia8);
var afworld = (africa18 / gesamt) * 100;
var af188prozent = (africa18 / africa8) * 100;
var af188zahl = (africa18 - africa8);
var auworld = (australia18 / gesamt) * 100;
var au188prozent = (australia18 / australia8) * 100;
var au188zahl = (australia18 - australia8);
var noworld = (northamerica18 / gesamt) * 100;
var no188prozent = (northamerica18 / northamerica8) * 100;
var no188zahl = (northamerica18 - northamerica8);
var soworld = (southamerica18 / gesamt) * 100;
var so188prozent = (southamerica18 / southamerica8) * 100;
var so188zahl = (southamerica18 - southamerica8);
//Funktionen
function functionEurope() {
    document.querySelector(".texteins").innerHTML = " Europe";
    document.querySelector(".textzwei").innerHTML = " Emission absolute of Europe in 2018";
    document.querySelector(".zahleins").innerHTML = "" + europe18 + "kg CO2";
    document.querySelector(".zahlzwei").innerHTML = "" + euworld.toFixed(2) + "%";
    document.querySelector(".zahldrei").innerHTML = "" + eu188prozent.toFixed(2) + "%";
    document.querySelector(".zahlvier").innerHTML = "" + eu188zahl.toFixed(2) + "kg CO2";
    document.querySelector('.chart').setAttribute('style', 'height:' + euworld + '%');
}
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener('click', functionEurope);
});
function functionAsia() {
    document.querySelector(".texteins").innerHTML = " Asia";
    document.querySelector(".textzwei").innerHTML = " Emission absolute of Asia in 2018";
    document.querySelector(".zahleins").innerHTML = "" + asia18 + "kg CO2";
    document.querySelector(".zahlzwei").innerHTML = "" + asworld.toFixed(2) + "%";
    document.querySelector(".zahldrei").innerHTML = "" + as188prozent.toFixed(2) + "%";
    document.querySelector(".zahlvier").innerHTML = "" + as188zahl.toFixed(2) + "kg CO2";
    document.querySelector('.chart').setAttribute('style', 'height:' + asworld + '%');
}
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener('click', functionAsia);
});
function functionAfrica() {
    document.querySelector(".texteins").innerHTML = " Africa";
    document.querySelector(".textzwei").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".zahleins").innerHTML = "" + africa18 + "kg CO2";
    document.querySelector(".zahlzwei").innerHTML = "" + afworld.toFixed(2) + "%";
    document.querySelector(".zahldrei").innerHTML = "" + af188prozent.toFixed(2) + "%";
    document.querySelector(".zahlvier").innerHTML = "" + af188zahl.toFixed(2) + "kg CO2";
    document.querySelector('.chart').setAttribute('style', 'height:' + afworld + '%');
}
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener('click', functionAfrica);
});
function functionAustralia() {
    document.querySelector(".texteins").innerHTML = " Australia";
    document.querySelector(".textzwei").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".zahleins").innerHTML = "" + australia18 + "kg CO2";
    document.querySelector(".zahlzwei").innerHTML = "" + auworld.toFixed(2) + "%";
    document.querySelector(".zahldrei").innerHTML = "" + au188prozent.toFixed(2) + "%";
    document.querySelector(".zahlvier").innerHTML = "" + au188zahl.toFixed(2) + "kg CO2";
    document.querySelector('.chart').setAttribute('style', 'height:' + auworld + '%');
}
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener('click', functionAustralia);
});
function functionNamerika() {
    document.querySelector(".texteins").innerHTML = " Northamerica";
    document.querySelector(".textzwei").innerHTML = "Emission absolute of Northamerika in 2018";
    document.querySelector(".zahleins").innerHTML = "" + northamerica18 + "kg CO2";
    document.querySelector(".zahlzwei").innerHTML = "" + noworld.toFixed(2) + "%";
    document.querySelector(".zahldrei").innerHTML = "" + no188prozent.toFixed(2) + "%";
    document.querySelector(".zahlvier").innerHTML = "" + no188zahl.toFixed(2) + "kg CO2";
    document.querySelector('.chart').setAttribute('style', 'height:' + noworld + '%');
}
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener('click', functionNamerika);
});
function functionSamericaa() {
    document.querySelector(".texteins").innerHTML = " Southamerica";
    document.querySelector(".textzwei").innerHTML = "Emission absolute of Southamerica in 2018";
    document.querySelector(".zahleins").innerHTML = "" + southamerica18 + "kg CO2";
    document.querySelector(".zahlzwei").innerHTML = "" + soworld.toFixed(2) + "%";
    document.querySelector(".zahldrei").innerHTML = "" + so188prozent.toFixed(2) + "%";
    document.querySelector(".zahlvier").innerHTML = "" + so188zahl.toFixed(2) + "kg CO2";
    document.querySelector('.chart').setAttribute('style', 'height:' + soworld + '%');
}
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener('click', functionSamericaa);
});
//# sourceMappingURL=emission.js.map