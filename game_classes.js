class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;

        if (type === "Mago") {
            this.attack = "magia";
        } else if (type === "Guerreiro") {
            this.attack = "espada";
        } else if (type === "Monge") {
            this.attack = "artes marciais";
        } else if (type === "Ninja") {
            this.attack = "shuriken";
     }
    }
    atackHero(){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
    }
}

let newHero = new Hero("Super BoomBap Man", 19, "Ninja");
