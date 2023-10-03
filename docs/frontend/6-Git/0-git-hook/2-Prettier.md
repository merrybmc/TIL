# Prettier

- Code Formatting Tool
- 포맷팅 룰을 커스터마이징 가능하다.
- 코드 포맷팅 툴을 사용함으로서 팀원 모두가 같은 포맷팅 스타일을 공유할 수 있게 된다.
- 개발자는 포맷팅 등 다소 중요하지 않은 요소들에 에너지를 낭비하지 않고 핵심적인 개발에 집중할 수 있게 된다.

## 설치

```bash
npm install prettier --save -dev
```

## Prettier 설정

- Prettier는 프로젝트의 루트 디렉토리에 .prettierrc.확장자 파일을 통해서 설정 가능하다.
- 설정 파일의 확장자 형식은 다양하게 지원하고 있다. (JSON, YAML, JS 등)
- prettier 설정은 포맷팅에만 관련되어 있어 비교적 rule들이 간단한 편이다.

```js
// .prettierrc.js

module.exports = {
  printWidth: 100,
  singleQuote: true,
  arrowParens: 'avoid',
};
```

## rules

### 1. Print Width : 한 줄당 코드 길이 제한

- 가독성을 위해 80자 이상 사용하지 않는 것이 좋다.
- 코드 길이 제한을 넘을 경우 줄바꿈이 된다.
  ```js
  printWidth: 80; // 코드의 길이 제한 80
  ```

### 2. Tab Width : 탭의 길이를 공백 지정한다.

- 기본 값이 2이며 이 설정은 보통 건드리지 않는다.
  ```js
  tabWidth: 2; // 탭의 공백 길이 2
  ```

### 3. Semicolons

- 코드의 끝에 세미콜론 (;) 을 자동으로 붙여줄지 말지 여부를 결정한다.
  ```js
  semi: true; // 코드의 제일 끝에 세미콜론 적용
  semi: false; // 코드의 제일 끝에 세미콜론 미적용
  ```

### 4. Quotes

- 코드의 따옴표, 쌍따옴표의 여부를 자동으로 결정해준다.
- 타입스크립트, JSX에서는 적용이 되지 않는다.
  ```js
  singleQuote: true; // 따옴표 적용 'quote'
  singleQuote: false; // 쌍따옴표 적용 "quote"
  ```

### 5. Quotes

- JSX 코드의 따옴표, 쌍따옴표의 여부를 자동으로 결정해준다.
  ```js
  jsxSingleQuote: true; // 따옴표 적용 'quote'
  jsxSingleQuote: false; // 쌍따옴표 적용 "quote"
  ```

### 6. Trailing Commas

- 배열, 객체 등에서 마지막 요소 뒤에 `쉼표(,)` 를 허용할지 여부를 결정한다,
  ```js
  trailingComma: 'all'; // 마지막 행 마지막 요소 뒤에 , 허용
  trailingComma: 'none'; // 마지막 행 마지막 요소 뒤에 , 미허용
  ```

### 7. Bracket Spacing

- 중괄호 양 옆 제일 끝에 공백 한 칸을 넣을지 말지 결정한다.
  ```js
  bracketSpacing: true; // 중괄호 양 옆 공백 한 칸 추가
  bracketSpacing: false; // 중괄호 양 옆 공백 없음
  ```

### 8. Bracket Line

- 태그의 꺽쇠를 마지막 줄 끝에 놓을지, 줄바꿈을 하여 놓을지 결정한다.
  ```js
  bracketSameLine: true; // 꺽쇠 마지막 줄 끝에 위치
  bracketSameLine: false; // 꺽쇠 줄바꿈하여 위치
  ```

### 9. Bracket Line

- JSX에서의 태그의 꺽쇠를 마지막 줄 끝에 놓을지, 줄바꿈을 하여 놓을지 결정한다.
  ```js
  jsxBracketSameLine: true; // 꺽쇠 마지막 줄 끝에 위치
  jsxBracketSameLine: false; // 꺽쇠 줄바꿈하여 위치
  ```

### 10. Arrow Function Parentheses

- 화살표 함수의 파라미터가 1개일 때 괄호를 생략할지 여부를 결정한다.
  ```js
  arrowParens: 'always'; // 괄호를 생략하지 않는다.
  arrowParens: 'avoid'; // 괄호를 생략한다.
  ```

참고자료<br/>
https://prettier.io/docs/en/options.html
