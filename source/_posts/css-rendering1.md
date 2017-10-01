---
title: css-Rendering
date: 2017-08-31 20:30:46
tags:
---

### 영역 나누기(GeoMetry Calculate)
- 현대의 렌더링은 geometry를 계산하고 Fragement를 한다
- Geometry를 계산하는 과정을 reflow라 한다
- width ,height, position
### 칠하기(Fragment Fill)
- fragement는 픽셀
- Fragment를 칠하는 과정을 repaint라 한다
- background

현대의 시스템은 영역을 나누고 색을 칠하는 것이 기본이다
부하는 fragment fill에서 많이 받는 것 같지만
reflow의 변화가 일어나면 전부 다시그려야해서 부하를 더 많이 받는다.
geomery쪽 표현을 이해하는 것이 더 어렵다
색칠하는 쪽은 위에 비해 국소적인 표현이기 때문에 더 쉽다

### CSS specifications

## 본질은 약속이다
~~ 하면 ~~ 해줘.
과거에는 W3c 현재는 HTML재단에서

- CSS LEVEL1
    - A4용지 한장 짜리 분량
- CSS LEVEL2 + MODULE
    - 통합레벨, 표현과 내용을 분리하자, CSS의 활성화
    - CSS 모듈을 쪼개서 관리할래
    
- CSS LEVEL 2.1
    - 통합레벨이 있다.
    - 모듈들의 통합이라 거의레벨 3이라고 볼수 있다
- Module level
    - 레벨은 사라졌다
    - 모듈이 계속 제안되고 있다.
    - 새 모듈 태반이 초안이다
    - CSS 3 는 존재하지않는다. 2.1에서 튀어나온 것이다.
        즉 모듈들이 개별적으로 발전하는 것이다.(너무 많은 모듈들이 중구난방으로 발전)
        
## NORMAL FLOW
- 공부는 정확한 용어를 정확하게 설명
- 왜그런지 말을 못하면 구현도 못한다(스펙 문서가 중요하다)

-NORMAL FLOW가 핵심이다. 이걸 이해 못하면 HTML을 모른다.

-POSITION
- static
- relative
- 위의 두가지만 노말플로우의 영향을 받음
- Block Formatiing Context, inline Formatting Context, relative Position
    - BFC, IFC, RP
    - 노말 플로우의 핵심
    - BFC가 오프셋의 값을 계산해준다.
    - 인라인 요소를 만나면 인라인 블락을 만든다
    - 새로운 BFC를만드는 알고리즘 또한있다
    - 많은 BFC가 모여서 그려진다.
    - word-breaking을 걸어두면 글자하나하나를 span처럼 계산하는 구나
    - ifc의 알고리즘을 변경해준다.
    - BFC, IFC가 중요하지 돔이 중욯지 않다
    - RP
        - static으로 그리고나서 스태틱으로 그려진 위치에서 상대적으로 얼마 줄거냐 라는 것을 나타낸다
        - 노말 플로를 계산하고 relative를 얼마를 주겠다라는 뜻이다.
    - Float
        - left, right, none, inherit
        - css reset 속성은 속성별로 따로 외워야한다(다양한 모듈 때문에)
        - NEW BFC -> Float over Normal flow -> Text, Inline Guard(ifc 요소의 가이드 ifc요소들이 float 요소의 자리에 못들어간다.) -> Linebox(float은 line box의 개념으로 그려지게된다, ifc,bfc nomral flow로 그려지지 않는다.)
        - 인라인 가드가 플로트 가드에 걸리면 부모의 크기를 확장시키지 않는다. 블락가드에걸리면 부모의 크기를 확장시킨다
        - 플롯 가드에 걸리면 뒤를 안보고 내려버린다.
        - 레프트 플롯가드보다 왼쪽 라이트 플롯가드보다 오른쪽에 있어야 한다.
    - Overflow
        - VISIBLE, HIDDEN, SCROLL, INHERIT, AUTO
        - VISIBLE이 아닌 경우에  노말 플로우에 영향을 끼친다.
        - 다른 걸 쓰면 NEW BFC를 만든다.
        - 기본 값은 VISIBLE 자동으로 공간이 확장된다.
            - BFC, IFC와 동일한 알고리즘을 가지는 것이라고 볼 수 있다.
    - OverFLOW -X, -Y
        - VISIBLE, HIDDEN, SCROLL, CLIP, AUTO
        - 판단하는 모듈이 다른 css 모듈에 의존해야 한다
    - TEXT-OVERFLOW
        - 2.1 ui module 표준안
        - CLIP, ELLIPSIS(...해주게하는거)
         
        
    
    - absolute
    - fixed
    - inherit
        