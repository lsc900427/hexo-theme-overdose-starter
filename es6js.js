class Foo {
  constructor(prop) {
    this.prop = prop;
  }

  static staticMethod() {
    return 'staticMethod';
  }
  this.prototypeMethod() {
    return 'prototypeMethod';
  }
}

const foo = new Foo(123);

console.log(Foo.staticMethod())

console.log(Foo.prototypeMethod());
console.log(foo.prototypeMethod())
