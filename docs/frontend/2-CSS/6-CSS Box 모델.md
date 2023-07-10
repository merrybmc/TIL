# CSS Box 모델

![box](https://user-images.githubusercontent.com/65064563/252177584-4799a7a2-7097-456d-ba2c-a943f65b5d6d.png)

- HTML 요소를 감싸는 박스
- element, padding, border, margin으로 구성
  - element : 텍스트, 사진 등 태그의 내용을 보여줄 요소
  - padding : border 안쪽의 영역을 감싸는 영역
  - border : 요소와 패딩을 감싸는 테두리
  - margin : 테두리 밖의 영역
- CSS Box 모델은 **블록 박스** 에만 적용

## width, height

- 요소의 가로 넓이/세로 길이를 설정
- 기본 값은 컨텐츠 영역 만큼이지만 box-sizing 속성을 사용하면 border의 영역만큼 설정 가능
- min-content : 컨텐츠의 최소 넓이
- max-content : 컨텐츠의 최대 넓이

## padding, margin

- padding/ margin : 단축 속성 (top, right, bottom, left) 시계 방향 순으로 작성

```css
div {
  padding: 0px 1px 2px 3px;
  /* top:0px;
       right:1px;
       bottom:2px;
       left:2px */

  padding: 10px 20px;
  /* top, bottom:10px; 
       left, right:20px; */

  padding: 10px 20px 30px;
  /* top:10px;
    left, right:20px;
    bottom:30px; */

  padding: 10px;
  /* top, bottom, left, right:10px; */

  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;

  margin: auto; /* 수평 가운데 배치 */
  /* margin auto를 통해 수평 정렬은 할 수 있지만 세로 정렬은 불가능 */
}
```

## border

- 테두리를 지정하는 속성
- 단축 속성이며 선의 두께(border-width), 스타일(border-style), 색상(border-color)을 지정 가능

```css
div {
  border: 1px solid black; /* 두께, 스타일, 색상 */
}
```

## border-radius

- 테두리의 모서리를 둥글게 처리
- 단축 속성이며 세부로
  왼쪽 위 (border-top-left-radius), <br/>
  오른쪽 위 (border-top-right-radius), <br/>
  오른쪽 아래 (border-bottom-right-radius), <br/>
  왼쪽 아래 (border-bottom-left-radius) 가 있다.
