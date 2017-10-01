---
title: class와 프로토타입
date: 2017-08-04 21:24:46
tags: [class, constructor, instance]
---

## 클래스의 정의
- 클래스는 함수 표현식과 마찬가지로 이름을 가지지 않을 수 있지만 클래스가 할당된 변수를 사용해서 클래스를 생성해야한다.
왜냐하면 클래스가 메모리에 선언이 되나 할당된 변수의 이름이 없으면 다시 불러올 수 있는 방법이 없기 때문이다
그래서 참조 에러가 뜨게 된다.

## 인스턴스의 생성
new 연산자를 사용하지 않고 인스턴스를 생성하면 에러가 발생한다.

## constructor
- 인스턴스를 생성하고 초괴화하기 위한 특수한 메서드다.
- 클래스 내에 한개만 존재할 수 있으며 2개 이상의 있으면 Error 발생한다.
- constructor 메서드는 생략 가능하다. 생략하면  `constructor() {}`를 포함 한것과 동일하다 그러나 객체의 생성과 동시에 초기화하는 것은 불가능하다.

## 호이스팅
- 클래스도 let, const와 같이 TDZ가 발생한다.
전 게시물에서 말했듯이 선언이 먼저 되고 초기화는 할당시에 동시에 진행되기 때문에 호이스팅이 안되는 것처럼 동작한다.

## getter, setter
### getter
- getter은 일반적으로 어떤 프로퍼티에 접근할 때마다 프로퍼티를 조작하는 행위가 필요할 때에 사용하는 용어다.

```ecmascript 6
class Test {
  constructor( arr = []) {
    this._arr = arr;
  }
}

```

### setter는 프로퍼티에 값을 할당할 때마다 프로퍼티를 조작하기 위해 사용하다
### getter와 setter전부 `()`이 필요없고 값을 할당하면 실행된다
```ecmascript 6
  var Foo = (function() {
    function Foo(prop) {
      this.prop = prop;
    }
    Foo.staticMethod = function() {
      return 'staticMethod';
    };
    Foo.prototype.prototypeMethod = function() {
      return 'prototypeMethod';
    };
    return Foo;
  })();
 
  var foo = new Foo(123);

console.log(Foo.staticMethod())
  console.log(foo.prototypeMethod())
```




