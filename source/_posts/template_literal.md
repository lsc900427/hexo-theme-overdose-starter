---
title: ES6 템플릿 리터럴
tags: [ES2015, ES6, template-literal]
---
![html](../../../../images/es6.png)
ES6는 템플릿 리터럴이라 불리는 새로운 문자열 표기법을 도입했다.
공백을 표현하기 위해서는 이스케이프 시퀀스를 사용해야한다.

```js
const strings =
`<li>밥</li>
<li>반찬</li>
<li>고기</li>`

console.log(strings)
```

문자열 삽입, 표현식에 새로운 방식을 도입했다.
`${문자열}`, `${자바스크립트 표현}` 
```js
const first = '이';
const last = '지';

console.log('정말' + first + last);
console.log(`정말${first}${last}`);
console.log(`${first === '이'}`)
```

