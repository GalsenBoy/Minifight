class Personnage {
    constructor(pseudo, role, sante, attaque) {
        this.pseudo = pseudo;
        this.role = role;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }

    evoluer() {
        this.niveau++;
        console.log(`${this.pseudo} passe au niveau ${this.niveau}`)
    }

    verifierSante() {
        if (this.sante <= 0) {
            this.sante == 0;
            console.log(`${this.pseudo} a perdu`)
        }
    }

    get Information() {
        return (`${this.pseudo} le ${this.role} a ${this.sante} points de vie et est au niveau ${this.niveau}`)
    }
}

class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, 'magicien', 170, 90)
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} en lançant un sort ${this.attaque} dégats`)

        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(`affiche ${this.pseudo} attaque avec son coup spécial puissance des arcanes ${personnage.pseudo} ${this.attaque * 5} dégâts)".`);
        this.evoluer();
        personnage.verifierSante();
    }

}

class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo, 'guerrier', 350, 50)
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} en lançant un sort ${this.attaque} dégats`)

        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(`affiche ${this.pseudo} attaque avec son coup spécial puissance des arcanes ${personnage.pseudo} ${this.attaque * 5} dégâts)".`);
        this.evoluer();
        personnage.verifierSante();
    }
}

let merlin = new Magicien('Merlin');
let toto = new Guerrier('Toto')

console.log(toto.Information);
console.log(merlin.Information);
merlin.attaquer(toto);
console.log(toto.Information);
toto.attaquer(merlin);
console.log(merlin.Information);
merlin.coupSpecial(toto);