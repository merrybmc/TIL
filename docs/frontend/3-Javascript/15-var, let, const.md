# let, const 키워드와 블록 레벨 스코프

## var 키워드로 선언한 변수의 문제점

- ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었다.
- 다른 언어와는 구별되는 독특한 특징이 있으며, 주의를 기울이지 않으면 심각한 문제를 발생시킬 수 있다.

### 변수 중복 선언 허용

```javascript
var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x); // 100
console.log(y); // 1
```

- var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
- 할당문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
- 할당문이 없는 변수 선언문은 무시된다.

### 함수 레벨 스코프

```javascript
var x = 1;

if (true) {
  var x = 10;
}

console.log(x); // 10

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log(i); // 5
```

- var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
- 따라서 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다.

### 변수 호이스팅

```javascript
console.log(foo); // undefined

foo = 123;

console.log(foo); // 123

var foo;
```

- var 키워드로 선언한 변수는 변수 선언문 이전에 참조할 수 있다.
- 단 할당문 이전에 변수를 참조하면 언제나 undefined를 반환한다.

## let 키워드

- var 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let과 const를 도입했다.

### 변수 중복 선언 금지

```javascript
let foo = 123;

let foo = 456; // SyntaxError: Identifier 'bar' has already been dec lared
```

- let 키워드로 이름이 같은 변수를 중복 선언하면 문법 에러가 발생한다.

### 블록 레벨 스코프

```javascript
let foo = 1; // 전역 변수

{
  let foo = 2; // 지역 변수
}

if (true) {
  let foo = 3; // 지역 변수
}

for (let foo = 0; foo < 10; foo++) {
  // 지역 변수
  console.log(foo);
}

console.log(foo); // 1
```

- let 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

### 변수 호이스팅

```javascript
console.log(foo); // ReferenceError: foo is not defined
let foo;
```

- let 키워드로 선언한 변수를 변수 선언문 이전에 참조하면 참조 에러가 발생한다.
- 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만 초기화 단계는 변수 선언문에 도달했을 때 실행된다.

```javascript
let foo = 1; // 전역 변수
{
  console.log(foo); // ReferenceError
  let foo = 2; // 지역 변수
}
```

- ES6에서 도입된 let, const를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작하지만 사실은 let 키워드는 블록 레벨 스코프 안에서도 여전히 호이스팅이 발생하기 때문에 참조 에러가 발생한다.

### 전역 객체와 let

```javascript
// var

// 전역 변수
var x = 1;
// 암묵적 전역
y = 2;
// 전역 함수
function foo() {}

// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티이다.
console.log(window.x); // 1

// 암묵적 전역은 전역 객체 window의 프로퍼티이다.
console.log(window.y); // 2

// 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티이다.
console.log(window.foo); // function foo() {}
```

- var 키워드로 선언한 전역 변수와 전역 함수, 그리고 선언하지 않은 변수에 값을 할당한 암묵적 전역은 전역 객체 window의 프로퍼티가 된다.

```javascript
let x = 1;

console.log(window.x); // undefined
console.log(x); // 1
```

- let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.

## const 키워드

- 상수를 선언하기 위해 사용한다.
- const 키워드의 특징은 let 키워드와 대부분 동일하다.

### 선언과 초기화

```javascript
const foo; // SyntaxError
const foo = 1;
```

- const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다. 그렇지 않으면 문법 에러가 난다.

### 재할당 금지

```javascript
const foo = 1;
foo = 2; // TypeError
```

- var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지된다.

### 상수

- 변수의 상대 개념인 상수는 재할당이 금지된 변수를 말한다.
- 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.

```javascript
const PI = 3.14;
let radius = 5;

let circle = 2 * pi * radius; // 원의 둘레
```

- 주로 값의 의미를 쉽게 파악할 수 있고 변경될 수 없는 고정값으로 사용할 수 있다.

### const 키워드와 객체

- const 키워드로 선언된 변수에 원시 값을 할당한 경우 값을 변경할 수 없다.
- 하지만 cosnt 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
- 변경 불가능한 값인 원시 값은 재할당 없이 변경(교체)할 수 있는 방법이 없지만 변경 가능한 값인 객체는 재할당 없이도 직접 변경이 가능하기 때문이다.

```javascript
const person = {
  name: "Lee",
};

person.name = "Cho";

console.log(perosn); // {name: "Cho"};
```

- const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지 않는다.
- 새로운 값을 재할당하는 것은 불가능하지만 프로퍼티의 생성, 삭제, 변경을 통해 객체를 변경하는 것은 가능하다.
- 이 때 객체가 변경되더라도 변수에 할당된 참조 값은 변경되지 않는다.
