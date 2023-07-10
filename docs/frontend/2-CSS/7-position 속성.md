# position

- HTML 문서 상에서 태그를 배치하는 방법을 지정

## static

- position이 설정되지 않은 경우 기본값
- 움직임이 없이 고정된, 정적인 상태
- html을 작성한 순서에 따라 태그들의 위치를 지정

## relative

- 다른 태그들의 위치에 영향을 미치지 않는다.

- 상대적인 위치를 나타낸다.

- top, bottom, left, right를 통해 현재 기본 위치를 기준으로 태그의 위치를 조절할 수 있다.

```css
div {
  position: relative;
  top: 20px;
  left: 30px;
}
```

## absolute

- 일반적인 html 문서 상에서 태그의 흐름을 벗어나 다른 요소들의 배치에 영향을 주지 않는다.
- 독립적인 위치를 나타낸다.
- 조상 요소의 위치를 기준으로 기본 위치를 잡는다.
- relative와 같이 top, bottom, left, right 속성을 통해 위치를 조절할 수 있다.

## z-index 속성

- position이 static이 아닌 속성을 가진 박스에 z축의 위치를 지정
- 포토샵의 레이어와 비슷한 개념
- z-index의 값이 높을수록 앞으로 배치되며 낮을수록 뒤로 배치된다.

```css
.div1 {
  /* div2보다 뒤로 배치 */
  position: relative;
  z-index: 1;
}

.div2 {
  /* div1보다 앞으로 배치 */
  position: absolute;
  z-index: 2;
}
```
