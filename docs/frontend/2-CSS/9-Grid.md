# Grid

- 두 방향 (x, y축) 2차원 레이아웃 시스템이다.

**Grid 레이아웃 기본 HTML 구조**

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
  <div class="item">F</div>
  <div class="item">G</div>
  <div class="item">H</div>
  <div class="item">I</div>
</div>
```

- 상위 태그인 div.container를 그리드 컨테이너라고 부른다.
- 하위 태그인 div.item을 그리드 아이템이라고 부른다.
- 컨테이너가 Grid의 영향을 받는 전체 공간이며 속성에 따라 아이템들이 배치된다.

## 기본 속성 display: grid

```css
.container {
  display: grid;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/90f9a554-3a31-4fc7-ba52-47ba865226ae)

- 기본 속성은 flex와 형태와 같이 아이템들이 block 속성이 된다.

### inline-grid

```css
.container {
  display: inline-grid;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/cc8c0a2f-f9b8-4a3e-a8a0-1c2073be0e43)

- inline-grid는 inline-block과 똑같이 동작한다.
- 아이템의 배치보다는 주변 요소들이 어떻게 어우러질지를 결정한다.

## grid-template-columns

- 컨테이너에 Grid 트랙의 크기를 지정해주는 속성이다.
- grid 컨테이너의 열의 크기 및 배치를 결정한다.

### px 단위

```css
.container {
  grid-template-columns: 100px 300px 200px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/a7a4e413-3591-4261-96e1-97ec993978c4)

- 아이템이 3열로 배치된다.
- 각 열마다 순서대로 100px 300px 200px의 너비를 가진다.

### fr 단위

```css
.container {
  grid-template-columns: 1fr 2fr;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/c90690d1-cece-45ee-96e6-497369ef523a)

- fraction (비율) 의 축약어이다.
- fr을 입력한 개수만큼 열이 나누어진다.
- fr에 붙는 숫자는 트랙의 비율을 의미한다. (1:2)

### px fr 혼합

```css
.container {
  grid-template-columns: 1fr 500px 1fr;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/4924aa5e-aa08-42e2-9905-1be8c576367a)

- grid의 트랙이 총 3개의 열로 나누어진다.
- 비율은 1 : 500px : 1 을 의미한다.

### repeat

```css
.container {
  grid-template-columns: repeat(3, 1fr 2fr 1fr);
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/140daff9-277f-493c-92a0-95ba3d610704)

- 열을 첫번째 파라미터에 입력한 숫자만큼 반복하여 나누어가진다.
- repeat(3, 1fr 2fr 1fr) 은 즉 (1fr, 2fr, 1fr, 1fr, 2fr, 1fr, 1fr, 2fr, 1fr)을 의미한다.

## grid-template-rows

- grid 컨테이너의 행의 크기 및 배치를 결정한다.

### px 단위

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px 300px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/c3a48f6f-bdea-4b7d-8c5b-2d0d4dd4f1c4)

- 각 행마다 순서대로 100px 200px 300px의 높이를 가진다.

**설정된 행이 2개일 경우**

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/c34d4c8e-f1c9-41fb-9da2-59d46d34faac)

- 행의 크기가 설정되지 않을 경우 원래 설정된 컨텐츠의 크기만큼만 높이를 가진다.

### fr 단위

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/3eedbd62-634d-4ff3-9f80-820d3dcb0004)

- fr을 입력한 개수만큼 행이 나누어진다.
- 행의 비율이 1:3:1로 적용된다.

### repeat

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 1fr 2fr 1fr);
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/535c19c8-46c9-46cb-8665-ea2933638af2)

- 행을 첫번째 파라미터에 입력한 숫자만큼 반복하여 나누어가진다.
- repeat(2, 1fr 2fr 1fr) 은 즉 (1fr, 2fr, 1fr, 1fr, 2fr, 1fr)을 의미한다.

**repeat에서 fraction을 1개만 사용할 경우**

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  height: 40vh;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/e01460ae-8f68-4537-940f-56767cb29fc3)

- row의 repeat에서 fr을 1개만 사용할 경우 컨테이너의 높이를 별도로 정해주어야한다.

## 최솟값 최댓값 설정 minmax

- 첫 번째 파라미터에 아이템의 최솟값을 확보해준다.
- 두 번째 파라미터에 아이템의 최댓값을 설정해준다.
- auto로 설정할 경우 컨텐츠의 크기만큼 크기가 지정된다.

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/e39598eb-9a8e-47de-8061-bdb409a31788)

- grid 행들의 높이가 최소한 100px을 확보한다.
- 컨텐츠의 양이 방대할 경우 auto로 인해서 컨텐츠의 크기만큼 높이가 늘어난다.

## 자동으로 채우기 auto-fill / fit

- 행과 열의 개수를 정하지 않고 설정된 너비와 높이만큼 허용하는 한 최대한 셀을 채운다.

### auto-fill

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/ba54ce91-1d48-4db9-b9eb-0320c1f7319d)

- 각 셀이 최소한 20% 비율만큼 최솟값을 확보한다.
- 열의 개수를 따로 정해주지 않고 auto-fill로 인해 자동으로 최대한 열을 채운다.
- media query를 쓰지 않고도 반응형 레이아웃을 구현할 수 있다.

### auto-fit

```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(20%, auto));
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/731e747a-dcf5-4a2f-808c-a05b768efa80)

- 셀로 컨테이너를 채우고도 여백이 남을 경우 아이템의 비율을 늘려 꽉채운다.

**auto-fill을 썼을 경우**

![image](https://github.com/merrybmc/TIL/assets/65064563/df622bd3-44e9-464e-87b8-a6b27e9a89aa)

- 20%의 비율을 가진 3개의 셀이 열을 채우고도 컨테이너에 여백이 남는다.

## 간격 만들기 gap

- 그리드 셀 사이의 간격을 설정한다.

### gap

```css
.container {
  gap: 10px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/58701931-1f44-4686-8f72-bb79cd533d5d)

- row-gap, column-gap의 축약 속성이다.
- 셀 간의 행 열 간격이 10px만큼 벌어진다.

### row-gap

```css
.container {
  row-gap: 10px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/1cbbaa2f-f586-4ece-83a6-3264b80b40ee)

- 셀 간의 행에만 간격이 벌어진다.

column-gap

```css
.container {
  column-gap: 10px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/b9f8612e-efd4-428c-bbe4-b4936f1b9bcc)

- 셀 간의 열에만 간격이 벌어진다.

## 그리드 자동 정의 grid-auto-columns / rows

- grid-template의 통제를 벗어난 위치에 있는 트랙을 크기를 지정하는 속성이다.

```css
.container {
  grid-auto-rows: minmax(100px, auto);
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/898218a9-de58-4261-99f5-abcec2c292c1)

- 별도로 행 열의 개수를 설정해주지 않아도 모든 트랙에 크기가 지정된다.

## 셀의 영역 지정 grid - column / row - start / end

- grid 아이템에 적용하는 속성이다.
- 각 셀의 영역을 지정한다.

### column / row - start / end

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  /* 단축속성 grid-column: 1/3; */

  grid-row-start: 1;
  grid-row-end: 3;
  /* 단축속성 grid-row: 1/3 */
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/a18bbb4f-62de-4554-b037-a01236438323)

- end에서는 원하는 값+1을 해주면 해당 영역만큼 크기를 차지한다.

## 영역 이름 정의 grid-template-areas

- 각 영역에 이름을 정의하고 배치하는 방법이다.
- 그리드의 배치 방법중에서 가장 직관적이다.

```html
<style>
  .container {
    grid-template-areas:
      '. header header'
      'a main b'
      'footer footer none';
  }

  .header {
    grid-area: header;
  }
  .sidebar-a {
    grid-area: a;
  }
  .sidebar-b {
    grid-area: b;
  }
  .main {
    grid-area: main;
  }
  .footer {
    grid-area: footer;
  }
</style>

<body>
  <div class="grid-container">
    <div class="header grid-item">Header</div>
    <div class="sidebar-a grid-item">Sidebar A</div>
    <div class="sidebar-b grid-item">Sidebar B</div>
    <div class="main grid-item">Main</div>
    <div class="footer grid-item">Footer</div>
  </div>
</body>
```

![image](https://github.com/merrybmc/TIL/assets/65064563/8ff37ab0-7bcd-4818-b042-b23b8f26bf68)

- 공백을 만들 때는 " . " 이나 none을 써주면 된다.
