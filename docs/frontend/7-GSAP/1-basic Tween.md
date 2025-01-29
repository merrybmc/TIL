# Basic Tween

- basic properties

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
| duration: 3            | transition: all 3s           | 3초 동안 실행, default: 0.5초                                 |
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

<br/>

- special properties

| GSAP            | CSS                                                     | description                                                                       |
| --------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| repeat: 3       | 직접적인 CSS 속성 사용 불가animation-iteration-count: 4 | 애니메이션을 3번 반복                                                             |
| repeat: -1      | animation-iteration-count: infinite                     | 애니메이션 무한 반복                                                              |
| delay: 3        | animation-delay: 2s                                     | 최초 애니메이션이 실행 대기 시간 3초                                              |
| crepeatDelay: 2 | CSS 속성 사용 불가                                      | 애니메이션 반복 대기 시간 2초                                                     |
| rotationX: 360  | transform: rotateX(360deg)                              | X축으로 360도 회전                                                                |
| yoyo: true      | animation-direction: alternate                          | 현재 위치에서 지정한 위치까지 이동 후 다시 현재 위치로 되돌아오는 애니메이션 반복 |

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

## from()

지정한 값(위치)에서 부터 원래의 위치로 되돌아오는 애니메이션이다.

- 기본 구문

```javascript
gsap.from('.orange', { x: 400, y: 500 });
```

## fromTo()

지정한 값(2번째 파라미터)에서 지정한 값으로(3번째 파라미터)로 이동하는 애니메이션이다.

- 기본 구문

```javascript
gsap.fromTo('orange', { x: 400, y: 500 }, { x: 200, y: 200 });
```

코드에서 사용된 2개의 객체는 from vars와 to vars로 작동된다.

## ease

애니메이션에 가속도를 주는 property이며 기본 값은 ease: 'power1.out' 이며 모든 property는 out이 기본 값이다.<br/>
GSAP에서는 애니메이션을 위해 사용하기도 하지만 레이아웃, 오브젝트간의 간격을 주기 위해 사용된다.

- properties (https://gsap.com/docs/v3/Eases/)

| GSAP                          | description                                                      |
| ----------------------------- | ---------------------------------------------------------------- |
| iease: &#39;method.inOut&#39; | in -> Out -> in 순서대로 동작                                    |
| ease: 'none' or linear'       | 등속도 운동                                                      |
| **ease: 'power1'**            | 부드럽게 시작해서 부드럽게 끝나는 기본적인 가속도 운동           |
| ease: 'power1.in'             | 훨씬 빠르게 가속                                                 |
| **ease: 'power2'**            | 빠르게 가속한 후 부드럽게 감속하는 효과                          |
| ease: 'power2.in'             | 훨씬 빠르게 가속                                                 |
| **ease: 'power3'**            | power2보다 빠르게 가속한 후 부드럽게 감속하는 효과               |
| ease: 'power3.in'             | 훨씬 빠르게 가속                                                 |
| **ease: 'power4'**            | power3보다 빠르게 가속한 후 부드럽게 감속하는 효과               |
| ease: 'power4.in'             | 훨씬 빠르게 가속                                                 |
| **ease: 'back'**              | 지정한 위치보다 더 멀리 이동 후 다시 지정한 위치로 복귀하는 효과 |
| ease: 'back.in'               | 원래 위치에서 뒤로 살짝 갔다가 빠르게 가속                       |
| **ease: 'bounce'**            | 지정한 위치로 여러 번 튕긴 후 도달하는 효과                      |
| ease: 'bounce.in'             | 시작 지점에서 여러 번 튕긴 후 지정한 위치로 이동                 |
| **ease: 'circ'**              | 원형 곡선을 따라 이동하는 효과                                   |
| ease: 'circ.in'               | 원형 곡선을 따라 가속                                            |
| **ease: 'elastic'**           | 고무줄처럼 탄성을 주며 튕기는 효과                               |
| ease: 'elastic.in'            | 고무줄처럼 탄성을 가하는 준비 운동 후 지정한 위치로 가속         |
| **ease: 'expo'**              | 아주 빠르게 움직인 후 느리게 멈춤                                |
| ease: 'expo.in'               | 아주 느리게 시작한 후 빠르게 멈춤                                |
| **ease: 'sine'**              | sin 기반의 자연스러운 감속                                       |
| ease: 'sine.in'               | 자연스러운 가속                                                  |
| ease: 'steps(n)'              | 애니메이션을 n단계로 나누어 진행 (스프라이트 애니메이션)         |

## stagger

단일 Tween에서 여러 대상의 시작 시간을 오프셋 설정하여 다중 요소를 제어 가능하다.

```html
<body>
  <div class="stage">
    <div class="orange"></div>
    <div class="pink"></div>
    <div class="green"></div>
    <div class="red"></div>
    <div class="blue"></div>
  </div>
</body>

<script>
  gsap.to('.orange', { x: 100 });
  gsap.to('.pink', { x: 100, delay: 0.3 });
  gsap.to('.green', { x: 100, delay: 0.6 });
  gsap.to('.red', { x: 100, delay: 0.9 });
  gsap.to('.blue', { x: 100, delay: 1.2 });
</script>
```

- 이 경우 객체가 더 많을 경우 delay을 일일이 전부 다 수정해주어야 한다.
- 이러한 기능은 CSS 속성에서 지원하지 않는다.
  <br/><br/>
- 기본 구문

```html
<body>
  <div class="stage">
    <div class="orange box"></div>
    <div class="pink box"></div>
    <div class="green box"></div>
    <div class="red box"></div>
    <div class="blue box"></div>
  </div>
</body>

<script>
  gsap.to('.box', { x: 100, stagger: 0.3 });
</script>
```

- 각 box class를 가진 오브젝트들이 순차적으로 delay를 0.3초씩 가지며 실행된다.

- properties

| GSAP                     | description                                                                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stagger: 0.3             | 0.3초의 delay를 가지며 다중 요소가 순차적으로 실행                                                                                                                      |
| stagger: { each: 0.3 }   | 기본 값, 각 요소의 시작 사이에 0.3초의 대기 시간 적용 (stagger: 0.3과 동일)                                                                                             |
| stagger: { amount: 1.0 } | 다중 요소가 1초를 각각 나누어 1초만에 모든 애니메이션이 순차적으로 실행                                                                                                 |
| stagger: {from: 'value'} | number: 해당 index의 오브젝트부터 실행,<br />'center': 요소의 가운데 index부터 실행<br />end': 요소의 마지막 index부터 실행<br />'edges': 요소의 양쪽 끝 index부터 실행 |
