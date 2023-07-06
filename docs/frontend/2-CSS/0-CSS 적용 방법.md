# CSS 기본

## Intro

- CSS란 **Cascading Style Sheets**의 약자이다.
- Cascade는 폭포, Cascading은 연속화라는 의미를 가지고 있으며 CSS에서 스타일이 적용될 때<br/>
  우선순위를 가지고 적용이 되기 때문에 이 적용되는 과정을 폭포처럼 묘사되어 부르게 되었다.

## CSS 적용 방법

### 1. 인라인 방식

- 태그에 style 속성을 통해 스타일을 입히는 방식이다.

```html
<p stype="color:yellow; background-color:black">Hello World</p>
```

- JSX에서의 인라인 방식은 중괄호를 통한 JavaScript 객체로 스타일을 입힐 수 있다.

```jsx
<p style={{ color: 'white' }}>Hello World</p>
```

### 2. 내부 스타일

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <p>Hello World</p>
</body>
```

- `<head>` 태그 안에 `<style>` 태그를 사용하여 스타일을 입히는 방식이다.
- 내부 스타일 방식은 코드가 길어질수록 HTML 전체의 코드가 길어지기 때문에 효율적이지 않다.

### 3. 외부 스타일

- **link tag**
  - 현재 문서와의 외부 리소스 관계를 명시한다.
  - 빈 태그로 속성만을 포함한다.
  - head 요소 내부에만 위치할 수 있다.

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <p>Hello World</p>
</body>
```

```css
/* style.css */
p {
  color: blue;
}
```

- HTML 문서를 작성할 땐 코드의 가독성과 효율이 높아지기 때문에 외부 스타일 적용을 권장한다.

### 3. 다중 스타일 시트

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

```css
/* style.css */
@import url('reset.css');
@import url('font.css');
@import url('layout.css');
@import url('main.css');
```

- CSS 종속성을 같은 파일에 깔끔한 모습으로 유지할 수 있는 장점이 있다.
- import로 가져온 CSS 파일들을 병렬로 다운로드할 수 없으므로 렌더링 지연시간이 증가되는 이슈가 있다.
