// #1
// difference interface-class
/* interface: class declaration (instance variable, properties, functions)
 * without implementation; => interface only defines types
 * produces no code in JS, no shared logic between inherited classes;
 * class: can use interface; implementation code; defines types and values;
 * can contain constructor, visibility modifiers
 */

 // #2
 // about private, proteced modifier in constructors
 // hints about it: see book about "Simulating final Classes" p. 107
 /* expected behaviour: for private: don't allow any intances of the class
  * protected: allow instances of "child" classes
 */

 class Animal {
    private constructor(name: string){}
 }

// let a = new Animal('zebra')

class Plant {
    protected constructor(name: string){}
 }

 class Flower extends Plant {
 }

 // let l = new Flower('lilac');

// -> just like a class with private constructor, a class with protected constructor cannot be newed
// also its childrens cannot be created with new

// #3  factory pattern
// extend implementation of the factory pattern
// to make it safer, at the expense of breaking the abstraction a bit;
// consumer should know at compile time:
// calling Shoe.create('boot') returns a Boot and calling Show.create('balletFlat')
// returns a BalletFlat (rather than just a Shoe)
// Hint: think about "Overloaded Function types", page 59

type Shoe = {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'woodcutting'
  }

type ShoeCreator = {
    create(type: 'balletFlat'): BalletFlat
    create(type: 'boot'): Boot
  }

let Shoe: ShoeCreator = {
    create(type: 'balletFlat' | 'boot'): Shoe {
      switch (type) {
        case 'balletFlat':
          return new BalletFlat()
        case 'boot':
          return new Boot()
      }
    }
  }

Shoe.create('balletFlat') // BalletFlat
Shoe.create('boot') // Boot

// 4# builder pattern
// page 109
class RequestBilder{
    private data: object | null = null
    private method: 'get' | 'post' | null = null
    
    private url: string | null = null
    setURL(url: string): this {
        this.url = url
        return this
    }

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }
    setData(data: object): this {
        this.url = this.url
        return this
    }

    send(){

    }
}

new RequestBilder()
    .setURL('/users')
    .setMethod('get')
    .setData({firstName: 'Anna'})
    .send()
