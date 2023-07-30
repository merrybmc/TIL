# SVG

- 확장 가능한 벡터 그래픽이다. (Scalable Vector Graphics)
- XML 기반의 2차원 그래픽이다.
- DOM의 일부로 각 개체별로 HTML 요소로 추가된다.
- 벡터라서 크기와 상관없이 선명하게 유지되며 파일 사이즈가 작다.
- CSS와 JS를 이용하여 이미지 조작이 가능하다.
- 모양이 복잡하고 개체가 많을수록 성능이 저하된다.

## fill

- SVG 이미지의 색상을 바꾼다.

```css
.svgImage {
  fill: brown;
}
```

- 적용 전

![image](https://github.com/merrybmc/TIL/assets/65064563/394a905b-edc1-413c-bac4-9f55d63587b8)

- 적용 후

![image](https://github.com/merrybmc/TIL/assets/65064563/86778b35-1926-4438-9ad3-419b296328d2)

## stroke

- SVG 이미지 선의 색상을 바꾼다.

```css
.svgImage {
  stroke: blue;
  stroke-width: 10px;
  stroke-lincap: round; /* 선을 둥글게 처리 */
  stroke-linejoin: miter; /* 선의 끝부분을 둥글게 처리 */
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/6db06119-d717-4e85-95a1-571a670b62da)

## @keyframes

- 애니메이션의 진행 과정을 나타낸다.
- 0%는 keyframes의 시작 지점이다.
- 100%는 keyframes의 끝나는 지점이다.

```css
@keyframes eye {
  0% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1.1);
  }
}
```

## animation

- keyframes와 연결되는 속성이다.
- 키프레임 애니메이션을 속도, 반복 등을 제어한다.

```css
.eye {
  animation: eye 1s infinite alternate;
}
```

- 첫번째 파라미터는 클래스 이름이며 두번째는 속도를 나타낸다.
- 3번째 파라미터 속성
  - infinite : 무한 반복
- 4번째 파라미터 속성
  - alternate : 애니메이션이 다시 시작되면서 튀지 않으며 반대로 진행한다.

## transform-origin

- 애니메이션의 중심점을 잡는 속성이다.

```css
.eye {
  transform-origin: center center;
}
```

- center center로 할 경우 svg의 정 중앙이 중심점이 된다.
- 각 아이템별 중심점을 잡으려면 아이템의 속성 cx, cy의 값을 넣어주면 된다.

## rect

- 사각형을 그리는 태그이다.
- 사각형의 기준점은 좌측 상단이다.

```html
<rect x="10" y"20" rx='10' rx='20' width="200" height="100"> </rect>
```

- x = 좌측으로부터 x의 값만큼 오른쪽으로 이동한다.
- y = 위쪽으로부터 y의 값만큼 아래로 이동한다.
- rx = 상단 꼭짓점을 둥글게 만든다.
- ry = 하단 꼭짓점을 둥글게 만든다.
- width = 사각형의 너비를 지정한다.
- height = 사각형의 높이를 지정한다.

![image](https://github.com/merrybmc/TIL/assets/65064563/40b2a831-e5f1-429a-b2d0-af23feb23326)

## circle

- 원을 그리는 태그이다.
- 원의 기준점은 중앙이다.

```html
<circle cx="350" cy="250" r='"100" />
```

![image](https://github.com/merrybmc/TIL/assets/65064563/fd9b70bc-0345-41fe-8021-9bfb5edbf772)

- cx = 좌측으로부터 x의 값만큼 오른쪽으로 이동한다.
- cy = 좌측으로부터 y의 값만큼 아래쪽으로 이동한다.
- r = 원의 크기를 결정하는 반지름이다.

## ellipse

- 납작한 원을 그릴 수 있는 태그이다.

```html
<ellipse cx="200" cy="200" rx="50" ry="100" />
```

![image-20230723151553225](C:\Users\User\AppData\Roaming\Typora\typora-user-images\image-20230723151553225.png)

```html
<ellipse cx="200" cy="200" rx="50" ry="100" />
```

![image](https://github.com/merrybmc/TIL/assets/65064563/99bfba4b-c870-499f-bd52-a11fc94baddb)

## line

- 선을 그을 수 있는 태그이다.

```html
<line x1="10" x2="200" y1="30" y2="250" stroke="black" stroke-width="30" />
```

![image](https://github.com/merrybmc/TIL/assets/65064563/44e528fb-6048-4f42-8daf-1406b8443e19)

- x1 = x축 선의 시작점이다.
- x2 = x축 선의 끝지점이다.
- y1 = y축 선의 시작점이다.
- y2 = y축 선의 끝지점이다.

## polyline

- 직선을 계속 이어서 그릴 수 있는 태그이다.
- stroke가 마무리를 점을 잇지 않는다.

```html
<polyline points="0 0, 200 100, 150 300" stroke="blue" stroke-width="10" />
```

![image](https://github.com/merrybmc/TIL/assets/65064563/36cb0da6-c6d6-489a-afbb-f1dcd7aa3e3a)

- points = 좌표로 점을 정해주고 점을 모두 이어 그리고 채운다.

## polygon

- 직선을 계속 이어서 그릴 수 있는 태그이다.
- stroke가 마무리 점을 잇는다.

```html
<polygon points="0 0, 200 100, 150 300" stroke="blue" stroke-width="10" />
```

![image](https://github.com/merrybmc/TIL/assets/65064563/42c1f8c8-244a-4923-ad4b-4ee0ef1d122e)

## path

- 펜 툴 도구를 통해 패스를 이어 선을 그린다.

```html
<path d="M 300 200 L 500 100 H 50 V 300" />
```

![image](https://github.com/merrybmc/TIL/assets/65064563/04f79c34-7675-4329-bde1-054c7b536f3c)

- d
  - M = 시작점을 위치시킨다.
  - L = 좌표값을 통한 직선을 긋는다.
  - H = 수평으로 직선을 긋는다.
  - V = 수직으로 직선을 긋는다.

```html
<path d="M 300 200 C 100 150,300 50, 500 250" />
```

![image](https://github.com/merrybmc/TIL/assets/65064563/8ca5f46f-4110-4f1f-bb67-8afa1baae92a)

- c = 곡선을 만들 수 있는 속성이다.
  - 첫번째 파라미터에 패스의 시작점을 지정해준다.
  - 두번째 파라미터에 선을 휘어버리는 지점을 지정해준다.
  - 세번째 파라미터에 패스의 끝지점을 지정해준다.

## text

- SVG에 글자를 적용시킬 수 있다.

```html
<text x="20" y="50">Hello SVG</text>
```

![image](https://github.com/merrybmc/TIL/assets/65064563/32ca18ec-cd07-4f7b-9418-8159336b4f33)

​
