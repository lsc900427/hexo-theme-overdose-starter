---
title: Css-BoxModel
tags:
---

브라우저는 박스모델의 크기와 프로퍼티 위치를 근거로 하여 렌더링을 실행한다.

- Contents : 요소의 텍스트나 이미지등의 실제 내용이 위치하는 영역
- Padding :  보더 안쪽에 위치하는 요소의 내부 여백 영역 요소에 적용된 배경색 이미지는 패딩영역까지 적용된다.
- Border : 테두리 영역으로 보퍼 속성 값은 테두리의 두께를 의미한다.
- Margin : 테두리 바깥에 위치하는 요소의 외부 여백 영역이다.

컨텐츠가 width, height 값보다 크면 넘칠 수 있다
넘치는 컨텐츠는 overflow:hidden을 통해서 감출 수 있다.

## block 레벨 요소

- 항상 새로운 라인에서 시작한다.
- 화면 크기 전체의 가로폭을 차지한다.
- width, height, amrgin, padding 프로퍼티 지정이 가능하다.
- block 레벨 요소 내에 inline 레벨 요소를 포함 할 수 있다.
- block 레벨 요소의 예 form, table

## inline 레벨 요소

- 새로운 라인에서 시작하지 않으면 문장의 중간에 들어갈 수 있다. 즉 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치한다
- content의 너비만큼 가로 폭을 차지한다
- width, height, amrgin, padding 프로퍼티 지정이 불가능하다 상 하 여백은 line-height로 지정한다.
- inline 레벨 요소 뒤에 공백이 있는 경우 정의하지 않은 space가 자동 지정된다.
- inline 레벨 요소 내에 block 레벨요소를 포함할 수 없다 inline레벨 요소는 일반적으로 block 레벨 요소에 포함되어 사용된다.
- textarea, button, select, img

## inline-block 레벨 요소

- block과 inline 레벨 요소의 특징을 모두 갖는다. inline레벨 요소와 같이 한 줄에 표현되면서 width, height, margin 프로퍼티를 모두 지정 할 수 있다.
- 기본적으로 인라인 레벨 요소와 흡사하게 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치시킬 수 있따.
- 블락 처럼 가로, 세로, 마진 패딩 프로퍼티를 모두 정의하고 상하여백도 마진과 라이하이트 두가지 모두로 제어가능하다

## visibility 프로퍼티

요소를 보이게 할 것인지 보이지 않게 할 것이지 정의한다
즉 요소의 렌더링 여부를 결정한다

visible	해당 요소를 보이게 한다 (기본값)
hidden	해당 요소를 보이지 않게 한다. display: none;은 해당 요소의 공간까지 사라지게 하지만 visibility: hidden;은 해당 요소의 공간은 사라지지 않고 남아있게 된다.
collapse	table 요소에 사용하며 행이나 열을 보이지 않게 한다.
none	table 요소의 row나 column을 보이지 않게 한다. IE, 파이어폭스에서만 동작하며 크롬에서는 hidden과 동일하게 동작한다.

## position

- static

기본 값으로 기본적으로 position 프로퍼티를 지정하지 않을 때와 같다.
부모 요소 내에 자식 요소로서 존재할 때는 부모 요소의 위치를 기준으로 배치된다.
기본적으로 이 값을 지정할 일은 없지만 이미 설정된 position을 무력화 시키기위해서 사용된다.

- relative

기본 위치를 기준으로 좌표를 사용하여 위치를 이동시킨다
static을 선언한 요소와 relative를 선언한 요소와의 차이는 좌표 프로퍼티의 동작여부뿐

- absolute

부모 요소 혹은 가장 가까이 있는 조상요소 기준으로 좌표 프로퍼티 만큼 이동한다
즉 static을 제외한 나머지 속성이 선언되어 있는 부모 또는 조상 요소를 기준으로 위치가 결정된다

static 일경우는 document body를 기준으로 하여 좌표 속성대로 위치하게된다.
부모를 배치기준으로 삼고 싶다면 부모 요소에 relative를 정의해라
absolute선언시 블락레벨 요소의 width는 인라인 요소처럼 content에 맞게 변화되므로
적절한 width를 지정해야한다.

## float

float 속성은 해당요소를 다음 요소위에 떠있게한다. 플롯의 의미는 요소가 기본 레이아웃의 흐름에서 벗어나
요소의 모서리가 페이지의 왼쪽이나 오른쪽으로 이동하는 것을 뜻한다.
플롯 사용시 요소의 위치를 고정시키는 포지션 속성의 absolute를 사용하면 안된다.

플롯시 높이로 인한 문제 해결법
```css
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
```
