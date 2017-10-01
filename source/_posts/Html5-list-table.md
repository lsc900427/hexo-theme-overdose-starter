---
title: 'Html5-list,table'
tags:
---
# 목록

## 순서없는 목록, 순서 있는 목록

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>순서없는 목록 (Unordered List)</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>  
  </body>
</html>

<!DOCTYPE html>
<html>
  <body>
    <h2>순서있는 목록 (Ordered List)</h2>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>  
  </body>
</html>
```

type 속성을 사용해서 순서를 나타내는 문자를 지정할 수 있다.
- “1”	숫자 (기본값)
- “A”	대문자 알파벳
- “a”	소문자 알파벳
- “I”	대문자 로마숫자
- “i”	소문자 로마숫자
```html
<ol type="I">
  <li value="2">Coffee</li>
  <li value="4">Tea</li>
  <li>Milk</li>
</ol>
```

start 속성으로 리스트의 시작값을 지정할 수 있다.

```html
<ol start="3">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

reversed 속성은 리스트의 순서 값을 역으로 표현한다.

## 중첩목록

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>중첩 목록</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea
        <ol>
          <li>Black tea</li>
          <li>Green tea</li>
        </ol>
      </li>
      <li>Milk</li>
    </ul>
  </body>
</html>
```

목록 태그는 네비게이션 메뉴를 만들 때 자주 사용된다.

# 테이블

표를 만들 때 사용하는 태그이다 과거에는 테이블 태그를 사용하여 레이아웃을 구성하기도 했으나
현대 웹에서는 주로 공간 분할 태그인 div 태그를 사용해 레이아웃을 구성한다

- table : 표를 감싸는 태그
- tr : 표 내부의 행
- th : 행 내부의 제목 셀
- td : 행 내부의 일반 셀
- colspan : 행을 합칠때
- rowspan : 열을 합칠 때

# 이미지

- src : 이미지 파일 경로
- alt : 이미지 파일이 없을 경우 표시되는 문장
- width : 이미지의 너비 (CSS에서 지정하는 것이 일반적)
- height : 이미지의 높이

# 미디어

## audio
audio 태그는 HTML5에서 새롭게 추가된 태그다.

- src : 음악 파일경로
- preload : 재생 전에 음악 파일을 모두 불러올 것인지 지정
- autoplay: 음악 파일의 자동재생을 실행 할 것인지 지정
- loop : 음악을 반복할 것인지
- controls : 음악 재생도구를 표시할 것인지.

source 태그를 사용해서 파일의 형식 차이 문제를 해결 할 수 있다.

## video

- src : 동영상 파일경로
- poster : 동영상 준비중에 표시될 이미지 파일 경로
- preload : 재생전 동영상 파일 모두 불러올 것인autoplay	동영상 파일을 자동의 재생 개시할 것인지 지정
- loop 동영상을 반복할 것인지 지정
-  controls	동영상 재생 도구를 표시할 것인지 지정. 재생 도구의 외관은 브라우저마다 차이가 있다.
-  width	동영상의 너비를 지정
- height	동영상의 높이를 지정

## form

폼태그는 사용자가 입력한 데이터를 수집하기 위해 사용되며 input, textarea, button, select, checkbox, radio button, submit button 등의 입력 양식 태그를 포함 할 수 있다.

- action : URL을 값으로 입력 받음, 입력데이터가 전송될 URL을 지정
- method : get / post, 입력데이터의 전달 방식을 지정

GET, POST는 HTTP 프로토콜을 이용해서 서버에 입력 데이터를 전달하는 방식이다.

GET
- GET 방식은 전송 URL에 입력 데이터를 쿼리 스트링으로 보내는 방식
- http://jsonplaceholder.typicode.com/posts?userId=1&id=1
- 전송 URL 바로 뒤에 ?를 통해 데이터의 시작을 알려주고, key-value형태의 데이터를 추가한다. 1개 이상의 전송 데이터는 '&'로 구분
- URL에 전송 데이터가 모두 노출되기 때문에 보안에 문제가 있으며 전송할 수 있는 데이터의 한계가 있다.(255자)

POST
- POST 방식은 Request Body에 담아 보내는 방식이다.
- http://jsonplaceholder.typicode.com/posts
- URL에 전송 데이터가 모두 노출되지 않지만 GET에 비해 속도가 느리다.

## input

input태그는 폼태그 중에서 가장 중요한 태그로 사용자로부터 데이터를 입력받기 위해 사용된다.
서버에 전송되는 데이터는 name 어트리뷰트를 키로 value 어트리뷰트를 값으로 하여 key = value의 형태로 전송된다.

- button : button create
- check box : checkbox create
- color : color select create
- date : date control create
- datetime : date & time control create
- email : email input form create.
- file : file select form create
- hidden : hidden input form create
- image : image submit button create
- month : month select form create
- number : number input form create
- password : password input form create
- radio : radio button create
- range : rage select form create
- reset : reset button create
- search : search input form create
- submit : submit button create

## select
복수개의 리스트에서 복수개의 아이템을 선택할때 사용한다
서버에 전송되는 데이터는 select 요소의 name 어트리뷰트를 키로
option 요소의 value 어트리뷰트를 값으로 하여 key = value의 형태로 전송한다.
