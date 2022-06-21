// TODO: create the character object here
const aurora = {
    name : "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points `
    }
}
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

// TODO: create the dog object here
const dog = {
    name: "Fang",
    species: "boarhound",
    size: "75",
    bark(){
        return "Grrr! Grrr!"
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

const r = 3//Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    circumference(){
        return 2 * Math.PI * r
    },
    area(){
        return Math.PI * (r ** 2)
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// TODO: create a bank account object

const account = {
    name: "Alex",
    balance: 0,
    credit(value){
        return this.balance += value
    },
    describe(){
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}
account.credit(250)
account.credit(-80)
console.log(account.describe())