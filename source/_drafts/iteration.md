---
title: iteration
tags: [iteration, protocol]
---

## 이터레이션 프로토콜

ES6에는 이터러블(iterable)과 이터레이터(iterator)를 정의한 이터레이션 프로토콜iteration protocol)이 추가되었다.

iterable : 이터러블은 순회 가능한 자료 구조이다. Symbol.iterator를 key로 사용한 메서드를 구현
하는 것에 의해 순회가능한 자료구조인 이터러블이 된다.

iterator : 이터러블의 Symbol.iterator를 key로 사용한 메서드는 이터레이터를 반환한다. 이터레이터는 순회 가능한 자료 구조인 이터러블의 요소를
탐색하기 위한 포인터로써 next() 메서드를 갖는 객체이다. next() 메서드는  value, done 프로퍼티를 갖는 객체를 반환하며 이 메서드를 통해 이터러블
객체를 순회 할 수 있다.

iterable

```js
[symblol.iterator]() ---> 순회가능한 자료구조 
 
 iterator {
  next() {
   return {
     value: any,
     done: boolean
   };
 }
}
```

ES6에서 제공하는 빌트인 이터러블은 아래와 같다.

Array.prototype[Symbol.iterator]
String.prototype[Symbol.iterator]
Map.prototype[Symbol.iterator]
Set.prototype[Symbol.iterator]

DOM data structures
NodeList.prototype[Symbol.iterator]
HTMLCollection.prototype[Symbol.iterator]

이터레이션 프로토콜은 이터레이터의 next() 메서드를 통해 다양한 데이터 소스에 순차적으로 접근할 수 있는 일관된 방법을 제시한다.


```js
const iterable = ['a','b','c'];

const iterator = iterable[Symbol.iterator]();
```

즉 이터레이터를 하면 
{value: 'a', done: false} 라는 형식의 객체가 리턴된다.
value는 값을 말하고 done은 있으면 false 없으면 true가 나오는데 이건 왜그럴까?

```js
for (const val of ['a','b','c']) {
  console.log(val);
}

for (const val of 'abc') {
  console.log(val);
}

for (const [key, value] of new Map([['a', '1'], ['b', '2'], ['c', '3']])) {
  console.log(`key : ${key} value : ${value}`)
}

for (const val of new Set([1,2,3])) {
  console.log(val);
}
```

피보나치 수열만들어보자

```js
const fibonacci = {
  [Symbol.iterator]() {
    let [prev, curr] = [0, 1];
    let step = 0;
    const maxStep = 10;
    return {
      next() {
        [prev, curr] = [curr, prev + curr];
        return {value: curr, done: step++ >= maxStep};
      }
    }
  }
}

for (const num of fibonacci) {
  console.log(num);
}
```

done이 true가 되면 빠져나오게 된다.