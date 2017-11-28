/*A Singleton only allows for a single instantiation, but many instances of the same object. The Singleton restricts
clients from creating multiple objects, after the first object created, it will return instances of itself.*/


export default class Singleton {

  static instance;

  constructor(){
    if(instance){
      return instance;
    }

    this.state = "duke";
    this.instance = this;
  }

}

let first = new Singleton();
let second = new Singleton();
console.log(first===second);