---
title: git-02
date: 2017-10-01 12:49:03
tags: pull request, repository
---

### repository 생성방법

- 웹에서 뉴눌러서 만들기(주로 git init으로 만든다.)
    - 주소를 복사 하기
    - 본인이 원하는 경로에 git clone 주소복사본
    - 폴더가 생기고 접근이 가능하다.
    - untracked 상태 (깃 저장소에 한번도 안올라온 상태)
    - tracted 상태로 만들기 위해서  add를 해준다.
    - 이후 staging area에 올라가게 만들어지면 녹색으로 바뀐다.
    - git commit+ 메세지입력 + :wq로 하거나 git commit -m ""으로 커밋하면 된다.
    - 깃은 6개의 해쉬 id를 갖는다. 몇가지가 변했나도 알 수 있다.

- git init으로 만들기



## pull request

- pull request에 대한 복잡한 설명이 많기 때문에 간략하게 개념만 작성해보겠다.
    - 나 자신의 브런치를 하나 판다.
    - base 코드를 pull request를 통해 내가 짠 코드를 관리자에게 컨펌 받을 수 있다.
    - 코드 관리자가 pull request를 보고 마음에 들면 merge를 하고 마음에 안들면 reject로 다시 짜라고 하면 된다..ㅜㅜ
    - 오픈소스에도 이런식으로 풀리퀘를 날려서 오픈소스 기여자가 되는 경우가 있다고 하니 한번 시도해봐야겠다.
    