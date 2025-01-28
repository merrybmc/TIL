# Basic Tween

## gsap.to

- 기본 구문

```javascript
gsap.to('class, tag', { properties });

// ex) class
gsap.to('.box', { properties });

// ex) tag
gsap.to('h1', { properties });
```

- properties

| GSAP           | CSS                          | description                         |
| -------------- | ---------------------------- | ----------------------------------- |
| x: 100         | transform: translateX(100px) | X축으로 100px만큼 이동              |
| y: 100         | transform: translateY(100px) | Y축으로 100px만큼 이동              |
| rotation: 360  | transform: rotate(360deg)    | 360도 회전                          |
| rotationX: 360 | transform: rotateX(360deg)   | X축으로 360도 회전                  |
| rotationY: 360 | transform: rotateY(360deg)   | Y축으로 360도 회전                  |
| skewX: 45      | transform: skewX(45deg)      | X축으로 45도 기울임                 |
| skewY: 45      | transform: skewY(45deg)      | Y축으로 45도 기울임                 |
| scale:2        | transform: scale(2, 2)       | 크기 2배 증가                       |
| scaleX: 2      | transform: scaleX(2)         | X축으로 크기 2배 증가               |
| scaleY: 2      | transform: scaleY(2)         | Y축으로 크기 2배 증가               |
| xPercent: 50   | transform: translateX(50%)   | 현재 위치에서 X축으로 50% 만큼 이동 |
| yPercent: 50   | transform: translateY(50%)   | 현재 위치에서 Y축으로 50% 만큼 이동 |

:::danger 브라우저 성능을 고려한다면

브라우저 성능을 최대치로 끌어올리기 위해선 **CSS Transform**과 **Opacity**만을 사용하여 애니메이션을 구현하는걸 권장한다. CSS Transform과 Opacity는 애니메이션을 위해 최적화되어 있는 코드이고 GPU를 사용하는 장점이 있다. left, margin, padding, width/height 조절 등을 사용하게 되면 브라우저가 페이지 레이아웃을 다시 리렌더링(re-render)하기 때문에 브라우저 성능이 저하될 수 있다.
