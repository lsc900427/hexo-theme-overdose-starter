---
title: Rest parameter
date: 2017-08-04 02:34:26
tags: rest parameter,spread, ES6
---
![html](../../../../images/es6.png)
##기본 파라미터 초기값

```js
function a(x, y) {
  x = x || 0;
  y = y || 0;
  
  return x + y;
}

console.log(a()); //0
console.log(plus(1,2)); //3
```

```js
function a(x= 0, y=0) {
  return x + y;
}
console.log(a());
console.log(a(1,2));
```

## Rest Parameter
```js
function a(...rest) {
console.log(Array.isArray(rest));
console.log(rest);
}
a(1,2,3,4,5)
```
Rest 파라미터는 반드시 마지막 파라미터여야 한다.

### Spread 연산자
```js
var a = (x, y, z) => {
  console.log(x);
  console.log(y);
  console.log(z);
}
a(...[1,2,3])
```
spread연산자는 인수에 rest는 파라미터에
spread 연산자는 순서 상관없이 사용가능하다.

##배열로 활용하는 법을 알아보자

```js
// 기존 배열을 새로운 배열로 합칠경우
// ES5 
var arr = [1,2,3];
console.log(arr.concat([4,5,6])); // [1,2,3,4,5,6]

//ES6
const arr = [1, 2, 3];
console.log([...arr, 4, 5, 6]); // [1, 2, 3, 4, 5, 6]

//push

//ES5

var arr1 = [1, 2];
var arr2 = [3, 4];

Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [1, 2, 3, 4]


```