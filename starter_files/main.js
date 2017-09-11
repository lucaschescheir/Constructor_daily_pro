//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, owner) {
  this.name = name
  this.status = status
  this.color = color
  this.owner = owner
  this.hungry = true
  this.changeColor = function(color){
    this.color = color
  }
  this.eat = function(value){
    this.hungry = value
  }
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog("sadie", "normal", "color", "mason");
const moonshine = new Dog("moonshine");
const atticus = new Dog("atticus");
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name) {
  this.name = name
  this.pet = function(dog){
    dog.status = "happy"
  }
  this.feed = function(dog){
    dog.hungry = false
}
  this.walk = function(){
    this.cool = true
}
  this.rest = function(){
    this.cool = false
}
}
const mason = new Human("mason");
const julia = new Human("julia");

Human.prototype.run = function(){
  this.cool = true
}
// Instances of Human
// Needed: mason, julia

sadie.changeColor("black");
moonshine.eat(true);
sadie.eat(false);
julia.walk();
mason.rest();
mason.run()
