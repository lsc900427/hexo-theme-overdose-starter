var parent = {
  name: 'parent',
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

var child = Object.create(parent);
child.name = 'child';

parent.sayHi();
child.sayHi();


const parent = {
  name: 'parent',
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

const child = {
  __proto__: parent,
  name: 'child'
};

parent.sayHi();
child.sayHi();