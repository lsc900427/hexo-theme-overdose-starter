---
title: Css-inheritance
tags:
---
## 상속

상속이란 상위 요소에 적용된 속성을 하위 요소가 물려받는 것을 의미한다
상속 기능이 없다면 각 요소의 rule set에 속성을 매번 각각 지정해야한다.
하지만 모든 속성이 상속되는 것이 아니다 상속이 되는 것과 되지 않는 것이 있다.

안되는 것들 
width, height, margin, padding, border, box-sizeing
display, background, vertical-align, text-decoration, position, top/right/bottom/left
, z-index, overflow, float

되는 것들

visibility, opacity, font, color, line-height, text-align, white-space

또한 요소에 따라 상속받지 않는 경우도 존재한다.

이경우는 inherit 키워드를 사용하여 명시적으로 상속받게 할 수 있다.

## 캐스캐이딩

요소는 하나 이상의 CSS선언에 영향을 받을 수 있따.
이 때 충돌을 피하기 위해서 CSS 적용 우선순위가 필요한데 이를 캐스캐이딩이라고 한다.

- 중요도
어디에 선언되었냐에 따라 우선순위가 달라진다
- 명시도
대상을 명화갛게 특정할수록
- 선언 순서
나중에 선언된 스타일이 우선 적용된다.

CSS가 어디에 선언 되었는지에 따라서 우선순위가 달라진다.

1. head 요소 내의 style 요소
2. head 요소 내의 style 요소 내의 @import문
3. link로 연결된 CSS파일
4. link로 연결된 CSS파일 내의 @import문
5. 브라우저 디폴트 스타일 시트

## transition

- transition: property duration function delay
- all 0 ease 0 -> 초기값
