---
title: 'Es6 let,const'
date: 2017-08-03 23:08:41
tags:
---

![html](../../../../images/es6.png)

## ES5에서 변수 선언의 유일한 방법 => var 키워드

`var 키워드의 특징`

Function-level scope
- 전역 변수의 남용 문제
- for문에서 사용한 변수의 전역 참조 문제
```js
var a = 1;
console.log(a); //1
{
 var a = 2; 
}
console.log(a); //2
```

var 키워드 생략 가능
- 의도하지 않은 변수의 전역화

변수 호이스팅
- 인터프리터가 변수를 읽기 전에 undefined값이 할당되는 문제 발생

전역변수가 사용이 편리한 면이 있지만 scope가 넓어서 협업시 변수의 중복 문제 및 재할당문제가 발생 될 수 있다.
Es6는 이런 단점을 보완하기 위해서 let, const 키워드를 도입

## ES6에서의 변수 let

`let의 특징`

Block-level scope

```js
let a = 1;
console.log(a); //1
{
 let a = 2; 
}
console.log(a); //1
```

중복 선언 금지
```js
var a = 5;
var a = 8; // 가능

let b = 10;
let b = 12; // 오류발생
```
호이스팅
- 자바스크립트는 let, const 포함 모든 선언을 호이스팅한다. var와 let의 차이점은
선언문 전에 참조할 경우 undefined가 아닌 Error가 발생한다. TDZ(일시적 사각지대) 때문이다.

```js
var c = 1; //의미없
console.log(a); // undefined
var a;

console.log(b); // ReferneceError
let bar;
```
    
이 차이점은 어디서 올까?
var로 선언한다면 변수를 선언하고 선언한 변수를 메모리에 넣는
초기화 행위(이때 undefined)가 한번에 이뤄진다. 일단 초기화를 하고 변수를 읽는다고 보면 된다.
let은 변수가 선언은 되지만 메모리에 넣는 행위(초기화)가
변수를 읽는 시점에 이뤄지기 때문에 에러가 발생한다.
즉 ReferenceError가 발생하는 이유는 초기화(undefined 할당)가 되지 않고
변수만 선언한 시점에서 변수를 불러오기 때문에 에러가 뜨는 것이라고 볼 수 있다.
에러가 뜨는 변수등록부터 초기화 될 때까지를 TDZ라 부른다.

전역변수
- var는 단순하게 전역에 변수를 때려넣으면 전역 객체의 프로퍼티가 되지만
let같은 경우는 전역 변수로 사용해도 전역 객체의 프로퍼티가 아니다.

```js
var a = 1;
consolelog(window.a); //1

let b = 2;
console.log(window.b); //undefined
```

`const키워드의 특징`
const는 변하지 않는 값(상수)의 역할을 수행한다.
const를 객체의 선언에 사용하면 좋다.

선언과 초기화
- let은 초기화 이후 다른 값으로 재할당 가능하나 const는 초기화 이후 재할당이 불가능하다.
- 또한 선언만 할수 없다.
```js
const a = 1;
a = 2; // Error

const c; //Error
```

의미있는 변수는 상수화하자(대문자)
```js
if (a > 1) {
  
} // 지양
const MIN_NUMBER = 1;
if (a > MIN_NUMBER) {
  
}
```

## 결론

const는 객체타입에 사용하자
let은 primirive형 변수에 사용하자
ES6는 var를 사용하지말자.
   