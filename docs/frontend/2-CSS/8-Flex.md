# Flex

- Flexible Box 의 약어이다.
- 레이아웃 배치 전용으로 고안된 속성이다.
- 기존에 쓰던 float나 inline-block을 이용한 방법보다 간단하고 편리하다.

**Flex 레이아웃 기본 HTML 구조**

```html
<div class=-'container'>
    <div class='item'>Item</div>
    <div class='item'>Item</div>
    <div class='item'>Item</div>
</div>
```

- 상위 태그인 div.container를 플렉스 컨테이너 <br/>
  하위 태그인 div.item을 플렉스 아이템 이라고 부른다.
- 컨테이너가 Flex의 영향을 받는 전체 공간이며 설정된 속성에 따라 아이템들이 배치된다.

## 기본 속성 display: flex

```html
<style>
  .flex-container {
    display: flex;
  }
</style>

<body>
  <div class="flex-container">
    <div class="flex-item">AAAAAAAAAAAAAAA</div>
    <div class="flex-item">B</div>
    <div class="flex-item">CCCCCC</div>
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis provident ad qui nam, maxime assumenda ullam deserunt error sit harum atque voluptatem cupiditate est animi
</body>
```

![image](https://github.com/merrybmc/TIL/assets/65064563/7c8fc94e-c94e-4fe7-b583-5ec51299caf5)

- 아이템들이 inline처럼 배치된다.
- 컨테이너가 block처럼 배치된다.

### display: inline-flex;

```css
.flex-container {
  display: inline-flex;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/c15399be-27f7-4179-ae83-8c33210580f2)

- 컨테이너가 inline처럼 자기가 가진 아이템의 요소들 만큼만 공간을 차지한다.

## 배치 방향 설정 flex-direction

- 컨테이너에 속성을 추가하여 아이템들의 배치 방법을 정할 수 있다.

### row

- 아이템들이 가로로 배치된다.
- 속성의 기본값이다.

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/28bb0ad0-ad68-4ab9-bde1-6817549f2a60)

### row-reverse

- 아이템들이 가로 역순으로 배치된다.

```css
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/05e985be-6afc-46ed-acda-76d374818531)

### column

- 아이템들이 세로로 배치된다.

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/6cc0f69c-7fd9-4976-8eb6-3c8d5312102f)

### column-reverse

- 아이템들이 세로 역순으로 배치된다.

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/5ea70a78-94d6-4b70-97e8-55e092556a7a)

## 줄넘김 처리 설정 flex-wrap

- 컨테이너가 아이템들을 한 줄에 담을 여유 공간이 없을 때 아이템 줄바꿈을 결정하는 속성이다.

### nowrap

- 아이템들이 줄바꿈을 하지 않으며 컨텐츠가 넘치면 아이템들의 크기가 바뀌게 된다.
- 속성의 기본값이다.

```css
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/776817e3-6ffc-47e7-9145-df8f64dc1206)

### wrap

- 아이템들이 줄바꿈을 한다.

```css
flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/cdee1659-a576-4b95-8463-ccd335d9ed19)

### wrap-reverse

- 아이템들이 줄바꿈을 하며 역순으로 배치된다.

```css
flex-container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/5ebd80b7-cda4-42b4-bc01-77c0a8d1e8de)

## 단축 속성 flex-flow

- 배치 방향과 줄바꿈을 한꺼번에 지정할 수 있는 속성이다.

```css
flex-container {
  display: flex;
  /* 가로 배치, 줄바꿈 */
  flex-flow: row wrap;
}
```

## 메인축 방향 정렬 justify-content

- x축 수평 정렬
- 가로 방향 정렬과 흡사하지만 궁극적으로 가로 정렬은 아니다.

### flex-start

- 아이템들을 시작점으로 정렬한다.
- 속성의 기본값이다.

```css
.flex-container {
  display: flex;
  justify-content: flex-start;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/9823a8d9-815c-4f41-8ab0-c04ee38656f6)

### flex-end

- 아이템들을 끝지점으로 정렬한다.

```css
.flex-container {
  display: flex;
  justify-content: flex-end;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/05e985be-6afc-46ed-acda-76d374818531)

### center

- 아이템들을 가운데로 정렬한다.

```css
.flex-container {
  display: flex;
  justify-content: flex-start;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/403b0f49-f240-4dc8-bd62-4575c513a01e)

### space-between

- 아이템들의 공간을 균일하게 배치한다.

```css
.flex-container {
  display: flex;
  justify-content: space-between;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/370da162-ca94-486a-875e-dea29c998df5)

### space-around

- 각 아이템들의 둘레에 균일한 여백을 주어 배치한다.

```css
.flex-container {
  display: flex;
  justify-content: space-around;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/8b44a1a1-f986-4f8b-82fa-8d00fd577323)

## 수직축 방향 정렬 align-items

- y축 수직 정렬

- 세로 정렬과 흡사하다.

### stretch

- 아이템들이 수직축 방향으로 컨테이너의 높이만큼 늘어난다.
- 속성의 기본 값이다.

```css
.flex-container {
  display: flex;
  align-items: stretch;
  height: 300px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/3e000c29-1044-453f-a9c9-e12d18d82acc)

### flex-start

- 아이템들을 컨테이너 시작 지점으로 정렬한다.
- flex-direction이 row일 경우 위쪽, column일 경우 왼쪽에 배치된다.

**flex-direction: row;**

```css
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 300px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/7af5bdf2-859c-4833-a7f7-809bc4712c64)

**flex-direction: column;**

```css
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/378264d0-bdc3-4a90-95fd-64bb38d6c26d)

### flex-end

- 아이템들을 컨테이너 끝 지점으로 정렬한다.
- flex-direction이 row일 경우 아래, column일 경우 오른쪽으로 배치된다.

**flex-direction: row;**

```css
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 300px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/1a8bfe6e-7bde-4ef2-ab3d-1cfee5ccd9ea)

**flex-direction: column;**

```css
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 300px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/31accc67-9085-4ee8-9802-b4dfaaabe781)

### center

- 아이템들을 가운데로 정렬한다.

```css
.flex-container {
  display: flex;
  align-items: center;
  height: 300px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/b08ff4c5-7373-4dd3-82b8-fa138afc8911)

## 여러 행 정렬 align-content

- wrap이 설정된 상태에서 아이템들의 행이 2줄 이상 되었을 때 수직축 방향 정렬을 하는 속성

### stretch

- 아이템들이 시작점에서 시작하여 줄바꿈이 일어난다.
- 속성의 기본 값이다.

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  height: 300px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/d1dae30f-3a50-4710-936a-c1804fff62ba)

**align-items:stretch일 경우**

- align-content: stretch; 와 동일한 정렬이 적용된다.

![image](https://github.com/merrybmc/TIL/assets/65064563/d1dae30f-3a50-4710-936a-c1804fff62ba)

### flex-start

- 아이템들을 컨테이너 시작 지점으로 정렬한다.

![image](https://github.com/merrybmc/TIL/assets/65064563/96577923-ffbb-49cb-82d2-ee2e9dc45379)

**align-items:start일 경우**

- 줄바꿈이 일어난 아이템이 시작 지점으로 정렬되지 않는다.

![image](https://github.com/merrybmc/TIL/assets/65064563/dcd2ea0b-841c-4440-bf27-8809c36e1e5e)

### flex-end

- 아이템들을 컨테이너 끝 지점으로 정렬한다.

![image](https://github.com/merrybmc/TIL/assets/65064563/663dbb3f-daa4-401c-ae3e-2c57be111ec5)

**align-items:end일 경우**

- 아이템들이 끝 지점으로 정렬되지 않고 정렬된 아이템이 끝 지점에 위치해있다.

![image](https://github.com/merrybmc/TIL/assets/65064563/26839cdc-388a-492d-9404-9aade24208cf)

### center

- 아이템들을 가운데로 정렬한다.

![image](https://github.com/merrybmc/TIL/assets/65064563/39aee2a6-a6d9-4aca-9fd9-76f8d9f379e1)

**align-items:center일 경우**

- 아이템들이 중앙으로 정렬되지 않고 마치 space-around가 적용된 것 처럼 정렬된다.

![image](https://github.com/merrybmc/TIL/assets/65064563/ce022255-7df4-47db-8643-654d045483af)

### space-between

- 아이템들의 공간을 균일하게 배치한다.

![image](https://github.com/merrybmc/TIL/assets/65064563/57bef774-4664-4359-9159-b7a9ef713b24)

### space-around

- 각 아이템들의 둘레에 균일한 여백을 주어 배치한다.

![image](https://github.com/merrybmc/TIL/assets/65064563/ce022255-7df4-47db-8643-654d045483af)

## 개별 아이템 정렬 align-self

- 수직축 아이템을 개별로 정리한다.
- align-items보다 우선 순위로 정렬되는 속성이다.

```css
.flex-container {
  display: flex;
  align-items: flex-start;
  height: 200px;
}

.flex-item:nth-child(2) {
  align-self: center;
}

.flex-item:nth-child(3) {
  align-self: flex-end;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/6fcfee7b-c766-4fc4-85bc-2f7c88cc9639)

## 유연한 박스 flex-basis

- Flex 아이템의 기본 크기를 설정한다.
- flex-direction이 row일 때는 너비, column일 때는 높이를 설정한다.
- 크기의 값은 css에서 흔히 사용하는 각종 단위를 사용한다.

**flex-basis를 사용했을 때**

```css
.flex-item {
  flex-basis: 100px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/9f1ee1ae-4ee9-4d4d-9c7c-2c9b71cc142d)

- 너비가 100px이 넘어가는 아이템은 그대로 크기를 유지한다.
- 너비가 100px가 안되는 아이템은 크기가 100px로 맞춰진다.

**flex-basis를 사용하지 않았을 때**

![image](https://github.com/merrybmc/TIL/assets/65064563/f34a9e44-43e7-4c93-89d5-b9c861f8b947)

- 모든 아이템이 각각의 크기를 유지한다.

**width를 100px으로 설정하였을 경우**

![image](https://github.com/merrybmc/TIL/assets/65064563/358b60db-1c7f-4de8-b5cf-3398857c6f57)

- 모든 아이템의 너비가 100px으로 유지된다.
- 컨텐츠가 넘칠 경우 줄바꿈이 되며 전체 아이템의 높이값도 따라 변한다.

## 유연하게 늘리기 flex-grow

- 아이템이 basis의 값보다 커질 수 있는지 결정하는 속성
- 0보다 큰 값이 들어갈 경우 유연한 박스로 변하며 원래의 크기보다 커지게 된다.
- 값은 basis를 제외한 여백 부분에 지정된 숫자 만큼의 비율로 크기를 나누어 가진다.

**flex-grow: 1을 사용했을 때**

```css
.flex-item {
  flex-grow: 1;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/d5bf0b6e-0d60-4434-a691-345f2534b515)

**flex-grow를 1:2:1 비율로 사용했을 때**

```
.flex-item:nth-child(1) {
    flex-grow: 1;
}

.flex-item:nth-child(2) {
    flex-grow: 2;
}

.flex-item:nth-child(3) {
    flex-grow: 1;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/2110c4b3-ce3b-43a5-ac50-f1f221d3d52c)

- 결과물과 같이 전체 박스의 크기를 비율만큼 크기를 지정하는 것이 아니다.
- 모든 아이템들은 원래 가지고 있는 크기가 다르며 비율은 여백의 크기만큼 늘어난다.

## 유연하게 줄이기 flex-shrink

- 아이템이 basis의 값보다 작아질 수 있는지 결정한다.
- 0보다 큰 값이 들어갈 경우 유연한 박스로 변하며 원래의 크기보다 작아지게 된다.
- 기본값이 1이라 따로 세팅하지 않아도 아이템의 크기가 basis보다 작아질 수 있었다.

**flex-shrink가 1일 경우**

```css
.flex-container {
  display: flex;
  width: 300px;
}

.flex-item:nth-child(1) {
  flex-shrink: 1; /* 기본 값 */
  width: 200px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/90668778-490a-46c2-913e-d7bad8876f73)

- 첫 번째 아이템의 너비가 100px이어도 원래 크기를 유지못하고 찌그러진다.

**flex-shrink가 0일 경우**

```css
.flex-container {
  display: flex;
  width: 300px;
}

.flex-item:nth-child(1) {
  flex-shrink: 0; /* 기본 값 */
  width: 200px;
}
```

![image](https://github.com/merrybmc/TIL/assets/65064563/fa7f659e-afd9-4381-87a1-eefa58a95f57)

- 첫 번째 아이템의 너비가 100px을 유지한다.
- 두 번째 아이템이 컨테이너의 너비를 유지하기 위해 높이의 크기가 커진다.

## 배치 순서 order

- 각 아이템들의 나열 순서를 결정하는 속성이다.
- 속성에 작은 숫자를 넣어줄수록 제일 먼저 배치된다.
- HTML 구조를 바꾸는 것은 아니라서 접근성 측면에서 주의하여서 사용하여야 한다.

```html
<style>
  .flex-container {
    display: flex;
    flex-direction: column;
  }

  .flex-item:nth-child(1) {
    order: 3;
  }
</style>

<body>
  <div class="flex-container">
    <div class="flex-item">AAAAAAAAAAAAAAA</div>
    <div class="flex-item">B</div>
    <div class="flex-item">CCCCCC</div>
  </div>
</body>
```

![image](https://github.com/merrybmc/TIL/assets/65064563/9eb2b86e-4a74-415c-b5de-6cc26821cce8)
