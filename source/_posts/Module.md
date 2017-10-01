---
title: Module
tags: [Module, Client-side]
---


## 정의
모듈이란 애플리케이션을 구성하는 개별적 요소를 말한다.
일반적으로 모듈은 파일 단위로 분리되어 있으며 필요에 따라서 Application은 모듈을 로드한다.
모듈은 Application에 분리되어 개별적으로 존재하다 로드시에 Application과 하나가 된다.
모듈은 기능별로 분리되어서 작성되므로 개발효율성과 유지보수성의 향상을 기대할 수 있다.

다른 언어들은 #include, import등의 모듈기능을 가지고 있으나 자스는 모듈기능이 없다.
스크립트 태그를 이용해서 외부의 스크립트 파일을 가져올 수 있지만 파일마다 독리적인 Scope를
가지는 것이 아닌 하나의 전역객체에 바인딩 되기 때문에 전역변수가 중복되는 등의 문제가 발생할 수 있다.
이것은 모듈화가 아니다.

자바스크립트가 점점 브라우저에 국한되지 않고 넓게 사용되면서 모듈기능의 구현이 필요해졌다.
그 결과 CommonJs와 AMD가 제안되었다. 결과적으로 자바스크립트의 모듈화는 CommonJs와 AMD
두가지로 나눠지게 되었고 브라우저에서 모듈을 사용하기 위해서는 둘 중 하나를 구현한 모듈 로더 라이브러리를 사용해야 하는 상황이 되었다.

서버사이드인 Node.js는 사실상 CommonJS를 채택했고 100% 같지 않지만 비슷한 방식을 따르고 있다.

이런 상황에서 ES6는 Client-side에서도 작동하는 모듈기능을 추가하였다. 단 현재의 브라우저들은
ES6 모듈기능을 지원하지 않기 때문에 Babel,Typescript, Webpack 등의 트랜스파일러를 사용해야 한다.

## export & import

모듈 안에 선언한 모든 것들은 기본적으로 해당 모듈 안에서만 참조가 가능하다.
만약 모들 안에 선언한 항목을 외부에 공개하여 다른 모듈들이 사용할 수 있게 하고 싶다면 export를 해야 한다.
선언된 변수, 함수, 클래스 모두 export할 수 있다.

선언문 앞에 export 키워드를 사용한다. 여러개를 export할 수 있는데 이때 각각의 export는 이름으로 구별 가능하다.

```js
//lib.js
export const pi = Math.PI;

export function square(x) {
  return x * x;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}
```

한번에 export할 수 도 있다.
```js
//lib.js
export const pi = Math.PI;

export function square(x) {
  return x * x;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}

export {pi, square, Person};
```
export된 이름으로 import한다.

```js
import {pi, square, Person} from './lib';
console.log(pi);
console.log(square(10));
console.log(new Person('Lee'));
```
한번에 import 할 수도 있다.

```js
import * as lib from './lib'
console.log(lib.pi);
console.log(lib.square(10));
console.log(new lib.Person('Lee'));
```
이름을 변경하여 import할 수도 있다.

```js
import {pi as PI, suare as sq, Person as P} from './lib';
console.log(PI);
console.log(sq(2));
console.log(new P('KIM'));

```