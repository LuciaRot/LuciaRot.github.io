var text1:string = "Die Emission von Europa ist ";
var text2:string = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";
var text3:string = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ";
var text4:string = "verändert";
var text5:string = "2018 im Vergleich zu 2008 sind das ";
var europa:number = 4209.3;
var europa8:number = 4965.7;
var gesamt:number = (europa+afrika+asien+australien+namerika+samerika);

var text6:string = "Die Emission von Afrika ist ";
var text7:string = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";
var text8:string = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var afrika:number = 1235.5;
var afrika8:number = 1028;

var text9:string = "Die Emission von Asien ist ";
var text10:string = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";
var text11:string = "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var asien:number = 16274.1;
var asien8:number = 12954.7;

var text12:string = "Die Emission von Australien ist ";
var text13:string = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";
var text14:string = "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var australien:number = 2100.5;
var australien8:number = 1993;

var text15:string = "Die Emission von Nord Amerika ist ";
var text16:string = "Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit ";
var text17:string = "Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var namerika:number = 6035.6;
var namerika8:number = 6600.4;

var text18:string = "Die Emission von Süd Amerika ist ";
var text19:string = "Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit ";
var text20:string = "Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var samerika:number = 1261.5;
var samerika8:number = 1132.6;

console.log(text1 + europa + "kg CO2");
console.log(text2 + (europa/gesamt)*100 + "%");
console.log(text3 + (europa/europa8-1)*100 + "%");
console.log(text4);
console.log(text5 + (europa-europa8) + "kg CO2"); 

console.log(text6 + afrika + "kg CO2");
console.log(text7 + (afrika/gesamt)*100 + "%");
console.log(text8 + (europa/europa8-1)*100 + "%");
console.log(text4);
console.log(text5 + (afrika-afrika8) + "kg CO2");

console.log(text9 + asien + "kg CO2");
console.log(text10 + (asien/gesamt)*100 + "%");
console.log(text11 + (asien/asien8-1)*100 + "%");
console.log(text4);
console.log(text5 + (asien-asien8) + "kg CO2");

console.log(text12 + australien + "kg CO2");
console.log(text13 + (australien/gesamt)*100 + "%");
console.log(text14 + (australien/australien8-1)*100 + "%");
console.log(text4);
console.log(text5 + (australien-australien8) + "kg CO2");

console.log(text15 + namerika + "kg CO2");
console.log(text16 + (namerika/gesamt)*100 + "%");
console.log(text17 + (namerika/namerika8-1)*100 + "%");
console.log(text4);
console.log(text5 + (namerika-namerika8) + "kg CO2");

console.log(text18 + samerika + "kg CO2");
console.log(text19 + ( samerika / gesamt )*100 + "%");
console.log(text20 + (samerika/samerika8-1)*100 + "%");
console.log(text4);
console.log(text5 + (samerika-samerika8) + "kg CO2");