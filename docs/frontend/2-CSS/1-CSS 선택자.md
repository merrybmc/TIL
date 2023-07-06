# CSS 선택자

## 전체 선택자

- `*` (애스터리스크)를 사용하여 HTML 문서 내의 모든 요소를 선택한다.

```css
* {
  background-color: blue;
}
```

## 태그 선택자

- 특정 태그를 선택하여 스타일을 적용한다.

```css
h1 {
  font-size: 30px;
}
```

## 아이디 선택자 ( # )

- id를 HTML 문서 내에서 중복으로 사용 불가능하다.
- 재사용성이 떨어진다.

```html
<style>
  #myText {
    padding: 10px;
  }
</style>

<body>
  <h1 id="myText">Hello World</h1>
  <p id="myText">Bye World</p>
  // 중복으로 사용 불가능
</body>
```

## 클래스 선택자 ( . )

- 아이디 선택자와 다르게 HTML 문서 내에서 중복으로 사용 가능하다.

```html
<style>
  .myText {
    padding: 10px;
  }
</style>

<body>
  <h1 class="myText">Hello World</h1>
  <p class="myText">Bye World</p>
  // 중복으로 사용 가능
</body>
```

## 속성 선택자 ( [] )

- 해당하는 속성을 가진 태그에 스타일을 적용한다.

```html
<style>
  [type='password'] {
    outline: none;
  }
</style>

<body>
  <input type="password" />
</body>
```

## 그룹 선택자 ( , )

- 태그를 콤마를 통해 여러 개 지정하여 적용할 수 있다.

```html
<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-color: red;
  }
</style>

<body>
  <h1>Hello World</h1>
  <h2>Hello World</h2>
  <h3>Hello World</h3>
  <h4>Hello World</h4>
  <h5>Hello World</h5>
  <h6>Hello World</h6>
</body>
```

## 복합 선택자

### 자손 선택자

- 부모 태그의 자식 태그 전부에 CSS를 적용한다.

- 앞을 부모, 뒤를 자식으로 공백을 통해 구분한다.

```css
/* div 하위의 모든 p 태그에 CSS를 적용한다. */
div p {
  font-size: 30px;
}
```
