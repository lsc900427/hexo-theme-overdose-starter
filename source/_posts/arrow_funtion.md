---
title: 화살표 함수
tags: [ES6, ES2015, Arrow function, this, scope]
---
![html](../../../../images/es6.png)
# Syntax
---

## 화살표 함수의 호출
화살표 함수는 익명함수로만 사용할 수 있다.
따라서 호출하기 위해서는 함수표현식을 사용한다.

콜백함수로도 사용할 수 있다.

## arguments와 rest파라미터
arguments 객체는 유사배열 객체이다
함수 객체의 arguments 프로퍼티는 객체를 값으로 가지며 함수 내부에서 지역변수처럼 사용된다.

Es6는 arguments 프로퍼티가 없기 때문에 rest파라미터를 활용하여 가변인자를 함수내부에 배열로 전달 할 수 있다.

## this

function 키워드를 사용하여 생성한 일반 함수와 Arrow function과의 가장 큰 차이점은 this이다

```js
function Love(she) {
  this.she = she;
}

Love.prototype.nice = function (contents) {
  
  return contents.map(function (x) {
    return `${this.she}는 ${x} 를 사랑합니다`
  });
};

var people = new Love('그녀');
console.log(people.nice(['바람', '물']));
```
여기서 this가 생성자 함수의 인스턴스로 기대하였겠지만
프로토타입의 처음으로 실행하는 경우의 함수만 인스턴스로 인식이 되고 두번째 부터는 전역함수로 this가 할당이 되기 때문에
예상되는 결과가 나오지 않게 된다. 그렇기 때문에 이를 해결하기 위해서
4가지 방법이 있다.
첫번째는 프로토압의 첫번째 함수에 var that = this; 를대입시켜
that.she를 만들어주는 방법이다.

두번째는 function(contents){return contents.map(), this}
이후 두번째 인자로 this를 잡아주는 방법이다ㅏ
- 이는 map의 두번째 인자의 역할 때문이다.

세번째는 bind(this)를 이용하는 것이다.
- bind 같은 경우는 첫번째 인자가 그 스코프에서의 변수기 때문에 bind(this)를 사용할 경우
생성자의 this가 인스턴스인 this로 들어가게 된다.

call이 안되는 이유는 call은 호출을 해버리기에 값이 함수가 아니라는 에러가 뜨게 된다.
//call이나 apply로 할 수 있는 방법이 있을까?

네번째는 애로우 함수의 this이다
- 애로우 함수의 this 언제나 자신이 포함된 외부 스코프에서 this를 계승 받는다 즉 this를 생성하지 않고 자신을 포함하는 컨텍스트로부터 this를
가져오기 때문에 생성자를 객체를 가져오게 된다.

이로인해서 애로우 함수가 쓰이면 안되는 곳이 있다.

1. 메소드 안에 함수를사용하면 외부의 디스를 가져와서 전역 객체에 바인딩 된다.
축약형 표현을 사용해라 `yes() {}`
2. prototype에 할당하는 경우도 동일한 문제가 발생한다.
왜냐면 프로토 타입에도 처음 익명함수는 그 객체이기 때문이다.
3. 애로우함수에서 생성자함수는 아예 존재하지 않는다. 그러므로 애로우 함수는 생성자 함수로 사용 불가능하다. 프로토타입 프로퍼티가 존재하지 않기 때문이다.
