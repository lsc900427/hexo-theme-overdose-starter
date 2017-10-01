---
title: Symbol
tags: [Symbol, iterator, generator]
---

## 심볼은 무엇인가?

Symbol이 나오기 전까지 자바스크립트는 6개의 타입을 가지고 있었다.


기본자료형
* Boolean
* null
* undefined
* Number
* String

객체형
* Object

Symbol은 새롭게 추가된 7번째 타입이다. 애플리케이션 전체에서
유일하며 변경불가능한 기본 자료형이다 주로 객체의 키로 사용한다.

## 심볼의 생성

심볼은 Symbol()을 통해 생성한다 생성된 Symbol은 객체가 아닌 값이다.

```js
let mySymbol = Symbol();
console.log(mySymbol);
console.log(typeof mySymbol);
```

Symbol() 함수는 String(), Number(), Boolean()과 같이 래퍼 객체를 생성하는 생성자 함수와 달리
new 연산자를 사용하지 않는다.

```js
new Symbol(); // TypeError: Symbol is not a constructor
```
Symbol은 변경 불가능한 기본 자료형이다.

```js
let mySymbol = Symbol();
console.log(mySymbol + 's');  //TypeError: Cannot convert a Symbol value to a string
```

Symbol()함수는 인자로 문자열을 전달 할 수 있다 이 문자열은 Symbol생성에 영향을 주지 않으나
생성된 Symbol에 대한 설명으로 디버깅용도로 사용된다.

```js
let symbolWithDesc = Symbol('ungmo2');
console.log(symbolWithDesc); //Symbol(ungmo2)
```

```js
const s1 = Symbol.for('foo');
const s2 = Symbol.for('foo');

console.log(s1 === s2);
```

Symbol.for 메서드는 인자로 전달받은 프로퍼티 키를 통해 심볼 레지스트리에 존재하는 심볼을 검색해서
검색에 성공하면 검색된 심볼을 반환하고 검색에 실패하면 새로운 심볼을 생성한다

심볼() 함수는 매번 새로운 심볼 값을 생성하는 것에 반해 Symbol.for는 단 하나의 Symbol을 생ㅇ성하여 여러 모듈이 공유하게 한다.

