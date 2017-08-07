

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
//------------------------- using Symbol(to create private variables)---------------------------------------------------

const _speed = Symbol('speed');
const _strength = Symbol('strength');
const _health = Symbol('health');


class Ninja {
    constructor(name) {
        this.name = name;
        this[_speed] = 3;
        this[_strength] = 3;
        this[_health] = 100;
    }
    get speed(){
        return this[_speed];
    }
    set speed(val){
        this[_speed] = val;
    }
    get strength(){
        return this[_strength];
    }
    set strength(val){
        this[_strength] = val;
    }
    get health(){
        return this[_health];
    }
    set health(val){
        this[_health] = val;
    }



    sayName () {
        console.log('name: ' + this.name);
    };

    showStatus() {
        console.log('name: ' + this.name + 'speed: ' + this[_speed] + 'strength: ' + this[_strength]+ 'health: ' + this[_health]);
    };

    drinkShake() {
        this[_health] = this[_health] + 10;
        return this[_health];
    };
    //punch
    punch(ninja) {
        if(ninja instanceof Ninja){
             //let rival_health = ninja.health;
             //console.log('health of rival before punching ' + rival_health.toString());
             ninja.health = ninja.health - 5;
             console.log("ninja health after punch: " + ninja.health);
             //console.log('health of rival after punching ' + rival_health.toString());
          }
    };


    kick(ninja) {
        if(ninja instanceof Ninja){
        //   rival_health = ninja.health;
          console.log('my strength is ' + ninja.strength);
          //console.log('health of rival before punching ' + rival_health);
          while (ninja.strength){
              ninja.health = ninja.health - 15;
              ninja.strength--;
          }
          console.log('health after kick' + ninja.health);
          //.log('health of rival after punching ' + rival_health);
      }
    };
}


const _wisdom = Symbol('wisdom');


//we override parents methods and variables becoz  think client may not need parents methods.
//sensei obj can call only  sensei mehtods and to access Ninja's......implement getter & setter from
//sensei class and call parents methods wiht super.


class Sensei extends Ninja{

    constructor(name){
        super(name);
        this[_speed]= 10;
        this[_strength] = 10;
        this[_health]= 200;
        this[_wisdom] = 10;
    }
    get speed(){
        return this[_speed];
    }
    set speed(val){
        this[_speed] = val;
    }
    get wisdom(){
        return this[_wisdom];
    }
    set wisdom(val){
        this[_wisdom] = val;
    }
    get strength(){
        return this[_strength];
    }
    set strength(val){
        this[_strength] = val;
    }
    get health(){
        return this[_speed];
    }
    set health(val){
        this[_speed] = val;
    }

    showStatus(){
        console.log('name: ' + this.name + 'speed: ' + this[_speed] + 'strength: ' + this[_strength]+ 'health: ' + this[_health] + 'wisdom: ' + this[_wisdom]);
    }
    speakWisdom(){
        this[_health] += super.drinkShake();
        console.log(this[_health]);
    }


}
nin = new Ninja('ninja1')
console.log(nin.speed);
nin.sayName();
nin.showStatus();
console.log(nin.health);
nin.drinkShake();
console.log(nin.health);



nin2 = new Ninja('ninja2');
nin2.sayName();
nin2.punch(nin);
nin2.kick(nin);
nin2.strength = 0;
nin2.kick(nin);


sensei1 = new Sensei('smart');
sensei1.showStatus();
sensei1.speakWisdom();
