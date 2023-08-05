# Intro

타입스크립트는 2010년대 초 마이크로소프트 내부에서 만들어진 후 2012년에 출시 및 오픈소스화가 되었다.

타입스크립트는 종종 **'자바스크립트의 상위 집합'** 혹은 **'타입이 있는 자바스크립트'**로 설명된다.

:::tip
타입스크립트는 다음과 같이 네 가지로 설명할수 있다.

1. 프로그래밍 언어: 자바스크립트의 모든 구문과 타입을 정의하고 사용하기 위해 고유 구문이 포함된 언어
2. 타입 검사기: 자바스크립트 및 타입스크립트로 작성된 일련의 파일에서 생성된 모든 구성요소를 이해하고 잘못 구성된 부분을<br/>오류를 통해 알려주는 프로그램

3. 컴파일러: 타입 검사기를 실행하고 문제를 보고한 후 이에 대응되는 자바스크립트 코드를 생성하는 프로그램
4. 언어 서비스: 타입 검사기를 사용해 vsc와 같은 편집기에서 개발자에게 유용한 유틸리티 제공법을 알려주는 프로그램

:::

## 타입스크립트 설치 및 사용

```bash
npm install -g typescript
```

- 웹브라우저는 ts 파일을 인식할 수 없기 때문에 js 파일로 변환 작업을 해야 한다.

ts - js 파일 변환 방법

```bash
tsc - w
```

- 자동으로 ts 파일을 js 파일로 변환해준다.

**HTML 파일에서는 js파일을 사용할 것**

```html
<script src="변환된파일.js"></script>
```

## React에서 typeScript 사용

### 새로운 프로젝트를 만들 경우

```bash
npx create-react-app my-app --template typescript
yarn create react-app my-app --template typescript
```

### 기존 프로젝트에 설치할 경우

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

## 세부 설정

tsconfig.json

```typescript
{
    "complierOptions": {
        "target": "es6", // 필수
        "module": "commonjs"// 필수
    }
}
```

- target = 자바스크립트의 버전
- module = 자바스크립트 파일간의 import 문법

  - commonjs = require 문법 **(권장)**
  - es2015, esnext = import 문법

- 그 외 옵션
  - "allowJs" : true = js 파일들 ts에서 import해서 쓸 수 있는지
  - "checkJs" : true = 일반 js 파일에서도 에러체크 여부
  - "jsx": "preserve" = tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  - "declaration": true = 컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  - "outFile": "./" = 모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  - "outDir": "./" = js파일 아웃풋 경로바꾸기
  - "rootDir": "./" = 루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  - "removeComments": true = 컴파일시 주석제거
  - "strict": true = strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  - "noImplicitAny": true = any타입 금지 여부
  - "strictNullChecks": true = null, undefined 타입에 이상한 짓 할시 에러내기
  - "strictFunctionTypes": true = 함수파라미터 타입체크 강하게
  - "strictPropertyInitialization": true = class constructor 작성시 타입체크 강하게
  - "noImplicitThis": true = this 키워드가 any 타입일 경우 에러내기
  - "alwaysStrict": true = 자바스크립트 "use strict" 모드 켜기
  - "noUnusedLocals": true = 쓰지않는 지역변수 있으면 에러내기
  - "noUnusedParameters": true = 쓰지않는 파라미터 있으면 에러내기
  - "noImplicitReturns": true = 함수에서 return 빼먹으면 에러내기
  - "noFallthroughCasesInSwitch": true = switch문 이상하면 에러내기
