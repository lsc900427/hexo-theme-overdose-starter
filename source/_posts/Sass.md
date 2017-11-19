---
title: Sass
date: 2017-10-28 10:18:56
tags: sass
---


# Sass 기초

- install
    - sudo gem install sass
    - sass -v
     
    
- 프로그래밍적 문법으로 css 컴파일 해주는 전처리기
- 쓰는 이유
    - 구성원들끼리의 규칙(컨벤션)을 통해
        효율적인 코드 작성 가능
- Sass문법으로 작성된 부분에 대한 css selector의 시각적인 상속관계 파악
- css에서의 변수 및 함수 사용 가능
- 웹사이트 용량 방대해짐에 따른 코드의 효율적인 관리가 필요
- 기존 문법과의 호환성(제어문 제공 등)
   - if, while
- 변수 및 함수의 사용으로 인한 효율적인 코드
   "작성 + 재사용"가능
   
   
   feature -> release -> develop -> master
   
   google search -> git flow
## 스타일 지정법 4가지

- --sytle nested # 내가 작성한대로
- --style expanded # 일반적인 css작성방식
- --style compact # 1줄로
- --sytle compressed # 컴파일 결과처럼 나오게 된다.
- --sourcemap=none

## 변수
= 대신 : 을 쓴다.


## gulp, node-sass

npm i gulp -g
npm i -D gulp-sass
폴더에서 npm i gulp