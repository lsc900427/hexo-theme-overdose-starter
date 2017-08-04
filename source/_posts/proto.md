---
title: __proto__
date: 2017-08-04 20:59:01
tags: [ES6, __proto__]
---

## ES5에서는 객체 리터럴을 상속하기 위해서 Object.create()란 함수를 사용했다.
```js
var Car = {
  name: '고급차',
  do: function() {
    console.log(this.name +'삽니다.');
  }
};
var maserati = Object.create(Car);
maserati.name = '마세라티';
Car.do();
maserati.do();
```

## ES6에서는 객체리터럴 내부에서 proto 프로퍼티 직접 설정 가능하다.
```ecmascript 6
const Car = {
  name: '고급차',
  do() {
    console.log(this.name + '삽니다')
  }
};
const maserati = {
  name: '마세라티',
  __proto__: Car
};
Car.do();
maserati.do();
```