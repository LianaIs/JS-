# JS-
Writing and describing some tools

class T {
  constructor() {
    this.age=10;
  }
}
 another() {
  console.log(this.age);
}
 speak() {
  this.another();
}
const t=new T;
// another-y ays object-um che

console.log(t.hasOwnProperty('age'))
console.log(t.hasOwnProperty('another'))

//on the prototipe chain

object.PrototypeOf(t).speak():
//getting back to th e prototype
//the exicution is not the same
//object.PrototypeOf(t).speak.call(t);
//call calls function

//T is the execution prototype
/*speak (a, b) {
  console.log({a, b})
  this.another();
}*/

//class T {
  constructor() {
    this.age=10;
    this.another=this.another.bind(this)
  }
}//
//const obj= {
 age : 22;
 blah : 'blah'
}

class T {
  constructor() {
    this.age=10;
    this.another=this.another.bind(obj);
  }
}
 another() {
  console.log(this.age);
}
 speak() {
  this.another();
}
const t=new T;
const z=new T;
const c=new T;
console.log(t);

//so we has 4 copies
//bind creates new prototype

// another-y ays object-um che

console.log(t.hasOwnProperty('age'))
console.log(t.hasOwnProperty('another'))
//only one prototype function exists//
//example
const names=['a', 'b'];
const upped=names.map(elem => {
  return elem.toUpperCase();
})
console.log(upped);

const al_upped =Array.prototype.map.call(names, elem =>{
  ////MDN documentation
  return elem.toUpperCase();
})
console.log(al-upped);


//homework` write to have all prototypes by for

 //const some_func = function(data) {
   data : 20;
 }
 
 const input_data = 10;
 some_func(input_data);
 console.log(input_data);
 //  const input_data = {};
 
 const some_func = function(data) {
   data.name = 20;
 }
 
 some_func(input_data);
 console.log(input_data);
 //reference type
 
 //  const g=Object.assign({}, document.body)
