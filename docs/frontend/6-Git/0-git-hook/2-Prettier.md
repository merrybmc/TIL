# Prettier

- Code Formatting Tool
- 포맷팅 룰을 커스터마이징 가능하다.
- 코드 포맷팅 툴을 사용함으로서 팀원 모두가 같은 포맷팅 스타일을 공유할 수 있게 된다.
- 개발자는 포맷팅 등 다소 중요하지 않은 요소들에 에너지를 낭비하지 않고 핵심적인 개발에 집중할 수 있게 된다.

## 설치

### 기본 설치

```bash
npm install prettier --save -dev
```

## Prettier 설정

- Prettier는 프로젝트의 루트 디렉토리에 .prettierrc.확장자 파일을 통해서 설정 가능하다.
- 설정 파일의 확장자 형식은 다양하게 지원하고 있다. (JSON, YAML, JS 등)
- prettier 설정은 포맷팅에만 관련되어 있어 비교적 rule들이 간단한 편이다.

### 예시)

```js
// .prettierrc.js

module.exports = {
  printWidth: 100,
  singleQuote: true,
  arrowParens: 'avoid',
};
```

## rule
