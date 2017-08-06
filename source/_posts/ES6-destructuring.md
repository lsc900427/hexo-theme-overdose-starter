---
title: ES6-destructuring
tags: [ES6, desturcturing, 해체할당]
---
![html](../../../../images/es6.png)

해체할당(destructuring)은 기존에 구조로 가지고 있던 객체(배열 또는 객체)를 분석하여 개별적인 변수에 할당하는 것
배열 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당하거나 반환할때 유용

## 배열 해체할당

```js
var arr = [1,2];

var one = arr[0];
var two = arr[1];

console.log(one, two)
```

ES6에서 배열해체할당은 배열의 각 요소를 배열로부터 추출하여 변수 리스트에 할당한다.
이때 추출, 할당 기준은 인덱스이다.

```js

//인덱스를 기준으로 배열로부터 요소를 추출하여 변수에 할당한다.
const arr = [1, 2];
const [hi, hello] = arr;

console.log(hi, hello); //1, 2

let q, w, e;

[q, w] = [1, 2];

console.log(q, w); // 1, 2

[q, w] = [1]; // 1, undefined

[q, w, e = 5] = [1, 2];
console.log(q, w, e) // 1, 2, 5

[q, ...w] = [1, 2, 3, 4, 5];
console.log(q, w) // 1, [2,3,4,5]

const arr = [1, 2, 3, 4, 5];
const [a, , b] = arr  //1, 3 공백이 처리가 안되었다.
```

## 객체 해체할당
ES5의 경우 배열과 같다.

```js
var ob = {first: 'sang', last: 'lee'};
var name = {};

name.first = ob.first;
name.last = ob.last;

console.log(name) // {first: 'sang', last: 'lee'}
```
배열의 해체할당 기준은 index 객체 해체할당의 기준은 key값이다.

```js
const ob = {first: 's', last: 'l'};
const {first, last} = ob;

console.log(first, last); // s, l
```
객체 해체할당을 위해서는 `=` 왼쪽에 객체형태의 변수가 필요하다.

```js
const {prop1: item1, prop2: item2} = {prop1: 1, prop2: 2};
console.log({prop1: item1, prop2: item2}); // {prop1: 1, prop2: 2}

function padding() {
  const left = 1, right = 2, top = 3, bottom = 4;
  return {left, right, top, bottom};
}

const {left, bottom} = padding();
console.log(left, bottom); // 1, 4
```


