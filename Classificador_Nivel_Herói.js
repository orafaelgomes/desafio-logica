let nomeHero = "Super Boompab-man";
let xpHero = 5222;
let nivelHero = ""

if (xpHero <= 1000) { 
nivelHero = "Ferro"
}

else if (xpHero <=2000){
    nivelHero = "Bronze"
}

else if (xpHero <=5000){
    nivelHero = "Prata"
}

else if (xpHero <=7000){
    nivelHero = "Ouro"
}

else if (xpHero <=8000){
    nivelHero = "Platina"
}

else if (xpHero <=9000){
    nivelHero = "Ascendente"
}

else if (xpHero <=10000){
    nivelHero = "Imortal"
}

else {
    nivelHero = "Radiante"
}

console.log ("O herói de nome " + nomeHero + " está no nível de " + nivelHero)

