---
title: Html5-link
tags:
---
### 정의

HtperText의 Hyper는 컴퓨터 용어로써 텍스트 등의 정보가 동일 선상에 있는 것이 아니라
다중으로 연결되어 있는 상태를 의미한다.

이것은 HTML의 가장 중요한 특징인 link의 개념과 연결되는데 기존 문서나 텍스트의 선형성 고정성의 제약에서 벗어나 
사용자가 원하는 순서대로 원하는 정보를 취득할 수 있는 기능을 제공한다.
한 텍스트에서 다른 텍스트로 건너뛰어 읽을 수 있는 이 기능을 하이퍼링크라고 한다.
HTML link는 hyperlink를 의미하며 atag가 그 역할을 담당한다.

## href 어트리뷰트

href 어트리뷰트는 이동하고자 하는 파일의 위치(경로)를 값으로 받는다.
경로(path)란 파일 시스템 상에서 특정 파일의 위치를 의미한다.

### 디렉토리

디렉토리는 파일과 다른 디렉토리를 갖는 파일 시스템 내의 존재물로써 폴더라고 불리운다

- 루트 디렉토리

파일 시스템 계층 구조 상의 최상위 디렉토리
* 유닉스 : /
* 윈도우 : C:\

- 홈디렉토리

시스템의 사용자에게 각각 할당된 개별 디렉토리

* 유닉스: /users/계정명
* 윈도우: C:\users\계정명

- 작업 디렉토리

현재 작업 중인 파일의 위치한 디렉토리이다.
* ./

- 부모 디렉토리

작업 디렉토리의 부모 디렉토리이다.
* ../

## 파일 경로(File path)

파일경로는 파일 시스템에서 파일의 위치를 나타내는 방법이다. 경로에는 절대경로와 상대경로가 있다.

- 절대경로

현재 작업디렉토리와 관련없이 특정 파일의 절대적인 위치를 가리킨다 루트 디렉토리를 기준으로 파일의 위치를 나타낸다.

* http://www.mysite.com/index.html
* /Users/leeungmo/Desktop/myImage.jpg
* C:\users\leeungmo\Desktop\myImage.jpg
* /index.html


- 상대경로

현재 작업디렉토리를 기준으로 특정파일의 상대적인 위치를 가리킨다.

* ./index.html
* ../dist/index.js
* ../../dist/index.js
* index.html
* html/index.html

href 어트리뷰트에 사용 가능한 값은 아래와 같다.

```html
<!DOCTYPE html>
<html>
  <body>
    <a href="http://www.google.com">URL</a><br>
    <a href="html/my.html">Local file</a><br>
    <a href="file/my.pdf" download>Download file</a><br>
    <a href="#">fragment identifier</a><br>
    <a href="mailto:someone@example.com?Subject=Hello again">Send Mail</a><br>
    <a href="javascript:alert('Hello');">Javascript</a>
  </body>
</html>
```

## target 어트리뷰트

타겟 속성은 링크를 클릭했을 때 윈도우를 어떻게 오픈할 지를 지정한다.

_self : 링크를 클릭시 연결문서를 현재 윈도우에서 오픈 (기본값)
_blank : 링크를 클릭 시 연결문서를 새로운 윈도우나 탭에서 오픈