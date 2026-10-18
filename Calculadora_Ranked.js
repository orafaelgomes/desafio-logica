let victories = 101
let defeats = 46

const balance = calculateBalance(victories,defeats)
const rank = classifier(victories)

const message = `O Herói tem de saldo de ${balance} está no nível de ${rank}`

function calculateBalance (victories, defeats ){

    let balance  = victories - defeats
    return balance
}

function classifier (victories){
    let rank = ""

    if (victories <= 10){
        rank = "Ferro"
    }

    else if (victories <= 20){
        rank = "Bronze"
    }

    else if (victories <= 50){
        rank = "Prata"
    }

    else if (victories <= 80){
        rank = "Ouro"
    }

    else if (victories <= 90){
        rank = "Diamante"
    }

    else if (victories <= 100){
        rank = "Lendário"
    }

    else {
        rank = "Imortal"
    }

    return rank
}

console.log (message)