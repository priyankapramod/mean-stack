
function Ninja(name)
{
  this.name = name;//public
  var speed = 3;//private --- var..so they don't work outside class function neither this.speed works.
  //we should use set and get methods. inside a class they are access private variables with var names and pub with this
  var strength = 3;
  var health = 100;

  //methods/actions
  this.setSpeed   = function(newSpeed) {speed=newSpeed;}
  this.getSpeed = function() { return speed; }

  this.setStrength   = function(newStrength) {strength=newStrength;}
  this.getStrength = function() {return strength;}

  this.setHealth   = function(newHealth) {health=newHealth;}
  this.getHealth   = function() { return health; }

  Ninja.prototype.sayName = function () {
      console.log('name: ' + this.name);
  };

  Ninja.prototype.showStatus = function () {
      console.log('name: ' + this.name + 'speed: ' + speed + 'strength: ' + strength+ 'health: ' + health);
  };

  Ninja.prototype.drinkShake = function () {
      health = health + 10;
      return health;
  };

  return this;
}
nin = new Ninja('ninja1')
console.log(nin.getSpeed());
nin.sayName();
nin.showStatus();
console.log(nin.getHealth());
nin.drinkShake();
console.log(nin.getHealth());

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

// class Ninja{
//     constructor(name){
//         this.name = name;
//         this._health = 100;
//         this._speed = 3;
//         this. _strength = 3;
//     }
//
//
//
//     get speed(){
//         return this._speed;
//     }
//
//
//     get strength(){
//         return this._strength;
//     }
//
//
//
//     sayName() {
//         console.log('Name of Ninja is ${this.name}');
//     }
//
//
//     showStatus() {
//         console.log('speed:'+ this._speed +'and  strength : '+this._strength+' , health: '+this._health);
//     }
//
//
//     drinkShanke() {
//         this.health += 10;
//         console.log('health after drinking shake: ${this.health}');
//     }
// }
// let ninja1 = new Ninja("ninja_one")
// console.log(ninja1.name);
// console.log(ninja1._speed);
// ninja1.showStatus();

//----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//------------------------- using  weekmap(setting private variables)---------------------------------------------------

// let Ninja = (function() {
//   let _speed = new WeakMap();
//   let _strength = new WeakMap();
//   let _health = new WeakMap();
//
//   class Ninja {
//     constructor(name) {
//         this.name = name;
//       // If it is, use it to initialize "this" date
//       _speed.set(this, 3);
//       _strength.set(this, 3);
//       _health.set(this, 100);
//     }
//
//
//
//     getSpeed() {
//       return  _speed.get(this);
//     }
//
//     getStrength() {
//       return  _strength.get(this);
//     }
//     getHealth() {
//       return  _health.get(this);
//     }
//     sayName() {
//             console.log('Name of Ninja is'+ this.name);
//         }
//
//
//         showStatus() {
//             console.log('speed:'+ this._speed +'and  strength : '+this._strength+' , health: '+this._health);
//         }
//
//
//         drinkShake() {
//             this.health = this.health + 10;
//             console.log('health after drinking shake:' + this.health);
//         }
//
//
//   }
//
//   return Ninja;
// }());
// nin = new Ninja('one-ninja')
// console.log(nin.getSpeed());
// nin.sayName();
// console.log(nin.getHealth());
// nin.drinkShake();
// console.log(nin.getHealth());
