# 데이터 타입

- 자바스크립트의 모든 값은 데이터 타입을 갖는다.
- 자바스크립트(ES6)는 총 7개의 데이터 타입을 제공한다.
- 7개의 데이터 타입은 원시 타입과 객체 타입으로 분류할 수 있다.

| 구분      | 데이터 타입          | 설명                                                |
| --------- | -------------------- | --------------------------------------------------- |
| 원시 타입 | 숫자(number) 타입    | 숫자, 정수와 실수 구분 없이 하나의 숫자 타입만 존재 |
|           | 문자열(string) 타입  | 문자열                                              |
|           | 불리언(boolean) 타입 | 논리적 참(true)과 거짓(false)                       |
|           | undefined 타입       | var 키워드로 선언된 변수에 암묵적으로 할당되는 값   |
|           | null 타입            | 값이 없다는 것을 의도적으로 명시할 때 사용하는 값   |
|           | 심벌(symbol) 타입    | ES6에서 추가된 7번째 타입                           |
| 객체 타입 |                      | 객체, 함수, 배열 등                                 |

## 숫자(number) 타입

```javascript
// 모두 숫자 타입이다.
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수
var binary = 0b01000001; // 2진수 (65)
var octal = 0o101; // 8진수 (65)
var hex = 0x41; // 16진수 (65)
```

- 자바스크립트는 다른 C나 자바 등의 언어와 다르게 하나의 숫자 타입만 존재한다.

```javascript
console.log(1 === 1.0); // true
console.log(4 / 2 === 2.0); // true
console.log(3 / 2 === 1.5); // true
```

- 자바스크립트는 모둔 수를 실수로 표현하며, 정수만을 표현하기 위한 데이터 타입이 별도로 존재하지 않는다.
- 정수로 표시되는 값끼리 나누더라도 실수와 같다.

## 문자열(string) 타입

```javascript
// 문자열 타입
var string;
string = "문자열"; // 작은 따옴표
string = "문자열"; // 큰 따옴표
string = `문자열`; // 백틱
string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식된다.';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식된다.";
```

- 텍스트 데이터를 나타내는데 사용하는 타입이다.
- 작은 따옴표(' '), 큰 따옴표(" "), 또는 백틱(``)으로 텍스트를 감싼다.

```javascript
var string = hello; // ReferenceError
```

- 따옴표나 백틱으로 감싸지 않은 텍스트를 할당하면 참조 에러가 발생한다.

### 템플릿 리터럴 (template literal)

```javascript
var template = `Template literal`;
```

- 템플릿 리터럴은 일반 따옴표 문법과는 다르게 백틱(``)을 사용해 표현한다.

```javascript
var first = "Byeong-Min";
var last = "Cho";

// 기본 문자열 표현식
console.log("My name is" + first + " " + last + ".");
// 템플릿 리터럴을 활용한 표현식
console.log(`My name is ${first} ${last}.`);
```

- 템플릿 리터럴 내에서는 ${ } 으로 표현식을 삽입하여 가독성 좋고 간편하게 문자열을 조합할 수 있다.

## boolean 타입

```javascript
var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false
```

- 불리언 타입의 값은 논리적 참, 거짓을 나타내는 true와 false가 있다.

## undefined 타입

```javascript
var foo;
console.log(foo); // undefined
```

- 변수에 값을 할당을 하지 않고 선언을 하면 undefined가 할당이 된다.
- 값이 할당되지 않은 빈 상태를 의미한다.

## null 타입

```javascript
var foo = null;
console.log(foo); // null
```

- 변수에 값이 없다는 것을 의도적으로 명시할 때 사용된다.

## Symbol 타입

```javascript
// Symbol 생성
var key = Symbol("key");
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심 벌을 프로퍼티 키로 사용한다.
obj[key] = "value;";
console.log(obj[key]); // value;
```

- ES6에서 추가된 7번째 타입이다.
- 변경 불가능한 원시 타입의 값이다.
- 심벌 값은 다른 값과 중복되지 않은 유일무이한 값이다.
- 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용된다.
