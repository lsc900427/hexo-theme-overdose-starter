---
title: Promise
tags: [Promise]
---

## Promise와 콜백 헬(Callback Hell)

자바스크립트에서 빈번히 사용되는 비동기 처리모델은 요청을 병렬로 처리하여
다른 요청이 blocking되지 않는 장점이 있지만 단점도 있다.
단점은 여러개의 콜백함수가 순서를 보장하기 위해 nesting되어서 복잡도가
높아지는 Callback Hell이다.

콜백지옥은 코드의 가독성을 나쁘게 하고 복잡도를 증가시켜 실수를 유발시킬
확률이 높아지며 에러 처리가 곤란하다.

```js
try {
  setTimeout(function(){
    throw 'Error!';
  }, 1000);
} catch(e) {
  console.log('에러를 캐치하지 못해욤');
  console.log(e);
}
```

## Promise의 상태(State)

Promise는 비동기 처리가 성공하였는지 또는 실패하였는지 등의 상태 정보를 갖는다.

pending : 비동기처리가 아직 수행되지 않은 상태 : resolve 또는 reject함수가 아직 호출되지 않은 상태
fulfilled : 비동기 처리가 성공적으로 수행된 상태 : resolve 함수가 호출된 상태
rejected : 비동기 처리가 실패한 상태 : reject 함수가 호출된 상태
settled : 비동기 처리가 수행된 상태 (성공 또는 실패) : resolve 또는 reject 함수가 호출된 상태

## Promise의 생성

Promise는 Promise 생성자를 통해 인스턴스화 한다. Promise 생성자는 비동기 작업을 수행할 콜백함수를 인자로 전달 받는데
이 콜백함수는 resolve와 reject 콜백함수를 인수로 전달받는다.

```js
var promise = new Promise(function(resolve, reject) {
//비동기 작업수행
if(/*비동기 작업 수행 성공*/) {
  resolve('resolved!');
} else {/*비동기 작업 수행 실패*/
  reject(Error('rejected!'));
}
});
```

Promise 생성자가 인자로 전달받은 콜백 함수는 비동기 작업을 수행한다.
이 때 비동기 작업이 성공하면 resolve를 호출하고 실패하면 reject를 호출한다.

## Promise 후속 처리 함수 then, catch
Promise 생성자가 인자로 전달받은 콜백 함수에서 비동기 작업(Timer 함수)를 실행해보자.
```js
//Promise 선언
function() asyncFunc(param) {
  return new Promise(function(resolve,reject) {
    setTimeout(function() {
      param ? resolve('resolved!') : reject('rejected!');
    }, 2000);
  });
};

asyncFunc(true)
.then(function(data) {
  //resolve가 실행된 경우(성공), resolve 함수에 전달된 값이 data에 저장된다.
  console.log(data);
}, function(reason) {
  //reject가 실행된 경우(실패), reject 함수에 전달된 값이 reason에 저장
  console.log(reason);
  throw 'Error: ' + reason;
}).catch(function(error) {
  //예외 발생 시 호출된다.
  console.error(error)
})
```

Promise는 XMLHttpRequest를 순서대로 처리하거나 처리 직후 다른 처리를 해야 할때 유용하게 사용된다.
```js
function get(url) {
  //promise 생성과 반환
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    
    xhr.onload = function() {
      //서버응답 정상이면
      if (this.status == 200) {
        resolve(this.response);
      } else {
        //서버의 응답이 비정상
        reject(Error(this.statusText));
      }
    };
    
    //네트워크 에러
    xhr.onerror = function() {
      reject(Error('Network Error'));
    };
    
    xhr.send();
  });
}

var url = 'http://poiemaweb.com/assets/data/data/json';

get(url).then(function(response) {
  console.log('Success 1', response);
  return get(url);
}).then(function(response) {
  console.log('Success 2', response);
  return get(url);
}).then(function(response) {
  console.log('Suceess 3', response);
  return get(url)
});

```
중요한 것은 .then(function(){}, function(){})
전자성공 후자 실패인데 `,`로 같이 써줘야하고 실패한 것이 전송이되면
.then()다음번의 then은 성공으로 인식된다. 왜냐면 
어쩄든 실패한게 돌아왔기 때문

위의 이야기는 return으로 다시 함수를 실행하지 않았을 때고
만약 return으로 함수를 실행한다면 이야기가 달라지지 계속 그때 그모습으로
실행이 되는거야.
그리고 여기선 get(url)을 사용했지만
나중엔 get(url) 대신 계속해서 새로운 함수를 집어넣으면
개꿀이다. 콜백의 진짜 효능을 볼 수 있겠구나.