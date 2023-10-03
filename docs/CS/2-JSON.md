# JSON

- JSON (JavaScript Object Notation) 은 **JavaScript 객체 문법**이다.
- 구조화된 **데이터 교환 형식**, python, javasciprt, java 등 **여러 언어에서 데이터 교환 형식**으로 쓰인다.
- 객체 문법 말고도 **단순 배열, 문자열도 표현 가능**하다.

## JavaScript 객체 문법

- 키 (key) 와 값 (value) 로 구성되어 있다.
- 이미 존재하는 키를 중복 선언하면 나중에 선언한 해당 키에 대응한 값이 덮어쓰이게 된다.

### 작성 형태

```json
// test.json
// { key : value } 형태

{
  "name": "byeongMin",
  "age": 30
}
```

### 똑같은 key가 2개일 때

```json
{
    "name" : "byeongMin",
    "name" : "CheolSu",
    "age" : 30
} => {
    "name" : "CheolSu",
    "age" : 30
}
```

- 이미 존재하는 키를 중복 선언되어 있을 경우 `"name"`의 value가 `"CheolSu"` 로 덮어씌워진다.

### 자바스크립트에서 JSON을 Object로 변환하는 법

```js
const fs = require('fs');
const path = require('path');
const readJSON = fs.readFileSync(path.join(__dirname, 'test.json'));
const jsonObj = JSON.parse(readJSON);
console.log(jsonObj);
```

### 두 개 이상의 객체를 쓸 때 - 배열 사용

```json
[
  {
    "name": "byeongMin",
    "age": 30
  },
  {
    "name": "cheolSu",
    "age": 30
  }
]
```

## 데이터 교환 형식

- 데이터는 추상적인 아이디어에서부터 시작하여 구체적인 측정에 이르기까지 다양한 의미로 쓰인다.
- 실험, 조사, 관찰 등으로 부터 얻은 사실이나 자료 등을 의미한다.

### JSON의 다양한 표현 형식

#### 1. 단순 배열

```json
[1, 2, 3, 4]
```

####

#### 2. 단순 문자열

```json
"byeongMin"
```

- JSON은 객체 표현 형식이 아닌 다른 형식으로도 쓸 수 있다.
- 하지만 보통 이렇게 쓰는 경우는 없다.

### 3. JSON의 타입

- javaScript object와 유사하지만 undefined, 메서드 등을 포함하지는 않는다.
- 포함 가능한 것
  - 수 (Number)
  - 문자열 (String)
  - 참/거짓 (Boolean)
  - 배열 (Array)
  - 객체 (Object)
  - null

## JSON 직렬화, 역직렬화

### 직렬화

- 외부의 시스템에서도 데이터를 사용할 수 있도록 바이트(byte) 형태로 데이터를 변환하는 기술이다.
- JS에서는 JSON.stringify() 가 있다.
- 예) JS의 Object를 파이썬의 dict로 보내주려면 JSON으로 직렬화를 하여 python으로 보내주어야 한다.

### 역직렬화

- 직렬화 개념의 반대 개념이다.
- JS에서는 JSON.parse() 가 있다.

## JSON의 활용

- 프로그래밍 언어와 프레임워크 등에 독립적이므로, 서로 다른 시스템간에 데이터를 교환하기에 좋다.
- 주로 API의 반환 형태, 시스템을 구성하는 설정 파일에 활용된다.
