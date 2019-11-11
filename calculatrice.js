var Boutonplus = document.calcul.plus;
var Boutonmoins = document.calcul.moins;
var Boutonmulti = document.calcul.multi;
var Boutondivision = document.calcul.division;
var Resultat = document.calcul.resultat;
var Boutonconvert2F = document.calcul.convert2F;
var Boutonconvert2E = document.calcul.convert2E;

function addition() {
    var nb1 = parseInt(document.calcul.nb1.value);
    var nb2 = parseInt(document.calcul.nb2.value);
    var res = nb1 + nb2;
    Resultat.value = res;
}

function soustraction() {
    var nb1 = parseInt(document.calcul.nb1.value);
    var nb2 = parseInt(document.calcul.nb2.value);
    var res = nb1 - nb2;
    Resultat.value = res;
}

function multiplication() {
    var nb1 = parseInt(document.calcul.nb1.value);
    var nb2 = parseInt(document.calcul.nb2.value);
    var res = nb1 * nb2;
    Resultat.value = res;
}

function division() {
    var nb1 = parseInt(document.calcul.nb1.value);
    var nb2 = parseInt(document.calcul.nb2.value);
    var res = nb1 / nb2;
    Resultat.value = res;
}

function convert2F() {
    var res = document.calcul.resultat.value;
    var res2F = document.calcul.convert2F.value;
    for (var i = 0; i < res2F.length; i++) {
        res2F = res * 6.55957;
    }
    Resultat.value = res2F;
}

function convert2E() {
    var res = document.calcul.resultat.value;
    var res2E = document.calcul.convert2E.value;
    for (var i = 0; i < res2E.length; i++) {
        res2E = res / 6.55957;
    }
    Resultat.value = res2E;
}


Boutonplus.addEventListener("click", function () {
    addition();
});
Boutonmoins.addEventListener("click", function () {
    soustraction();
});
Boutonmulti.addEventListener("click", function () {
    multiplication();
});
Boutondivision.addEventListener("click", function () {
    division();
})
Boutonconvert2F.addEventListener("click", function () {
    convert2F();
})
Boutonconvert2E.addEventListener("click", function () {
    convert2E();
})

