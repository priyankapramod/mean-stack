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

  //punch
  Ninja.prototype.punch = function (ninja) {
      if(ninja instanceof Ninja){
          rival_health = ninja.getHealth();
          console.log('health of rival before punching ' + rival_health);
          rival_health = rival_health - 5;
          console.log('health of rival after punching ' + rival_health);
        }
  };

  Ninja.prototype.kick = function (ninja) {
      if(ninja instanceof Ninja){
        rival_health = ninja.getHealth();
        console.log('my strength is ' + strength);
        console.log('health of rival before punching ' + rival_health);
        while (strength){
            rival_health = rival_health - 15;
            strength--;
        }
        console.log('health of rival after punching ' + rival_health);
    }
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
nin2 = new Ninja('ninja2');
nin2.sayName();
nin2.punch(nin);
nin2.kick(nin);
nin2.setStrength(0);
nin2.kick(nin);
