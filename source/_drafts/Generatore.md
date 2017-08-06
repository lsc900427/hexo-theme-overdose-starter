---
title: Generator
tags: [generator]
---

## 정의
Es6에서 도입된 제너레이터는 함수 블록을 한번에 실행하지 않고, 실행을 일시 중지했다가 필요한 시점에
다시 시작할 수 있는 함수이다. 제너레이터는 함수이지만 일반 함수와는 다른 독특한 움직임을 한다.
함수를 호출하면 함수 블록이 실행되는게 일반적이나
제너레이터는 제너레이터 객체를 반환한다.
이 제너레이터 객체는 순회 가능한(iterable)한 값이다.
즉 제너레이터는 순회가능한 값을 생성하는 함수이다..

## 제너레이터 함수의 생성

제너레이터는 function* 키워드로 선언한다. 그리고 하나 이상의 yield 구문을 포함한다.

```js
function* genFunc() {
  var index = 0;
  whild (index < 3) {
    yield index++
  }
}
```

```js
// 제너레이터 함수 선언: 함수 표현식
const genFuc = function* () {
  
};

//제너레이터 메소드
const obj = {
  * generatorMethod() {
    
  }
};

class myClass {
  *generatorMethod() {
    
  }
}
```

## 제너레이터 함수의 호출

제너레이터 함수를 호출하면 함수 블록이 실행되는 것이 아니라, 제너레이터 객체를 반환한다.

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = foo();

for(const val of generator) {
  console.log(val);
}

```

```js
function* genFunc() {
  console.log('start');
  yield 1;
  console.log('restart');
  yield 2;
  console.log('end');
}
const generator = genFunc();

console.log(generator.next())
```

제너레이터 객체는 기본적으로 next()메서드를 가지고 있다 이는 제너레이터 객체가 이터레이터인 것을 의미한다.
이터레이터의 next() 메서드는 value, done 프로퍼티를 갖는 객체를 반환한다 value 프로퍼티는 yield 구문이 반환 값이고
done 프로퍼티는 제너레이터 함수 내의 모든 yield 구문이 실행되었는지를 나타내는 boolean 타입의 값이다.

이터레이터의 next()와 다르게 제너레이터의 next()는 인자를 받을 수도 있다.

```js
function* foo(n) {
  const x = yield n;
  const y = yield (x + 1);
  const z = yield (y + 2);
  return x + y + z;
}


const iterator = foo(1);
```
yield는 대입문 변수에 값을 할당하지 않고 next()의 인자가 대입문 변수에 할당된다.
