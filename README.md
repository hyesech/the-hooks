# The Hooks
Website for learning react hook.

## Branches
### dev
main branch
여기로 merge된 경우 gh-pages에 배포
현재까지 배포된 페이지는 useTitle
추후 업데이트 예정 페이지(배포x)
- [x] useRef
- [ ] useMemo
- [ ] useCallback

### v1
useRef, useEffect(componentDidUnMount)
2021/03/07 ~ 2021/03/09
- [x] useRef를 이용한 페이지 제작
- [x] 데이터 구조 개선
- [x] componentWillUnMount와 useEffect의 함수 return과 상관관계 공부, page에 내용 작성
- [x] react devtools: 불필요한 rerendering 잡아내기
- [ ] 어떤 함수가 렌더링 되고 있는지 정확히 분류
- [x] Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
- [ ] useMemo, useCallback 이해하고 useRef page에 적용(개선이 필요한 상황)

### v2
useMemo, useCallback
2021/03/07 ~ 2021/03/xx
- [ ] useMemo를 이용해 useRef 페이지 개선한 내용 작성
- [ ] 개선이 필요한 이유를 포함한 useMemo, useCallback 사용 이유 작성
- [ ] 


## 기타 수정이 필요한 부분
- [ ] footer: 상업용 웹 사이트를 디자인하려고 더미 데이터를 넣었으나, 웹 페이지의 성격에 맞게 정리
- [ ] css: 폴더마다 같은 css가 in js의 형태로 반복되는 부분 개선 필요
- [ ] rerendering issue: 전반적으로 hook의 특성, 미숙한 hook 사용 등으로 쓸데없이 페이지가 리렌더링 되는 현상 잡아내고, 해결
