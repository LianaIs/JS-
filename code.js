const person={
 age: 66,
 name: 'bob'
 };
 person.age='hh';
 //change the shape, we optimize by shape//

//there are 3 types of functions//

//global object//
//function inwokation//
 
function foo (age, )
'use strict';
function foo (age, d) {
  console.log(this);
  //this.age=age;
  //this.name=d;
}
 const friend= new foo(22, "Lo")
 console.log(friend.age);
 
 
 //static TABS = ['A', 'B'] 
 
 //called as a constructor
 class person {
   constructor(n, a){
     this.name=n;
     this.age=a;
   }
 }
 
 const hasmik = new person(22, 'hasmik')
 console.log(hasmik);
 
 /*
 name = () => {
   
 }
 foo=123;
 */
 
 const camel = new (class {
   constructor(){
     this.animal='camel'
   }
   
 })
 const zebra = new (function zeb(){
   this.animal='zebra'
 })
 console.log(camel);
 console.log(camel.constructor);
 console.log(zebra.constructor);
 
 
 
 
 
 
 
 
 
 function Person () {}
 String.prototype.speak=function() {
   console.log(`I am ${this.length}`)
 }
 "Hello world".speak();
 
 
 function Person () {}
 Person.prototype.age=10;
 Person.prototype.speak=function(){
   
 };
 console.log(Person.prototype.speak);
 //
 
 String.prototype.speak=function() {
   console.log(`I am ${this.length}`)
 }
 "Hello world".speak();
 
 
let counter =0; 
 const obj ={
   get num() {
     ++counter;
     return counter;
   }
 }
 console.log(obj.num);

{
var man = 0;
var array = [9, 1, 4, 15];
for  (var i = 0; i < array.length; i++) {
    man += i;
}
