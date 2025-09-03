# 타입 변환과 단축 평가

- 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다.
- 개발자가 의도적으로 값의 타입을 변환하는 것을 **명시적 타입 변환** 또는 **타입 캐스팅**이라 한다.
- 자바스크립트에서는 개발자의 의도와는 상관없이 표현식을 평가하는 도중에 자동으로 타입이 변환되기도 한다.
  이를 **암묵적 타입 변환** 또는 **타입 강제 변환**이라 한다.

## 암묵적 타입 변환

```javascript
"10" + 2; // '102'
5 * "10"; // 50
10; // true
```

- 자바스크립트는 가급적 에러를 발생시키지 않도록 암묵적 타입 변환을 통해 표현식을 평가한다.
- 암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 자동 변환한다.

### 문자열 타입으로 변환

```javascript
1 + "2"; // '12'
0 + ""; // '0'
NaN + ""; // 'NaN'
true + ""; // 'true'
null + ""; // 'null'
undefined +
  ""[(10, 20)] + // 'undefined'
  ""; // '10, 20'
```

- '+' 연산자에서 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작한다.

### 숫자 타입으로 변환

```javascript
1 - "1"; // 0
2 * "10"; // 20
10 / "2"; // 5
0 < "1"; // true
```

- '+' 연산자 외의 산술 연산자는 string 타입이 아닌 피연산자를 string 타입으로 암묵적 타입 변환을 한 후 산술을 하고 값을 만든다.

## 명시적 타입 변환

- 표준 빌트인 생성자 함수 (String, Number, Boolean)를 new 연산자 없이 호출하는 방법과 빌트인 메서드를 사용하는 방법이 있다.

### 문자열 타입으로 변환

```javascript
String(1); // '1'
String(NaN); // 'NaN'
String(true); // 'true'
```

### 숫자 타입으로 변환

```javascript
// 1. Number 생성자 함수를 new 연산자 없이 호출
// 문자열 타입 -> 숫자 타입
Number("0"); // 0
Number("-1"); // -1
Number("10.53"); // 10.53
Number(true); // 1

// 2. parseInt, parseFloat 함수를 사용 (문자열만 변환 가능)
// 문자열 타입 -> 숫자 타입
parseInt("0"); // 0
parseInt("-1"); // -1
parseFloat("10.53"); // 10.53
```

### 불리언 타입으로 변환

```javascript
// 문자열 타입 -> 불리언 타입
Boolean("x"); // true
Boolean(""); // false
Boolean("false"); // true

// 숫자 타입 -> 불리언 타입
Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true

// null 타입 -> 불리언 타입
Boolean(null); // false

// undefined 타입 -> 불리언 타입
Boolean(undefined); // false

// 객체 타입 -> 불리언 타입
Boolean({}); // true
Boolean([]); // true
```

## 단축 평가

### 논리 연산자를 사용한 단축 평가

- 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다.

- 논리 연산자를 통한 단축 평가는 다음 규칙을 따른다.

  | 단축 평가 표현식    | 평과 결과 |
  | ------------------- | --------- |
  | true \|\| anything  | true      |
  | false \|\| anything | anything  |
  | true && anything    | anything  |
  | false && anything   | false     |

#### 논리곱

```javascript
"Cat" && "Dog"; // 'Dog'
```

- 논리곱(&&) 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다.
- 논리곱 연산자는 좌항에서 우항으로 평가가 진행된다.
- 첫 번째 피연산자 'Cat'이 Truthy 값이므로 true로 평가된다.
- 이후 두 번째 피연산자가 논리 연산의 결과를 결정한다. 두 번째 피 연산자도 true이면 'Dog'를 반환, false일 경우 'Cat'을 반환한다.

#### 논리합

```javascript
"Cat" || "Dog"; // 'Cat'
```

- 논리합(||) 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다.
- 논리합 연산자는 좌항에서 우항으로 평가가 진행된다.
- 첫 번째 피연산자 'Cat'이 Truthy 값일 경우 true로 평가되며 두 번째 피연산자까지 평가하지 않고 'Cat'을 반환한다.

### 옵셔널 체이닝 연산자

```javascript
var elem = null;

var value = elem?.value;
console.log(value); // undefined

var elem2 = "hello";
var value2 = elem2?.value2;
console.log(value2); // 'hello'
```

- 좌항의 피연산자가 null 또는 undefined이 아닌지 확인한다.
- 좌항의 피연산자가 null 또는 undefined일 경우 undefined를 반환한다.
- 좌항의 피연산자가 null 또는 undefined가 아닐 경우 우항을 참조한다.

### null 병합 연산자

```javascript
var foo = null ?? "값이 없습니다.";
console.log(foo); // 값이 없습니다.
```

- 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환한다.
- 좌항의 피연산자가 null 또는 undefined가 아닐 경우 좌항의 피연산자를 반환한다.
