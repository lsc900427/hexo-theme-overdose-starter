---
title: Html5-tag
tags:
---

## 정의

문서 형식 정의(Document Type Definition, DTD)태그는 출력할 웹페이지의 형식을 브라우저에게 전달한다.
문서의 최상위에 위치해야하며 대소문자를 구별하지 않는다.

HTML5
```html
<!DOCTYPE html>
```

HTML 4.01
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

XHTML 1.0
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

### html tag

html 태그는 모든 HTML 요소의 부모 요소이며 웹페이지에 단 하나만 존재한다.
즉 모든 요소는 html 요소의 자식 요소이며 html 요소 내부에 기술해야한다 단
DTD는 예외이다.

html은 글로볼 어트리뷰트를 지원한다. 특히 lang 어트리뷰트를 사용하는 경우가 많다.
다음은 한국어를 주언어로 사용하는 경우의 예이다.

```html
<html lang="ko">
```

### head tag

head요소는 메타데이터를 포함하기 위한 요소이며 웹페이지에 단 하나만 존재한다
메타데이터는 HTML 문서의 title, style, link, script에 대한 데이터로 화면에 표시되지 않는다.
head요소에는 메타데이터 이외의 화면에 표시되는 일체의 요소를 포함시킬 수 없다.

### title tag
title요소는 문서의 제목을 정의한다 정의된 제목은 브라우저의 탭에 표시된다.

### link tag
link요소에는 외부 리소스와의 연계 정보를 정의한다 주로 HTML과 외부 CSS 파일을 연계에 사용된다.

###  meta tag

meta 요소는  description, keywords, author, 기타 메타데이터 정의에 사용된다.
메타데이터는 브라우저 검색엔진(keywords) 등에 의해 사용된다.
charset 어트리뷰트는 브라우저가 사용할 문자셋을 정의한다.

 description => 웹페이지의 설명을 정의한다
 
 keywords=> 검색엔진이 사용할 keywords를 정의한다.
 
 author=> 저자를 명기한다.

<meta http-equiv="refresh" content="30"> 웹페이지를 30초마다 다시시작한다.

### body tag
body tag는 HTML 문서의 내용을 나타내며 웹페이지에 단 하나만 존재한다. 메타데이터를 제외한 웹페이지를 구성하는 대부분의 요소가 body 요소 내에 기술된다.

# Text 관련 태그

### 제목 (Headings) 태그

heading 태그는 제목을 나타낼 때 사용하며 h1에서 h6까지의 태그가 있다 h1이 가장 중요한 제목을 의미하며 글자의 크기도 가장 크다
시맨팅ㄱ 웹의 의미를 살려서 제목 이외에는 사용하지 않는 것이 좋다 검색엔진은 제목 태그를 중요한 의미로 받아들일 가능성이 크다.

```html
<h1></h1>
<h2></h2>
```
### 글자형태의 태그
# b tag
bold체를 지정한다 시맨틱 의미는 없다.

# i tag
italic체를 지정한다. 의미론적 의미는 없다.

# em tag
emphasized(강조 중요한) text를 지정한다. i tag와 동일하게 italic체로 표현된다 의미론적 중요성의 의미를 갖는다.

# small tag
small text를 지정한다.

# mark
highlighted text를 지정한다.

# del
deleted(removed) text를 지정한다. (가운데 줄)

# ins
inserted(added)text를 지정한다. (밑줄)

# sup / suq tag

sub태그는 아래에 쓰인 text sup 태그는 위에 쓰인 text를 지정한다.

### 본문태그

### p tag
단락을 지정한다

### br tag
br은 강제 개행을 지정한다 br tag는 빈요소로 종료 태그가 없다

### 공백 표시법

HTML에서는 1개이상의 공백(space)을 삽입하여 1개의 공백으로 표시된다 1개이상의 연속된 줄바꿈(enter)도 1개의 공백으로 표시된다

연속적 공백을 표시하는 방법은 `&nbsp;`의 사용

### pre

형식화된 text를 지정한다 pre태그 내의 content는 작성된 그대로 브라우저에 표시된다.

### hr

수평줄을 삽입한다.

### q
짧은 인용문을 지정한다 브라우저는 인용부호(큰 따옴표)로 q요소를 감싼다.

### blockquote

긴 인용문 블럭을 지정한다. 브라우저는 blockquote 요소를 들여쓰기한다 css를 이용하여 다양한 style을 적용할 수 있다.

