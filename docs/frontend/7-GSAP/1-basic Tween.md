# Basic Tween

## gsap.to

원래 위치에서 지정한 값(위치)으로 이동하는 애니메이션이다.

- 기본 구문

```javascript
gsap.to('class, tag', { properties });

// ex) class
gsap.to('.box', { properties });

// ex) tag
gsap.to('h1', { properties });
```

- properties

| GSAP                   | CSS                          | description                                                   |
| ---------------------- | ---------------------------- | ------------------------------------------------------------- |
| x: 100                 | transform: translateX(100px) | X축으로 100px만큼 이동                                        |
| y: 100                 | transform: translateY(100px) | Y축으로 100px만큼 이동                                        |
| rotation: 360          | transform: rotate(360deg)    | 360도 회전                                                    |
| rotationX: 360         | transform: rotateX(360deg)   | X축으로 360도 회전                                            |
| rotationY: 360         | transform: rotateY(360deg)   | Y축으로 360도 회전                                            |
| skewX: 45              | transform: skewX(45deg)      | X축으로 45도 기울임                                           |
| skewY: 45              | transform: skewY(45deg)      | Y축으로 45도 기울임                                           |
| scale:2                | transform: scale(2, 2)       | 크기 2배 증가                                                 |
| scaleX: 2              | transform: scaleX(2)         | X축으로 크기 2배 증가                                         |
| scaleY: 2              | transform: scaleY(2)         | Y축으로 크기 2배 증가                                         |
| xPercent: 50           | transform: translateX(50%)   | 현재 위치에서 X축으로 50% 만큼 이동                           |
| yPercent: 50           | transform: translateY(50%)   | 현재 위치에서 Y축으로 50% 만큼 이동                           |
| duration: 3            | transition: all 3s           | 3초 동안 실행                                                 |
| opacity: 0             | opacity: 0                   | 투명도 100%                                                   |
| width: 100             | width: 100px                 | 가로 길이를 100px만큼 설정                                    |
| height: 100            | height: 100px                | 세로 길이를 100px만큼 설정                                    |
| backgroundColor: 'red' | backgroundColor: 'red'       | background color를 'red'로 변경                               |
| color: 'red'           | color: 'red'                 | font color를 'red' 로 변경                                    |
| padding: 100           | padding: 100px               | 안쪽 여백을 100px만큼 설정                                    |
| padding: '10 20 30 40' | padding: 10px 20px 30px 40px | 안쪽 여백을 상: 10px, 우: 20px, 하: 30px, 좌: 40px만큼 설정   |
| paddingTop: 10         | padding-top: 10px            | 안쪽 상측 여백을 10px만큼 설정                                |
| paddingBottom: 10      | padding-bottom: 10px         | 안쪽 하측 여백을 10px만큼 설정                                |
| paddingLeft: 10        | padding-left: 10px           | 안쪽 좌측 여백을 10px만큼 설정                                |
| paddingRight: 10       | padding-right: 10px          | 안쪽 우측 여백을 10px만큼 설정                                |
| margin: 10             | margin: 10px                 | 바깥쪽 여백을 10px만큼 설정                                   |
| margin: '10 20 30 40'  | margin: 10px 20px 30px 40px  | 바깥쪽 여백을 상: 10px, 우: 20px, 하: 30px, 좌: 40px만큼 설정 |
| marginTop: 10          | margin-top: 10px             | 바깥쪽 상측 여백을 10px만큼 설정                              |
| marginBottom: 10       | margin-bottom: 10px          | 바깥쪽 하측 여백을 10px만큼 설정                              |
| marginLeft: 10         | margin-left: 10px            | 바깥쪽 좌측 여백을 10px만큼 설정                              |
| marginRight: 10        | margin-right: 10px           | 바깥쪽 우측 여백을 10px만큼 설정                              |

GSAP은 사용자가 설정한 모든 숫자 속성에 대해 애니메이션을 적용할 수 있다.

- 100 (100px)
- 100px
- 100em
- 100rem
- 100vh and vw
- 100%

:::danger 브라우저 성능을 고려한다면

브라우저 성능을 최대치로 끌어올리기 위해선 **CSS Transform**과 **Opacity**만을 사용하여 애니메이션을 구현하는걸 권장한다. CSS Transform과 Opacity는 애니메이션을 위해 최적화되어 있는 코드이고 GPU를 사용하는 장점이 있다. left, margin, padding, width/height 조절 등을 사용하게 되면 브라우저가 페이지 레이아웃을 다시 리렌더링(re-render)하기 때문에 브라우저 성능이 저하될 수 있다.
:::

## gsap.from()

지정한 값(위치)에서 부터 원래의 위치로 되돌아오는 애니메이션이다.

- 기본 구문

```javascript
gsap.from('.orange', { x: 400, y: 500 });
```

## gsap.fromTo()

지정한 값(2번째 파라미터)에서 지정한 값으로(3번째 파라미터)로 이동하는 애니메이션이다.

- 기본 구문

```javascript
gsap.fromTo('orange', { x: 400, y: 500 }, { x: 200, y: 200 });
```

코드에서 사용된 2개의 객체는 from vars와 to vars로 작동된다.
