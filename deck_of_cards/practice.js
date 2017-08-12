class Ninja {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this._strength = 3;
  }

  get strength() {
    return this._strength;
  }
}

const ninja = new Ninja('SpongeBob', 10, 4);

console.log(ninja.strength);
// => 3
ninja.strength = 565656;
console.log(ninja.strength);



console.log(ninja.health);

ninja.health = 200;
console.log(ninja.health);

// => 3
