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
