# display

## block

- 태그의 전후에 줄바꿈을 생성한다.
- `<div>, <p>, <h1> ~ <h6>, <form>, <ul>, <ol>, <li>` 및 <br/>
  `<header>, <nav>, <main>, <footer>` 등의 시맨틱 태그가 기본으로 있다.

## inline

- 태그 전후에 줄바꿈을 생성하지 않는다.
- 가로 길이와 세로 높이는 컨텐츠의 크기에 따라 동적으로 결정된다.
- `<span>, <strong>, <em>, <a>, <code>, <abbr>, <q>` 태그가 기본으로 있다.

## inline-block

- 인라인과 블록 특성을 모두 가진다.
- inline처럼 다른 태그와 줄바꿈 없이 나란히 배치된다. <br/>
  block처럼 가로 길이, 세로 높이, 여백 등의 속성을 통해 컨텐츠의 크기를 지정할 수 있다.

```html
<style>
  span {
    display: inline-block;
    width: 100px;
    height: 50px;
    padding: 5px;
  }
</style>

<body>
  <span>Hello world</span>
</body>
```

## flex

- 상위 태그 내부의 태그들의 위치를 상위 태그 안에서 1차원적으로 설정한다.

## grid

- 상위 태그 내부의 태그들의 위치를 상위 태그 안에서 2차원적으로 설정한다.
