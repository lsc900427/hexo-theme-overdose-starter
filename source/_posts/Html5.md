---
title: Html5
tags:
---

HTML, CSS는 기본이지만 자꾸 그 기본에 대한 불안감이 커져서 총정리 하는 시간을 가져보도록 하려한다.

## 정의

HTML(HyperText Markup Language)는 웹페이지를 기술하기 위한 마크업 언어다.
즉 웹페이지의 내용(content)와 구조(structure)를 담당하는 언어로써 HTML 태그를 통해서
정보를 구조화하는 것이다.

HTML은 그래픽, 통신, 디바이스 접근, 오프라인, 시맨틱 태그, CSS3를 완벽히 지원한다.

HTML5문서는 반드시 `<!DOCTYPE html>`이라는 문서형식을 HTML5로 지정한다.
실제 HTML문서는 `<html>`과 `</html>` 사이에 작성한다.
`<head>`와 `</head>` 사이에는 document title, 외부파일의 참조, metadata의 설정등이 위치하고
이 정보는 브라우저에 표시되지 않는다.
웹브라우저에 출력되는 모든 요소들은 `<body>`태그 안에 위치한다.


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>Hi</h1>
    <h2>Hello</h2>
</body>
</html>
```

HTML document는 .html 확장자를 가지는 순수한 테긋트 파일이다. 그러므로 메모장 등으로도 편집가능하다.


## 기본문법

태그는 대소문자를 구별하지 않으나 소문자를 사용하는 것이 일반적이다.

요소는 중첩될 수 있다. 즉, 요소는 다른 요소를 포함할 수 있는데 이때 부자관계가 성립된다.
이런 부자관계로 정보를 구조화 하는 것이다.

이런 중첩된 관계를 시각적으로 파악하기 쉽게 인덴트를 사용한다.

텍스트노드를 가질 수 없는 요소를 빈요소라하는데 빈요소들은 어트리뷰트노드만을 가질 수 있다.
*br
*hr
*img
*input
*link
*meta

## 어트리뷰트
어트리뷰트란 요소의 성질, 특징을 정의하는 명세다. 요소는 어트리뷰트를 가질 수 있으며 어트리뷰트는
요소에 추가적인 정보(이미지 파일의 경로, 크기)를 제공한다. 어트리뷰트는 시작태그에 위치해야하고
이름과 값의 쌍을 이룬다.
```html
<img src="hihi.jpg">
```
이런 정보를 사용해서 브라우저는 img 요소들을 화면에 출력한다.

### 공용 어트리뷰트
공용 어트리뷰트는 모든 요소가 사용할 수 있는 어트리뷰트다.
id -> 유일한 식별자를 요소에 지정, 중복지정 불가능
class -> 스타일시트에 정의된 class를 요소에 지정 중복지정 가능
hidden -> css hidden과 다르게 의미상으로도 브라우저에 노출되지 않게한다.
lang -> 지정된 요소의 언어를 지정, 검색엔진의 크롤링시 웹페이지의 언어를 인식할 수 있게 한다.
sytle -> 요소에 인라인 스타일을 지정한다.
tabindex -> 사용자가 키보드로 페이지를 내비게이션 시 이동 순서를 정한다.
title -> 요소에 관한 제목을 지정한다.

## 주석

주석은 개발자에게 코드를 설명하기 위해서 사용되며 브라우저는 주석을 화면에 표시하지 않는다.
```html
<!-- 이 안에 있는 내용은 브라우저에서 안보인다. -->

```

