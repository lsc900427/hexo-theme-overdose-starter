---
title: git-01
date: 2017-09-23 10:18:52
tags: git스터디
---

## 버전관리가 무엇인가?

- 파일변화를 시간에 따라 기록했다가 이후에 특정 시점의 버전을 로드할 수 있는시스템
- 작업자들의 기록이 한 로그에 기록이 된다
- 효율적으로 로그를 관리하고 싶을때 버전관리를 사용한다.


## 왜 대세인가? 대세의 이유

- 오픈소스다
- 공개 프로젝트는 항상무료다.
- 비공개는 돈을 내야한다.
- 효율적으로 개발자와 개발자가 소통할 수 있다.
- 통째로 저장소에 저장 할 수 있다.
    fork란 기능을 통해서 독립된 공간에서 작업을 하고 개선할 수 있다.
    그리고 제안도 할 수 있다.(포크를 받아서 복사를 한 후에 Pull request라는 기능을 통해서 제안을 할 수가 있다.
    )
- branch를 이용한 local에서의 자유로운 실험이 가능하다.
- 변동사항이 없으면 깃은파일을 저장하지 않고
이전상태 파일에 대한 링크만 저장한다.
- 커밋은 작업자 내용 시간 내용등을 전부 저장한다.


- git --version
- which git
- 전역과 지역의 차이
- git config --global user.name <name>
- 글로벌 옵션명령어만 빼면 지역에서 할 수 가 있다.
- git init을 한 후에 해야 한다.

- git init이란??
- 로컬에서 저장소를 만든다.


- 로컬에서 만든 것과 원격으로 만든 것은 다르다.
- 로컬에서 저장소를 만들면 내 로컬에서만 만든거지 깃허브 페이지랑 연결된 것이 없다.
- 깃랩같은 것은 설치형 저장소(비공개 저장소나 사내용으로 사용하기 위한 기업용으로 많이 쓴다.)
- 기업용 깃랩은 무료다. 그러나 깃허브 상업적 사용은 비싸다.
- 웹에서 만들 수 도있다. 원격저장소로 만들기.
- git init으로 만들기.
저장소와 연결을 해줘야하기 때문에 번거롭다

- On branch master
  Your branch is based on 'origin/master', but the upstream is gone.
    (use "git branch --unset-upstream" to fixup)
  nothing to commit, working tree clean
  unmodified
  
  - 수정되면 unmodified가 된다
  ㅡ 언트랙드
  - statge area에 올려야한다 깃은!!!
  
  - 깃의 명령어
  - git status를 치는 습관이 필요하다 파일이 어떤 상태인지 꼭 알아야함
  - 현재저상소의 변동이 있는지 없는지 확인할 수 있는 명령어다.
  - 축약해서도 볼수 있다.. git status -s
  
  - staging area 있는 이유
   - 내가 원하는 것만 커밋을 하고 싶을때 staging area를 통해서 !
   - 개발 스테이징 개발 베포 리얼배포
   - 충돌을 해결하고 싶을 때 
   
- master, 해시로그, 7글자 메세지
- 커밋생성 로그 이거고 메세지는 이거다.
- 4개의 파일변한거 확인가능 create mode 신규로 추가되었다.
- 깃이 돌아가는 과정을 상세히 볼 수 가 있다. 

[master 0d76dc0] hello
 4 files changed, 188 insertions(+)
 create mode 100644 2.html
 create mode 100644 3.html
 create mode 100644 4.html
 create mode 100644 5.html
 
 git commit 이후에 메세지 위에 메세지를 입력해서 킬수도 있다.
 - 유의미한 커밋메시지를 작성하도록 해라.
 - 커밋을 하면 로그가 생긴다.
 - 로그관리를 어떻게 하는지 알아야한다.
 - 로그보는 것은 중요하다.
 - git log
 - git log --oneline
    - 해시를 7글자로 줄여주고 커밋메세지만 보여준다.
    - 만약 END가 나오면 Q로 빠져나온다.
        
- git log --graph -2




iTerm2

